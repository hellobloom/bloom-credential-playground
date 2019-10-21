import {Repo} from '../repository'
import * as ethWallet from 'ethereumjs-wallet'
import {toBuffer} from 'ethereumjs-util'
import {ICommand} from '../models'
import {pseudoRandomKey} from '../utls/aes'

const repo = new Repo()

export const account: ICommand = {
  options: [],

  subcommands: {
    create: {
      options: [
        {
          name: 'e',
          type: 'value',
          alias: 'email',
          required: true,
        },
        {
          name: 'n',
          type: 'value',
          alias: 'name',
          required: true,
        },
        {
          name: 'p',
          type: 'value',
          alias: 'privateKey',
        },
      ],
      action: async (args: {
        create: {
          email: string
          name: string
          privateKey?: string
        }
      }) => {
        let wallet: ethWallet.Wallet
        if (!args.create.privateKey) {
          wallet = ethWallet.generate()
        } else {
          wallet = ethWallet.fromPrivateKey(toBuffer(args.create.privateKey))
        }

        await new Repo().createAccount(
          args.create.email,
          `0x${wallet.getAddress().toString('hex')}`,
          `0x${wallet.getPrivateKey().toString('hex')}`,
          JSON.stringify(pseudoRandomKey()),
          args.create.name
        )

        return console.log('created new account')
      },
    },

    ls: {
      options: [],

      action: async () => {
        const accounts = await new Repo().getAccounts()
        accounts.forEach(account => {
          console.log(`${account.rowid}) ${account.email}`)
        })
      },
    },

    rm: {
      options: [
        {
          name: 'a',
          type: 'value',
          alias: 'account',
          required: true,
          getChoices: async () => {
            const accts = await repo.getAccounts()
            return accts.map(a => a.email)
          },
        },
      ],

      action: async (args: {rm: {account: string}}) => {
        await new Repo().deleteAccount(args.rm.account as string)
        console.log(`deleted account ${args.rm.account}`)
      },
    },

    inspect: {
      options: [
        {
          name: 'a',
          type: 'value',
          alias: 'account',
          required: true,
          getChoices: async () => {
            const accts = await repo.getAccounts()
            return accts.map(a => a.email)
          },
        },
      ],

      action: async (args: {inspect: {account: string}}) => {
        const users = await new Repo().getAccounts()
        console.log(
          JSON.stringify(
            users.find(
              u =>
                u.email === args.inspect.account ||
                u.rowid === Number(args.inspect.account)
            )
          )
        )
      },
    },
    setDefault: {
      options: [
        {
          name: 'a',
          type: 'value',
          alias: 'account',
          required: true,
        },
      ],

      action: async (args: {setDefault: {account: string}}) => {
        await new Repo().setDefaultAccount(args.setDefault.account as string)
        console.log(`set default account ${args.setDefault.account}`)
      },
    },
  },
}
