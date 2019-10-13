import {HashingLogic, AttestationData as AD} from '@bloomprotocol/attestations-lib'
import {TNDI} from './types/ndi'
import * as VUB from './base'

const providerFromNDICode = {
  1: 'NDI-SG',
  2: 'NDI-Self',
  3: 'Not-Applicable',
  4: 'SingPass',
}

export const getNodes = (ndiResult: TNDI): HashingLogic.IClaimNode[] => {
  const nodes: HashingLogic.IClaimNode[] = []

  const dataNode: AD.IBaseAttNDIData = {
    date: new Date().toISOString(),
    name: ndiResult.name.value as string,
    country: 'SG',
    biographic: {
      dob: ndiResult.dob.value as string,
      name: ndiResult.name.value as string,
      gender: ndiResult.sex.desc as string,
    },
    '@provider_specific': {
      name: ndiResult.name,
      edulevel: ndiResult.edulevel,
      nationality: ndiResult.nationality,
      occupation: ndiResult.occupation,
      employment: ndiResult.employment,
      mobileno: ndiResult.mobileno,
      mailadd: ndiResult.mailadd,
      passportnumber: ndiResult.passportnumber,
      passportexpirydate: ndiResult.passportexpirydate,
      schoolname: ndiResult.schoolname,
      dob: ndiResult.dob,
      email: ndiResult.email,
      householdincome: ndiResult.householdincome,
      sex: ndiResult.sex,
    },
  }

  nodes.push(VUB.getClaimNode(JSON.stringify(dataNode), 'ndi', 'NDI-SG', '3.0.0'))

  nodes.push(
    VUB.getClaimNode(
      JSON.stringify({data: ndiResult.name}),
      'full-name',
      providerFromNDICode[ndiResult.name.source],
      '4.0.0'
    )
  )

  nodes.push(
    VUB.getClaimNode(
      JSON.stringify({data: ndiResult.mailadd}),
      'address',
      providerFromNDICode[ndiResult.mailadd.source],
      '4.0.0'
    )
  )

  nodes.push(
    VUB.getClaimNode(
      JSON.stringify({data: ndiResult.email}),
      'email',
      providerFromNDICode[ndiResult.email.source],
      '4.0.0'
    )
  )

  nodes.push(
    VUB.getClaimNode(
      JSON.stringify({data: ndiResult.mobileno}),
      'phone',
      providerFromNDICode[ndiResult.mobileno.source],
      '4.0.0'
    )
  )

  nodes.push(
    VUB.getClaimNode(
      JSON.stringify({data: ndiResult.householdincome}),
      'income',
      providerFromNDICode[ndiResult.householdincome.source],
      '4.0.0'
    )
  )

  return nodes
}
