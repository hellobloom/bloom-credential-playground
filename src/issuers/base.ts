import {
  getAttestationTypeStr,
  TAttestationTypeNames,
  AttestationTypeID,
  HashingLogic as HL,
} from '@bloomprotocol/attestations-lib'
import {TNDI} from './types/ndi'
import * as NDI from '../issuers/ndi'
const ethSigUtil = require('eth-sig-util')
import * as fs from 'fs'
import * as path from 'path'
import {NDISample} from './default/ndi'

// Dummy address
const contractAddress = '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'

export const githubContext =
  'https://github.com/hellobloom/attestations-lib/blob/master/src/AttestationData.ts'

export const generateDataNode = (
  data: any,
  type: AttestationTypeID,
  provider: string = 'Bloom'
) => {
  return {
    data: {
      data: JSON.stringify(data),
      nonce: HL.generateNonce(),
      version: '3.0.0',
    },
    type: {
      type: getAttestationTypeStr(type) as TAttestationTypeNames,
      provider,
      nonce: HL.generateNonce(),
    },
    aux: HL.generateNonce(),
  }
}

export const getClaimNode = (
  dataStr: string,
  attType: TAttestationTypeNames,
  provider = 'Bloom',
  version = '3.0.0'
) => {
  return {
    data: {
      data: dataStr,
      nonce: HL.generateNonce(),
      version,
    },
    type: {
      type: attType,
      provider,
      nonce: HL.generateNonce(),
    },
    aux: HL.generateNonce(),
  }
}

export const getDataNodeFromStr = (str: string) => {
  const primary = {
    '@context': githubContext,
    date: new Date().toISOString(),
    data: str,
  }
  return primary
}

export type TDataSrc = TNDI

export interface IDataSrc {
  data: TDataSrc
  type: string
}

export const loadData = (type: string, filePath?: string) => {
  let rawData = ''
  let data
  if (filePath) {
    rawData = fs.readFileSync(path.resolve(filePath), 'utf8')
  }
  switch (type) {
    case 'ndi':
      if (filePath) {
        data = JSON.parse(rawData) as TNDI
      } else {
        data = NDISample
      }
      break

    default:
      throw new Error(`unsupported type ${type}`)
  }
  return data
}

export const getClaimNodes = (src: IDataSrc) => {
  switch (src.type) {
    case 'ndi':
      return NDI.getNodes(src.data)

    default:
      throw new Error(`unsupported type ${src.type}`)
  }
}

export const issueClaimNodes = (nodes: HL.IClaimNode[], issuerKey: Buffer) => {
  const issuanceDate = new Date()
  const expirationDate = new Date()
  expirationDate.setFullYear(issuanceDate.getFullYear() + 5)
  const merkleTreeComponents = HL.getSignedMerkleTreeComponents(
    nodes,
    issuanceDate.toISOString(),
    expirationDate.toISOString(),
    issuerKey
  )
  return merkleTreeComponents
}

export const collectSubjectSignature = (
  components: HL.IBloomMerkleTreeComponents,
  requestNonce: string,
  subjectKey: Buffer
) => {
  const subjectSig = ethSigUtil.signTypedData(subjectKey, {
    data: HL.getAttestationAgreement(
      contractAddress,
      1,
      components.layer2Hash,
      requestNonce
    ),
  })
  return subjectSig
}

export const submitAttestation = (
  components: HL.IBloomMerkleTreeComponents,
  subjectSig: string,
  subjectAddress: string,
  requestNonce: string,
  issuerKey: Buffer
) => {
  return HL.getSignedBatchMerkleTreeComponents(
    components,
    contractAddress,
    subjectSig,
    subjectAddress,
    requestNonce,
    issuerKey
  )
}
