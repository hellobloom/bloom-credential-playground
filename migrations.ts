import {SqliteConnection, transaction} from './src/repository'

interface IMigration {
  name: string
  up: string
  down: string
}

const migrations: IMigration[] = [
  {
    name: 'initial',
    up: `
        create table account (
          email text not null,
          address text not null,
          privateKey text not null,
          name text not null,
          loginCookie text null,
          createdAt timestamp not null default current_timestamp
        );

        create table recentCommands (
          cmd text not null,
          createdAt timestamp not null default current_timestamp
        );
      `,
    down: `
      drop table if exists account;
      drop table if exists recentCommands;
    `,
  },
  {
    name: 'localVault',
    up: `
        create table attestationVault (
          id integer primary key autoincrement,
          accountId integer not null references account,
          createdAt timestamp not null default current_timestamp,
          data text not null
        );
      `,
    down: `
      drop table if exists attestationVault;
    `,
  },
  {
    name: 'sharedCredentials',
    up: `
        create table sharedCredentials (
          id integer primary key autoincrement,
          accountId integer not null references account,
          createdAt timestamp not null default current_timestamp,
          data text not null
        );
      `,
    down: `
      drop table if exists sharedCredentials;
    `,
  },
]

export async function up(file?: string, logs: boolean = true) {
  const client = new SqliteConnection(file)
  logs && console.log('running migrations')

  await client.query(
    `create table if not exists migrations (name text primary key);`
  )

  for (const migration of migrations) {
    const [result] = await client.query<{name: string}>(
      'select name from migrations where name = ?',
      [migration.name]
    )

    if (result !== undefined) {
      continue
    }

    logs && console.log('running ' + migration.name)

    await transaction(client.file, async tx => {
      await tx.query(`insert into migrations values ($1);`, [migration.name])
      await tx.exec(migration.up)
    })
  }
}

export async function down(file?: string, logs: boolean = true) {
  const client = new SqliteConnection(file)
  logs && console.log('reverting migrations')
  const reversed = migrations.slice().reverse()

  for (const migration of reversed) {
    const result = await client.query(
      `select name from migrations where name = $1`,
      [migration.name]
    )

    if (result.length === 0) {
      continue
    }

    logs && console.log('reverting ' + migration.name)

    await transaction(client.file, async tx => {
      await tx.query(`delete from migrations where name = $1;`, [migration.name])
      await tx.exec(migration.down)
    })
  }
}

process.on('unhandledRejection', reason => {
  throw reason
})

if (!module.parent) {
  // down('sqlite/db.sqlite3').catch(e => {
  up().catch(e => {
    throw e
  })
}
