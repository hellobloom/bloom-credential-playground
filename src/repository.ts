import * as sqlite3 from 'sqlite3'
import {Account, AttestationVault, Presentations} from './models'
import {HashingLogic as HL} from '@bloomprotocol/attestations-lib'
import {IVerifiablePresentation} from '@bloomprotocol/verify-kit'

export class SqliteConnection {
  public db: sqlite3.Database

  public constructor(public file: string = './sqlite/db.sqlite3') {
    this.db = new sqlite3.Database(file)
  }

  public async query<T>(sql: string, parameters?: any[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
      try {
        this.db.all(sql, parameters, (err, rows) => {
          if (err) return reject(err)
          return resolve(rows)
        })
      } catch (err) {
        reject(err)
      }
    })
  }

  public async exec(sql: string): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.db.exec(sql, err => {
          if (err) return reject(err)
          return resolve()
        })
      } catch (err) {
        reject(err)
      }
    })
  }

  public values(rowCount: number, columnCount: number) {
    let query = ``
    for (let row = 0; row < rowCount; row++) {
      query += `(`
      for (let col = 0; col < columnCount; col++) {
        query += `?,`
      }
      query = query.slice(0, -1) + '),'
    }
    return query.slice(0, -1)
  }
}

// have to create a new connection to make sure transaction is isolated from other executing queries
// https://github.com/mapbox/node-sqlite3/issues/304
// https://sqlite.org/isolation.html
export async function transaction<T>(
  file: string,
  callback: (conn: SqliteConnection) => Promise<T>
) {
  const connection = new SqliteConnection(file)
  try {
    await connection.query('BEGIN')
    const result = await callback(connection)
    await connection.query('COMMIT')
    return result
  } catch (e) {
    await connection.query('ROLLBACK')
    throw e
  }
}

export type Value = string | number | boolean

export class Repo {
  public connection: SqliteConnection

  constructor(public file?: string) {
    this.connection = new SqliteConnection(file)
  }

  public async createAccount(
    email: string,
    address: string,
    privateKey: string,
    name: string
  ) {
    return this.connection.query(
      `
      insert into account
      (email, address, privateKey, name) values
      ${this.connection.values(1, 4)};
    `,
      [email, address, privateKey, name]
    )
  }

  public async getAccounts(): Promise<Account[]> {
    return this.connection.query(`select rowid, * from account;`)
  }

  public async deleteAccount(user: string) {
    return this.connection.query(
      `
      delete from account where email = ? or rowid = ?;
    `,
      [user, user]
    )
  }

  public async setDefaultAccount(user: string) {
    return this.connection.query(
      `
      update account set defaultAccount = case when email = ? or rowid = ? then 1 else 0 end;
    `,
      [user, user]
    )
  }

  public async setPendingEmail(rowid: number, pendingEmail: string) {
    return this.connection.query(
      `
      update account set "pendingEmail" = ? where rowid = ?;
    `,
      [pendingEmail, rowid]
    )
  }

  public async updateEmail(rowid: number, pendingEmail: string) {
    return this.connection.query(
      `
      update account set email = ?, "pendingEmail" = null where rowid = ?;
    `,
      [pendingEmail, rowid]
    )
  }

  public async storeAttestation(
    accountId: number,
    data: HL.IBloomBatchMerkleTreeComponents
  ) {
    console.log(data)
    return this.connection.query(
      `
      insert into attestationVault (accountId, data) values (?,?);
    `,
      [accountId, JSON.stringify(data)]
    )
  }

  public async getAttestations(): Promise<AttestationVault[]> {
    return this.connection.query(`select id, * from attestationVault;`)
  }

  public async deleteAttestation(id: number) {
    return this.connection.query(
      `
      delete from attestationVault where id = ?;
    `,
      [id]
    )
  }

  public async getAttestation(
    id: number
  ): Promise<{data: HL.IBloomBatchMerkleTreeComponents; subjectId: number}> {
    const attestations = await this.getAttestations()
    const attestation = attestations.find(a => a.id === id)
    if (attestation === undefined)
      throw new Error(`attestation: ${id.toString()} not found`)
    return {
      data: JSON.parse(attestation.data) as HL.IBloomBatchMerkleTreeComponents,
      subjectId: attestation.accountId,
    }
  }

  public async storePresentation(accountId: number, data: IVerifiablePresentation) {
    console.log(data)
    return this.connection.query(
      `
      insert into sharedCredentials (accountId, data) values (?,?);
    `,
      [accountId, JSON.stringify(data)]
    )
  }

  public async getPresentations(): Promise<Presentations[]> {
    return this.connection.query(`select id, * from sharedCredentials;`)
  }

  public async getPresentation(
    id: number
  ): Promise<{data: IVerifiablePresentation; subjectId: number}> {
    const presentations = await this.getPresentations()
    const presentation = presentations.find(a => a.id === id)
    if (presentation === undefined)
      throw new Error(`Presentation: ${id.toString()} not found`)
    return {
      data: JSON.parse(presentation.data) as IVerifiablePresentation,
      subjectId: presentation.accountId,
    }
  }

  public async deletePresentation(id: number) {
    return this.connection.query(
      `
      delete from attestationVault where id = ?;
    `,
      [id]
    )
  }

  public async getAccount(search: Value): Promise<Account> {
    const accounts = await this.getAccounts()
    const account = accounts.find(
      u =>
        u.email === search ||
        u.rowid === Number(search) ||
        u.name === search ||
        u.address === search
    )
    if (account === undefined) throw new Error(`account: ${search} not found`)
    return account
  }

  public async getRecentCommands(): Promise<string[][]> {
    const commands = await this.connection.query<{cmd: string}>(
      `
      select distinct cmd from recentCommands order by createdAt desc;
    `
    )
    return commands.map(c => JSON.parse(c.cmd))
  }

  public async addRecentCommand(argv: string[]) {
    return this.connection.query(
      `
      insert into recentCommands (cmd) values (?);
    `,
      [JSON.stringify(argv)]
    )
  }

  public async changeKey(
    account: string | number,
    address: string,
    privateKey: string
  ) {
    return this.connection.query<void>(
      `
      update account set
        address = ?,
        privateKey = ?,
      where rowid = ? or email = ?;
    `,
      [address, privateKey, account, account]
    )
  }
}
