import {
  HashingLogic as HL,
  AttestationData as AD,
} from '@bloomprotocol/attestations-lib'
import * as T from './types/camt.052.001.08'
import * as VUB from './base'
import * as R from 'ramda'
import * as dayjs from 'dayjs'

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

  const issuer =
    (R.path(
      [
        'Document',
        'BkToCstmrDbtCdtNtfctn',
        'Ntfctn',
        'Acct',
        'Svcr',
        'FinInstnId',
        'BIC',
      ],
      d
    ) as string | undefined) || 'Unknown'

  const ntf: T._AccountReport25 = d.Document.BkToCstmrDbtCdtNtfctn.Ntfctn
  if (!ntf.Ntry) return nodes
  const ntry: T.ReportEntry10[] = ntf.Ntry

  const bookdts = ntry.map(x => (x.BookgDt!.Dt as unknown) as string).sort()
  const earliest = bookdts[0]
  const latest = bookdts[bookdts.length - 1]

  const rawTxs: {
    expense: {[key: string]: Partial<AD.TBaseAttIncomeStream>}
    income: {[key: string]: Partial<AD.TBaseAttIncomeStream>}
  } = {
    expense: {},
    income: {},
  }

  const txs: {
    expense: Array<AD.TBaseAttIncomeStream>
    income: Array<AD.TBaseAttIncomeStream>
  } = {
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
    let txrr = rawTxs[k as string]
    if (!txrr[party]) {
      txrr[party] = {transactions: []}
    }
    txrr[party].transactions.push(tx)
  })

  Object.keys(rawTxs).forEach((txk: string) => {
    Object.keys(rawTxs[txk]).forEach((txpk: string) => {
      let partyObj = rawTxs[txk][txpk]
      let dts = partyObj.transactions.map((x: TBaseAttIncomeTx) => x.date).sort()
      let start_date = dts[0]
      let end_date = dts[dts.length - 1]
      let is: AD.TBaseAttIncomeStream = {
        start_date,
        end_date,
        length: dayjs(end_date).diff(dayjs(start_date), 'day'),
        transactions: partyObj.transactions,
      }
      if (txk === 'income') {
        txs.income.push(is)
      } else if (txk === 'expense') {
        txs.expense.push(is)
      }
    })
  })

  const dataNode: AD.TBaseAttIncome = {
    '@context': VUB.githubContext,
    generality: 1,
    summary: {
      start_date: earliest,
      end_date: latest,
    },
    data: txs,
  }

  nodes.push(VUB.getClaimNode(JSON.stringify(dataNode), 'income', issuer, '3.0.0'))

  return nodes
}
