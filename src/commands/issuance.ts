import {Repo} from '../repository'
import * as ethWallet from 'ethereumjs-wallet'
import {toBuffer} from 'ethereumjs-util'
import {ICommand} from '../models'
import {
  getClaimNodes,
  issueClaimNodes,
  collectSubjectSignature,
  submitAttestation,
  loadData,
} from '../issuers/base'
import {HashingLogic} from '@bloomprotocol/attestations-lib'

const repo = new Repo()

export const issuance: ICommand = {
  options: [],

  subcommands: {
    create: {
      options: [
        {
          name: 't',
          type: 'value',
          alias: 'type',
          required: true,
          getChoices: () => ['ndi', 'bank'],
        },
        {
          name: 's',
          type: 'value',
          alias: 'subjectId',
          required: true,
          getChoices: async () => {
            const accts = await repo.getAccounts()
            return accts.map(a => a.email)
          },
        },
        {
          name: 'i',
          type: 'value',
          alias: 'issuerId',
          required: true,
          getChoices: async () => {
            const accts = await repo.getAccounts()
            return accts.map(a => a.email)
          },
        },
        {
          name: 'c',
          type: 'value',
          alias: 'src',
        },
      ],
      action: async (args: {
        create: {
          type: string
          subjectId: number // acct ID
          issuerId: number // acct ID
          src?: string
        }
      }) => {
        const subject = await new Repo().getAccount(args.create.subjectId)
        const subjectWallet = ethWallet.fromPrivateKey(toBuffer(subject.privateKey))
        const issuer = await new Repo().getAccount(args.create.issuerId)
        const issuerWallet = ethWallet.fromPrivateKey(toBuffer(issuer.privateKey))

        // Load data from file or use sample
        const data = loadData(args.create.type, args.create.src)
        // First extract data from source and translate into claim nodes
        const nodes = getClaimNodes({type: args.create.type, data})

        // Second collect signatures from issuer
        const requestNonce = HashingLogic.generateNonce()
        const merkleTreeComponents = issueClaimNodes(
          nodes,
          issuerWallet.getPrivateKey()
        )

        // Third collect signature from the subject
        const subjectSig = collectSubjectSignature(
          merkleTreeComponents,
          requestNonce,
          subjectWallet.getPrivateKey()
        )

        // Fourth submit to the issuer to finalize the attestation
        const batchComponents = submitAttestation(
          merkleTreeComponents,
          subjectSig,
          subjectWallet.getAddressString(),
          requestNonce,
          issuerWallet.getPrivateKey()
        )
        await new Repo().storeAttestation(subject.rowid, batchComponents)
        return console.log('issued credential')
      },
    },

    ls: {
      options: [],

      action: async () => {
        const attestations = await new Repo().getAttestations()
        attestations.forEach(a => {
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
        await new Repo().deleteAttestation(parseInt(args.rm.id, 10))
        console.log(`deleted attestation ${args.rm.id}`)
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
        const attestations = await new Repo().getAttestations()
        console.log(
          JSON.stringify(
            attestations.find(a => a.id === parseInt(args.inspect.id, 10))
          )
        )
      },
    },
  },
}
