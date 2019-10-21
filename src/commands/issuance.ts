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
        {
          name: 'e',
          type: 'flag',
          alias: 'encrypt',
          required: false,
        },
      ],
      action: async (args: {
        create: {
          type: string
          subjectId: number // acct ID
          issuerId: number // acct ID
          src?: string
          encrypt?: string
        }
      }) => {
        const encrypt = toBoolean(args.create.encrypt)
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

        let encryptedComponents: string = ''
        if (encrypt) {
          if (subject.aesKey) {
            encryptedComponents = encryptAES(
              JSON.stringify(batchComponents),
              JSON.parse(subject.aesKey) as number[]
            )
            console.log(`encrypted credential components: ${encryptedComponents}`)
          } else {
            throw new Error(
              `Failed to encrypt credential due to missing AES key for subject ${subject.email}`
            )
          }
        }

        await new Repo().storeAttestation(
          subject.rowid,
          JSON.stringify(batchComponents),
          encryptedComponents
        )
        return console.log('issued credential')
      },
    },

    ls: {
      options: [],

      action: async () => {
        const attestations = await new Repo().getAttestations()
        attestations.forEach(a => {
          console.log(`${a.id}) ${a.data} ${a.encryptedData}`)
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
        {
          name: 'c',
          type: 'flag',
          alias: 'cyphertext',
          required: false,
        },
      ],

      action: async (args: {
        inspect: {
          id: string
          decrypt?: string
          cyphertext?: string
        }
      }) => {
        const decrypt = toBoolean(args.inspect.decrypt)
        const cyphertext = toBoolean(args.inspect.cyphertext)
        const attestations = await new Repo().getAttestations()
        const attestation = attestations.find(
          a => a.id === parseInt(args.inspect.id, 10)
        )
        if (attestation) {
          if (decrypt) {
            const subject = await new Repo().getAccount(attestation.accountId)
            if (!subject.aesKey)
              throw new Error(`Failed to decrypt data for subject ${subject.email}`)
            const decryptedComponents = decryptAES(
              attestation.encryptedData,
              JSON.parse(subject.aesKey) as number[]
            )
            console.log(decryptedComponents)
          } else {
            if (cyphertext) {
              console.log(attestation.encryptedData)
            } else {
              console.log(attestation.data)
            }
          }
        } else {
          console.log(`No attestation data found for ${args.inspect.id}`)
        }
      },
    },
  },
}
