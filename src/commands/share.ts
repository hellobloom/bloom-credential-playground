import {Repo} from '../repository'
import {ICommand} from '../models'
import {
  IVerifiableCredential,
  getBatchCredential,
  getVerifiablePresentation,
  getPresentationProof,
} from '@bloomprotocol/verify-kit'
import {HashingLogic as HL} from '@bloomprotocol/attestations-lib'
import * as ethWallet from 'ethereumjs-wallet'
import {toBuffer} from 'ethereumjs-util'

const repo = new Repo()

export const share: ICommand = {
  options: [],

  // inspect - what types are available for sharing
  // commands - preview (just log), share (store in table for recipient), verify (read from received table and verify integrity)

  subcommands: {
    preview: {
      options: [
        {
          name: 'i',
          type: 'value',
          alias: 'id',
          required: true,
          getChoices: async () => {
            const accts = await repo.getAttestations()
            return accts.map(a => a.id.toString())
          },
        },
        {
          name: 't',
          type: 'value',
          alias: 'type',
          required: true,
          getChoices: async (args: {
            preview: {
              id: string
            }
          }) => {
            const attestation = await repo.getAttestation(
              parseInt(args.preview.id, 10)
            )
            return attestation.data.claimNodes.map(c => c.claimNode.type.type)
          },
        },
      ],
      action: async (args: {
        preview: {
          id: string
          type: string
        }
      }) => {
        const attestation = await new Repo().getAttestation(
          parseInt(args.preview.id, 10)
        )
        if (attestation) {
          const data = attestation.data
          const verifiableCredentials: IVerifiableCredential[] = []
          const node = data.claimNodes.find(
            n => n.claimNode.type.type === args.preview.type
          )
          if (!node) {
            return console.log(
              `Type ${args.preview.type} not found on attestation id ${args.preview.id}`
            )
          }
          verifiableCredentials.push(getBatchCredential([], 'mainnet', data, node))
          console.log(verifiableCredentials)
        } else {
          return console.log(`Attestation id ${args.preview.id} not found`)
        }
        return console.log('Formatted credential for sharing')
      },
    },

    share: {
      options: [
        {
          name: 'i',
          type: 'value',
          alias: 'id',
          required: true,
          getChoices: async () => {
            const attestations = await repo.getAttestations()
            return attestations.map(a => a.id.toString())
          },
        },
        {
          name: 't',
          type: 'value',
          alias: 'type',
          required: true,
          getChoices: async (args: {
            share: {
              id: string
            }
          }) => {
            const attestation = await repo.getAttestation(
              parseInt(args.share.id, 10)
            )
            return attestation.data.claimNodes.map(c => c.claimNode.type.type)
          },
        },
      ],
      action: async (args: {
        share: {
          id: string
          type: string
        }
      }) => {
        const attestation = await new Repo().getAttestation(
          parseInt(args.share.id, 10)
        )
        const qrToken = HL.generateNonce()
        if (attestation) {
          const subject = await new Repo().getAccount(attestation.subjectId)
          const subjectWallet = ethWallet.fromPrivateKey(
            toBuffer(subject.privateKey)
          )
          const data = attestation.data
          const verifiableCredentials: IVerifiableCredential[] = []
          const node = data.claimNodes.find(
            n => n.claimNode.type.type === args.share.type
          )
          if (!node) {
            return console.log(
              `Type ${args.share.type} not found on attestation id ${args.share.id}`
            )
          }
          verifiableCredentials.push(getBatchCredential([], 'mainnet', data, node))
          const presentationDomain = 'https://bloom.co/receiveData'
          const presentationProof = getPresentationProof(
            subjectWallet.getAddressString(),
            qrToken,
            presentationDomain,
            verifiableCredentials
          )
          const presentationSig = HL.signHash(
            toBuffer(HL.hashMessage(HL.orderedStringify(presentationProof))),
            subjectWallet.getPrivateKey()
          )
          const presentation = getVerifiablePresentation(
            qrToken,
            verifiableCredentials,
            presentationProof,
            presentationSig
          )
          await new Repo().storePresentation(subject.rowid, presentation)
          console.log(presentation)
        } else {
          return console.log(`Attestation id ${args.share.id} not found`)
        }
        return console.log('Shared presentation')
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
            const attestations = await repo.getAttestations()
            return attestations.map(a => a.id.toString())
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
            const attestations = await repo.getAttestations()
            return attestations.map(a => a.id.toString())
          },
        },
      ],

      action: async (args: {inspect: {id: string}}) => {
        const attestation = await new Repo().getAttestation(
          parseInt(args.inspect.id, 10)
        )
        console.log(
          `The following types are available to share from attestation id ${args.inspect.id}`
        )
        attestation.data.claimNodes.forEach(c => console.log(c.claimNode.type.type))
      },
    },
  },
}
