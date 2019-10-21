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
import {encryptAES, decryptAES} from '../utls/aes'
import {toBoolean} from '../utls/misc'

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
          getChoices: () => ['ndi'],
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

        let componentsStore: string
        if (subject.aesKey) {
          try {
            componentsStore = encryptAES(JSON.stringify(batchComponents), JSON.parse(
              subject.aesKey
            ) as number[])
            console.log(`encrypted credential components: ${componentsStore}`)
          } catch {
            componentsStore = JSON.stringify(batchComponents)
            console.log(
              `failed to encrypt credential components: ${componentsStore}`
            )
          }
        } else {
          componentsStore = JSON.stringify(batchComponents)
        }

        await new Repo().storeAttestation(subject.rowid, componentsStore)
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
        {
          name: 'd',
          type: 'flag',
          alias: 'decrypt',
          required: false,
        },
      ],

      action: async (args: {
        inspect: {
          id: string
          decrypt?: string
        }
      }) => {
        const decrypt = toBoolean(args.inspect.decrypt)
        const attestations = await new Repo().getAttestations()
        const attestation = attestations.find(
          a => a.id === parseInt(args.inspect.id, 10)
        )
        if (attestation) {
          if (decrypt) {
            const subject = await new Repo().getAccount(attestation.accountId)
            if (!subject.aesKey)
              throw new Error(`Failed to decrypt data for subject ${subject.email}`)
            const decryptedComponents = decryptAES(attestation.data, JSON.parse(
              subject.aesKey
            ) as number[])
            console.log(decryptedComponents)
          } else {
            console.log(attestation.data)
          }
        } else {
          console.log(`No attestation data found for ${args.inspect.id}`)
        }
      },
    },
  },
}
