import {
  HashingLogic as HL,
  AttestationData as AD,
} from '@bloomprotocol/attestations-lib'
import * as T from './types/camt.052.001.08'
import * as VUB from './base'
import * as R from 'ramda'

type TBaseAttIncomeTx = Required<
  Required<AD.TBaseAttIncomeStream>['transactions']
>[number]
const providerFromNDICode = {
  1: 'NDI-SG',
  2: 'NDI-Self',
  3: 'Not-Applicable',
  4: 'SingPass',
}

export const getNodes = (d: any): HL.IClaimNode[] => {
  const nodes: HL.IClaimNode[] = []

  const ntf: T._AccountReport25 = d.Document.BkToCstmrDbtCdtNtfctn.Ntfctn
  if (!ntf.Ntry) return nodes
  const ntry: T.ReportEntry10[] = ntf.Ntry

  const bookdts = ntry.map(x => (x.BookgDt!.Dt as unknown) as string).sort()
  const earliest = bookdts[0]
  const latest = bookdts[bookdts.length - 1]

  const txs: {expense: Array<TBaseAttIncomeTx>; income: Array<TBaseAttIncomeTx>} = {
    expense: [],
    income: [],
  }

  ntry.forEach(x => {
    let k: 'expense' | 'income'
    let tx: TBaseAttIncomeTx = {
      date: (x.BookgDt!.Dt as unknown) as string,
      currency: x.Amt.Ccy,
      value: x.Amt['$t'],
    }
    let party: undefined | string
    let pk: undefined | string
    let txdts: T.EntryTransaction10[] | undefined = R.path(['NtryDtls', 'TxDtls'], x)
    if (x.CdtDbtInd === 'DBIT') {
      k = 'expense'
      pk = 'Cdtr'
    } else if (x.CdtDbtInd === 'CRDT') {
      k = 'income'
      pk = 'Dbtr'
    } else {
      return
    }
    if (txdts) {
      party = txdts.map(td => R.path(['RltdPties', pk!, 'Nm'], td)).join(', ')
    }
    txs[k as string][party] = tx
  })

  const summary: AD.TBaseAttIncomeSummary = {
    start_date: earliest,
    end_date: latest,
  }

  const dataNode: AD.IBaseAttNDIData = {
    date: new Date().toISOString(),
    name: accountInfo.name.value as string,
    country: 'SG',
    biographic: {
      dob: accountInfo.dob.value as string,
      name: accountInfo.name.value as string,
      gender: accountInfo.sex.desc as string,
    },
    '@provider_specific': {
      name: accountInfo.name,
      edulevel: accountInfo.edulevel,
      nationality: accountInfo.nationality,
      occupation: accountInfo.occupation,
      employment: accountInfo.employment,
      mobileno: accountInfo.mobileno,
      mailadd: accountInfo.mailadd,
      passportnumber: accountInfo.passportnumber,
      passportexpirydate: accountInfo.passportexpirydate,
      schoolname: accountInfo.schoolname,
      dob: accountInfo.dob,
      email: accountInfo.email,
      householdincome: accountInfo.householdincome,
      sex: accountInfo.sex,
    },
  }

  nodes.push(VUB.getClaimNode(JSON.stringify(dataNode), 'ndi', 'NDI-SG', '3.0.0'))

  nodes.push(
    VUB.getClaimNode(
      JSON.stringify({data: accountInfo.name}),
      'full-name',
      providerFromNDICode[accountInfo.name.source],
      '4.0.0'
    )
  )

  nodes.push(
    VUB.getClaimNode(
      JSON.stringify({data: accountInfo.mailadd}),
      'address',
      providerFromNDICode[accountInfo.mailadd.source],
      '4.0.0'
    )
  )

  nodes.push(
    VUB.getClaimNode(
      JSON.stringify({data: accountInfo.email}),
      'email',
      providerFromNDICode[accountInfo.email.source],
      '4.0.0'
    )
  )

  nodes.push(
    VUB.getClaimNode(
      JSON.stringify({data: accountInfo.mobileno}),
      'phone',
      providerFromNDICode[accountInfo.mobileno.source],
      '4.0.0'
    )
  )

  nodes.push(
    VUB.getClaimNode(
      JSON.stringify({data: accountInfo.householdincome}),
      'income',
      providerFromNDICode[accountInfo.householdincome.source],
      '4.0.0'
    )
  )

  return nodes
}
