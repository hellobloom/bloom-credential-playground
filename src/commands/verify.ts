import {Repo} from '../repository'
import {ICommand} from '../models'
import * as VK from '@bloomprotocol/verify-kit'
import {toBoolean} from '../utls/misc'

const repo = new Repo()

export const verify: ICommand = {
  options: [],

  // inspect - what types are available for sharing
  // commands - preview (just log), share (store in table for recipient), verify (read from received table and verify integrity)

  subcommands: {
    verify: {
      options: [
        {
          name: 'i',
          type: 'value',
          alias: 'id',
          required: true,
          getChoices: async () => {
            const presentations = await repo.getPresentations()
            return presentations.map(a => a.id.toString())
          },
        },
        {
          name: 'v',
          type: 'flag',
          alias: 'verbose',
          required: false,
        },
      ],
      action: async (args: {
        verify: {
          id: string
          verbose?: string
        }
      }) => {
        const verbose = toBoolean(args.verify.verbose)
        const presentation = await new Repo().getPresentation(
          parseInt(args.verify.id, 10)
        )
        const result = VK.validateVerifiablePresentation(presentation.data, {
          verbose,
        })
        if (result.kind === 'validated') {
          console.log(
            `Verified data of type ${presentation.data.verifiableCredential[0].type} from subject ${presentation.data.proof.creator}`
          )
          console.log(
            `Verified data: ${presentation.data.verifiableCredential[0].credentialSubject.data}`
          )
        } else {
          console.log(`Could not verify presentation. ${result.message}`)
        }
        return console.log('Completed verification')
      },
    },

    ls: {
      options: [],

      action: async () => {
        const presentations = await new Repo().getPresentations()
        presentations.forEach(a => {
          console.log(`${a.id}) ${a.data}`)
        })
      },
    },
    rm: {
      options: [
        {
          name: 'i',
          type: 'value',
          alias: 'id',
          required: true,
          getChoices: async () => {
            const presentations = await repo.getPresentations()
            return presentations.map(a => a.id.toString())
          },
        },
      ],

      action: async (args: {rm: {id: string}}) => {
        await new Repo().deletePresentation(parseInt(args.rm.id, 10))
        console.log(`deleted presentation ${args.rm.id}`)
      },
    },

    inspect: {
      options: [
        {
          name: 'i',
          type: 'value',
          alias: 'id',
          required: true,
          getChoices: async () => {
            const presentations = await repo.getPresentations()
            return presentations.map(a => a.id.toString())
          },
        },
      ],

      action: async (args: {inspect: {id: string}}) => {
        const presentation = await new Repo().getPresentation(
          parseInt(args.inspect.id, 10)
        )
        console.log(JSON.stringify(presentation.data))
      },
    },
  },
}
