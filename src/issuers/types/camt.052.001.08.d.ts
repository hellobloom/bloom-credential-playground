import * as Primitive from './xml-primitives'

// Source files:
// http://localhost:8080/camt.052.001.08.xsd

interface BaseType {
  _exists: boolean
  _namespace: string
}
interface _AccountIdentification4Choice extends BaseType {
  IBAN: string
  Othr: GenericAccountIdentification1
}
export interface AccountIdentification4Choice extends _AccountIdentification4Choice {
  constructor: {new (): AccountIdentification4Choice}
}
export var AccountIdentification4Choice: {new (): AccountIdentification4Choice}

interface _AccountInterest4 extends BaseType {
  FrToDt?: DateTimePeriod1
  Rate?: Rate4[]
  Rsn?: string
  Tax?: TaxCharges2
  Tp?: InterestType1Choice
}
export interface AccountInterest4 extends _AccountInterest4 {
  constructor: {new (): AccountInterest4}
}
export var AccountInterest4: {new (): AccountInterest4}

interface _AccountReport25 extends BaseType {
  Acct: CashAccount39
  AddtlRptInf?: string
  Bal?: CashBalance8[]
  CpyDplctInd?: CopyDuplicate1Code
  CreDtTm?: Date
  ElctrncSeqNb?: number
  FrToDt?: DateTimePeriod1
  Id: string
  Intrst?: AccountInterest4[]
  LglSeqNb?: number
  Ntry?: ReportEntry10[]
  RltdAcct?: CashAccount38
  RptgSeq?: SequenceRange1Choice
  RptgSrc?: ReportingSource1Choice
  RptPgntn?: Pagination1
  TxsSummry?: TotalTransactions6
}
export interface AccountReport25 extends _AccountReport25 {
  constructor: {new (): AccountReport25}
}
export var AccountReport25: {new (): AccountReport25}

interface _AccountSchemeName1Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface AccountSchemeName1Choice extends _AccountSchemeName1Choice {
  constructor: {new (): AccountSchemeName1Choice}
}
export var AccountSchemeName1Choice: {new (): AccountSchemeName1Choice}

interface _ActiveCurrencyAndAmount extends _ActiveCurrencyAndAmount_SimpleType {
  Ccy: string
}
export interface ActiveCurrencyAndAmount extends _ActiveCurrencyAndAmount {
  constructor: {new (): ActiveCurrencyAndAmount}
}
export var ActiveCurrencyAndAmount: {new (): ActiveCurrencyAndAmount}

export type ActiveCurrencyAndAmount_SimpleType = number
type _ActiveCurrencyAndAmount_SimpleType = Primitive._number

export type ActiveCurrencyCode = string
type _ActiveCurrencyCode = Primitive._string

interface _ActiveOrHistoricCurrencyAnd13DecimalAmount
  extends _ActiveOrHistoricCurrencyAnd13DecimalAmount_SimpleType {
  Ccy: string
}
export interface ActiveOrHistoricCurrencyAnd13DecimalAmount
  extends _ActiveOrHistoricCurrencyAnd13DecimalAmount {
  constructor: {new (): ActiveOrHistoricCurrencyAnd13DecimalAmount}
}
export var ActiveOrHistoricCurrencyAnd13DecimalAmount: {
  new (): ActiveOrHistoricCurrencyAnd13DecimalAmount
}

export type ActiveOrHistoricCurrencyAnd13DecimalAmount_SimpleType = number
type _ActiveOrHistoricCurrencyAnd13DecimalAmount_SimpleType = Primitive._number

interface _ActiveOrHistoricCurrencyAndAmount
  extends _ActiveOrHistoricCurrencyAndAmount_SimpleType {
  Ccy: string
}
export interface ActiveOrHistoricCurrencyAndAmount
  extends _ActiveOrHistoricCurrencyAndAmount {
  constructor: {new (): ActiveOrHistoricCurrencyAndAmount}
}
export var ActiveOrHistoricCurrencyAndAmount: {
  new (): ActiveOrHistoricCurrencyAndAmount
}

export type ActiveOrHistoricCurrencyAndAmount_SimpleType = number
type _ActiveOrHistoricCurrencyAndAmount_SimpleType = Primitive._number

interface _ActiveOrHistoricCurrencyAndAmountRange2 extends BaseType {
  Amt: ImpliedCurrencyAmountRange1Choice
  Ccy: string
  CdtDbtInd?: CreditDebitCode
}
export interface ActiveOrHistoricCurrencyAndAmountRange2
  extends _ActiveOrHistoricCurrencyAndAmountRange2 {
  constructor: {new (): ActiveOrHistoricCurrencyAndAmountRange2}
}
export var ActiveOrHistoricCurrencyAndAmountRange2: {
  new (): ActiveOrHistoricCurrencyAndAmountRange2
}

export type ActiveOrHistoricCurrencyCode = string
type _ActiveOrHistoricCurrencyCode = Primitive._string

export type AddressType2Code = 'ADDR' | 'PBOX' | 'HOME' | 'BIZZ' | 'MLTO' | 'DLVY'
interface _AddressType2Code extends Primitive._string {
  content: AddressType2Code
}

interface _AddressType3Choice extends BaseType {
  Cd: AddressType2Code
  Prtry: GenericIdentification30
}
export interface AddressType3Choice extends _AddressType3Choice {
  constructor: {new (): AddressType3Choice}
}
export var AddressType3Choice: {new (): AddressType3Choice}

interface _AmountAndCurrencyExchange3 extends BaseType {
  AnncdPstngAmt?: AmountAndCurrencyExchangeDetails3
  CntrValAmt?: AmountAndCurrencyExchangeDetails3
  InstdAmt?: AmountAndCurrencyExchangeDetails3
  PrtryAmt?: AmountAndCurrencyExchangeDetails4[]
  TxAmt?: AmountAndCurrencyExchangeDetails3
}
export interface AmountAndCurrencyExchange3 extends _AmountAndCurrencyExchange3 {
  constructor: {new (): AmountAndCurrencyExchange3}
}
export var AmountAndCurrencyExchange3: {new (): AmountAndCurrencyExchange3}

interface _AmountAndCurrencyExchangeDetails3 extends BaseType {
  Amt: ActiveOrHistoricCurrencyAndAmount
  CcyXchg?: CurrencyExchange5
}
export interface AmountAndCurrencyExchangeDetails3
  extends _AmountAndCurrencyExchangeDetails3 {
  constructor: {new (): AmountAndCurrencyExchangeDetails3}
}
export var AmountAndCurrencyExchangeDetails3: {
  new (): AmountAndCurrencyExchangeDetails3
}

interface _AmountAndCurrencyExchangeDetails4 extends BaseType {
  Amt: ActiveOrHistoricCurrencyAndAmount
  CcyXchg?: CurrencyExchange5
  Tp: string
}
export interface AmountAndCurrencyExchangeDetails4
  extends _AmountAndCurrencyExchangeDetails4 {
  constructor: {new (): AmountAndCurrencyExchangeDetails4}
}
export var AmountAndCurrencyExchangeDetails4: {
  new (): AmountAndCurrencyExchangeDetails4
}

interface _AmountAndDirection35 extends BaseType {
  Amt: number
  CdtDbtInd: CreditDebitCode
}
export interface AmountAndDirection35 extends _AmountAndDirection35 {
  constructor: {new (): AmountAndDirection35}
}
export var AmountAndDirection35: {new (): AmountAndDirection35}

interface _AmountRangeBoundary1 extends BaseType {
  BdryAmt: number
  Incl: boolean
}
export interface AmountRangeBoundary1 extends _AmountRangeBoundary1 {
  constructor: {new (): AmountRangeBoundary1}
}
export var AmountRangeBoundary1: {new (): AmountRangeBoundary1}

export type AnyBICDec2014Identifier = string
type _AnyBICDec2014Identifier = Primitive._string

export type AttendanceContext1Code = 'ATTD' | 'SATT' | 'UATT'
interface _AttendanceContext1Code extends Primitive._string {
  content: AttendanceContext1Code
}

export type AuthenticationEntity1Code = 'ICCD' | 'AGNT' | 'MERC'
interface _AuthenticationEntity1Code extends Primitive._string {
  content: AuthenticationEntity1Code
}

export type AuthenticationMethod1Code =
  | 'UKNW'
  | 'BYPS'
  | 'NPIN'
  | 'FPIN'
  | 'CPSG'
  | 'PPSG'
  | 'MANU'
  | 'MERC'
  | 'SCRT'
  | 'SNCT'
  | 'SCNL'
interface _AuthenticationMethod1Code extends Primitive._string {
  content: AuthenticationMethod1Code
}

interface _BalanceSubType1Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface BalanceSubType1Choice extends _BalanceSubType1Choice {
  constructor: {new (): BalanceSubType1Choice}
}
export var BalanceSubType1Choice: {new (): BalanceSubType1Choice}

interface _BalanceType10Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface BalanceType10Choice extends _BalanceType10Choice {
  constructor: {new (): BalanceType10Choice}
}
export var BalanceType10Choice: {new (): BalanceType10Choice}

interface _BalanceType13 extends BaseType {
  CdOrPrtry: BalanceType10Choice
  SubTp?: BalanceSubType1Choice
}
export interface BalanceType13 extends _BalanceType13 {
  constructor: {new (): BalanceType13}
}
export var BalanceType13: {new (): BalanceType13}

interface _BankToCustomerAccountReportV08 extends BaseType {
  GrpHdr: GroupHeader81
  Rpt: AccountReport25[]
  SplmtryData?: SupplementaryData1[]
}
export interface BankToCustomerAccountReportV08
  extends _BankToCustomerAccountReportV08 {
  constructor: {new (): BankToCustomerAccountReportV08}
}
export var BankToCustomerAccountReportV08: {new (): BankToCustomerAccountReportV08}

interface _BankTransactionCodeStructure4 extends BaseType {
  Domn?: BankTransactionCodeStructure5
  Prtry?: ProprietaryBankTransactionCodeStructure1
}
export interface BankTransactionCodeStructure4
  extends _BankTransactionCodeStructure4 {
  constructor: {new (): BankTransactionCodeStructure4}
}
export var BankTransactionCodeStructure4: {new (): BankTransactionCodeStructure4}

interface _BankTransactionCodeStructure5 extends BaseType {
  Cd: string
  Fmly: BankTransactionCodeStructure6
}
export interface BankTransactionCodeStructure5
  extends _BankTransactionCodeStructure5 {
  constructor: {new (): BankTransactionCodeStructure5}
}
export var BankTransactionCodeStructure5: {new (): BankTransactionCodeStructure5}

interface _BankTransactionCodeStructure6 extends BaseType {
  Cd: string
  SubFmlyCd: string
}
export interface BankTransactionCodeStructure6
  extends _BankTransactionCodeStructure6 {
  constructor: {new (): BankTransactionCodeStructure6}
}
export var BankTransactionCodeStructure6: {new (): BankTransactionCodeStructure6}

export type BaseOneRate = number
type _BaseOneRate = Primitive._number

interface _BatchInformation2 extends BaseType {
  CdtDbtInd?: CreditDebitCode
  MsgId?: string
  NbOfTxs?: string
  PmtInfId?: string
  TtlAmt?: ActiveOrHistoricCurrencyAndAmount
}
export interface BatchInformation2 extends _BatchInformation2 {
  constructor: {new (): BatchInformation2}
}
export var BatchInformation2: {new (): BatchInformation2}

export type BICFIDec2014Identifier = string
type _BICFIDec2014Identifier = Primitive._string

interface _BranchAndFinancialInstitutionIdentification6 extends BaseType {
  BrnchId?: BranchData3
  FinInstnId: FinancialInstitutionIdentification18
}
export interface BranchAndFinancialInstitutionIdentification6
  extends _BranchAndFinancialInstitutionIdentification6 {
  constructor: {new (): BranchAndFinancialInstitutionIdentification6}
}
export var BranchAndFinancialInstitutionIdentification6: {
  new (): BranchAndFinancialInstitutionIdentification6
}

interface _BranchData3 extends BaseType {
  Id?: string
  LEI?: string
  Nm?: string
  PstlAdr?: PostalAddress24
}
export interface BranchData3 extends _BranchData3 {
  constructor: {new (): BranchData3}
}
export var BranchData3: {new (): BranchData3}

interface _CardAggregated2 extends BaseType {
  AddtlSvc?: CardPaymentServiceType2Code
  SaleRcncltnId?: string
  SeqNbRg?: CardSequenceNumberRange1
  TxCtgy?: string
  TxDtRg?: DateOrDateTimePeriod1Choice
}
export interface CardAggregated2 extends _CardAggregated2 {
  constructor: {new (): CardAggregated2}
}
export var CardAggregated2: {new (): CardAggregated2}

export type CardDataReading1Code =
  | 'TAGC'
  | 'PHYS'
  | 'BRCD'
  | 'MGST'
  | 'CICC'
  | 'DFLE'
  | 'CTLS'
  | 'ECTL'
interface _CardDataReading1Code extends Primitive._string {
  content: CardDataReading1Code
}

interface _CardEntry4 extends BaseType {
  AggtdNtry?: CardAggregated2
  Card?: PaymentCard4
  POI?: PointOfInteraction1
  PrePdAcct?: CashAccount38
}
export interface CardEntry4 extends _CardEntry4 {
  constructor: {new (): CardEntry4}
}
export var CardEntry4: {new (): CardEntry4}

interface _CardholderAuthentication2 extends BaseType {
  AuthntcnMtd: AuthenticationMethod1Code
  AuthntcnNtty: AuthenticationEntity1Code
}
export interface CardholderAuthentication2 extends _CardholderAuthentication2 {
  constructor: {new (): CardholderAuthentication2}
}
export var CardholderAuthentication2: {new (): CardholderAuthentication2}

export type CardholderVerificationCapability1Code =
  | 'MNSG'
  | 'NPIN'
  | 'FCPN'
  | 'FEPN'
  | 'FDSG'
  | 'FBIO'
  | 'MNVR'
  | 'FBIG'
  | 'APKI'
  | 'PKIS'
  | 'CHDT'
  | 'SCEC'
interface _CardholderVerificationCapability1Code extends Primitive._string {
  content: CardholderVerificationCapability1Code
}

interface _CardIndividualTransaction2 extends BaseType {
  AddtlSvc?: CardPaymentServiceType2Code
  ICCRltdData?: string
  Pdct?: Product2
  PmtCntxt?: PaymentContext3
  RePresntmntRsn?: string
  SaleRcncltnId?: string
  SaleRefNb?: string
  SeqNb?: string
  TxCtgy?: string
  TxId?: TransactionIdentifier1
  VldtnDt?: Date
  VldtnSeqNb?: string
}
export interface CardIndividualTransaction2 extends _CardIndividualTransaction2 {
  constructor: {new (): CardIndividualTransaction2}
}
export var CardIndividualTransaction2: {new (): CardIndividualTransaction2}

export type CardPaymentServiceType2Code =
  | 'AGGR'
  | 'DCCV'
  | 'GRTT'
  | 'INSP'
  | 'LOYT'
  | 'NRES'
  | 'PUCO'
  | 'RECP'
  | 'SOAF'
  | 'UNAF'
  | 'VCAU'
interface _CardPaymentServiceType2Code extends Primitive._string {
  content: CardPaymentServiceType2Code
}

interface _CardSecurityInformation1 extends BaseType {
  CSCMgmt: CSCManagement1Code
  CSCVal?: string
}
export interface CardSecurityInformation1 extends _CardSecurityInformation1 {
  constructor: {new (): CardSecurityInformation1}
}
export var CardSecurityInformation1: {new (): CardSecurityInformation1}

interface _CardSequenceNumberRange1 extends BaseType {
  FrstTx?: string
  LastTx?: string
}
export interface CardSequenceNumberRange1 extends _CardSequenceNumberRange1 {
  constructor: {new (): CardSequenceNumberRange1}
}
export var CardSequenceNumberRange1: {new (): CardSequenceNumberRange1}

interface _CardTransaction17 extends BaseType {
  Card?: PaymentCard4
  POI?: PointOfInteraction1
  PrePdAcct?: CashAccount38
  Tx?: CardTransaction3Choice
}
export interface CardTransaction17 extends _CardTransaction17 {
  constructor: {new (): CardTransaction17}
}
export var CardTransaction17: {new (): CardTransaction17}

interface _CardTransaction3Choice extends BaseType {
  Aggtd: CardAggregated2
  Indv: CardIndividualTransaction2
}
export interface CardTransaction3Choice extends _CardTransaction3Choice {
  constructor: {new (): CardTransaction3Choice}
}
export var CardTransaction3Choice: {new (): CardTransaction3Choice}

interface _CashAccount38 extends BaseType {
  Ccy?: string
  Id: AccountIdentification4Choice
  Nm?: string
  Prxy?: ProxyAccountIdentification1
  Tp?: CashAccountType2Choice
}
export interface CashAccount38 extends _CashAccount38 {
  constructor: {new (): CashAccount38}
}
export var CashAccount38: {new (): CashAccount38}

interface _CashAccount39 extends BaseType {
  Ccy?: string
  Id: AccountIdentification4Choice
  Nm?: string
  Ownr?: PartyIdentification135
  Prxy?: ProxyAccountIdentification1
  Svcr?: BranchAndFinancialInstitutionIdentification6
  Tp?: CashAccountType2Choice
}
export interface CashAccount39 extends _CashAccount39 {
  constructor: {new (): CashAccount39}
}
export var CashAccount39: {new (): CashAccount39}

interface _CashAccountType2Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface CashAccountType2Choice extends _CashAccountType2Choice {
  constructor: {new (): CashAccountType2Choice}
}
export var CashAccountType2Choice: {new (): CashAccountType2Choice}

interface _CashAvailability1 extends BaseType {
  Amt: ActiveOrHistoricCurrencyAndAmount
  CdtDbtInd: CreditDebitCode
  Dt: CashAvailabilityDate1Choice
}
export interface CashAvailability1 extends _CashAvailability1 {
  constructor: {new (): CashAvailability1}
}
export var CashAvailability1: {new (): CashAvailability1}

interface _CashAvailabilityDate1Choice extends BaseType {
  ActlDt: Date
  NbOfDays: string
}
export interface CashAvailabilityDate1Choice extends _CashAvailabilityDate1Choice {
  constructor: {new (): CashAvailabilityDate1Choice}
}
export var CashAvailabilityDate1Choice: {new (): CashAvailabilityDate1Choice}

interface _CashBalance8 extends BaseType {
  Amt: ActiveOrHistoricCurrencyAndAmount
  Avlbty?: CashAvailability1[]
  CdtDbtInd: CreditDebitCode
  CdtLine?: CreditLine3[]
  Dt: DateAndDateTime2Choice
  Tp: BalanceType13
}
export interface CashBalance8 extends _CashBalance8 {
  constructor: {new (): CashBalance8}
}
export var CashBalance8: {new (): CashBalance8}

interface _CashDeposit1 extends BaseType {
  Amt: ActiveCurrencyAndAmount
  NbOfNotes: string
  NoteDnmtn: ActiveCurrencyAndAmount
}
export interface CashDeposit1 extends _CashDeposit1 {
  constructor: {new (): CashDeposit1}
}
export var CashDeposit1: {new (): CashDeposit1}

export type ChargeBearerType1Code = 'DEBT' | 'CRED' | 'SHAR' | 'SLEV'
interface _ChargeBearerType1Code extends Primitive._string {
  content: ChargeBearerType1Code
}

export type ChargeIncludedIndicator = boolean
type _ChargeIncludedIndicator = Primitive._boolean

interface _Charges6 extends BaseType {
  Rcrd?: ChargesRecord3[]
  TtlChrgsAndTaxAmt?: ActiveOrHistoricCurrencyAndAmount
}
export interface Charges6 extends _Charges6 {
  constructor: {new (): Charges6}
}
export var Charges6: {new (): Charges6}

interface _ChargesRecord3 extends BaseType {
  Agt?: BranchAndFinancialInstitutionIdentification6
  Amt: ActiveOrHistoricCurrencyAndAmount
  Br?: ChargeBearerType1Code
  CdtDbtInd?: CreditDebitCode
  ChrgInclInd?: boolean
  Rate?: number
  Tax?: TaxCharges2
  Tp?: ChargeType3Choice
}
export interface ChargesRecord3 extends _ChargesRecord3 {
  constructor: {new (): ChargesRecord3}
}
export var ChargesRecord3: {new (): ChargesRecord3}

interface _ChargeType3Choice extends BaseType {
  Cd: string
  Prtry: GenericIdentification3
}
export interface ChargeType3Choice extends _ChargeType3Choice {
  constructor: {new (): ChargeType3Choice}
}
export var ChargeType3Choice: {new (): ChargeType3Choice}

interface _ClearingSystemIdentification2Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface ClearingSystemIdentification2Choice
  extends _ClearingSystemIdentification2Choice {
  constructor: {new (): ClearingSystemIdentification2Choice}
}
export var ClearingSystemIdentification2Choice: {
  new (): ClearingSystemIdentification2Choice
}

interface _ClearingSystemMemberIdentification2 extends BaseType {
  ClrSysId?: ClearingSystemIdentification2Choice
  MmbId: string
}
export interface ClearingSystemMemberIdentification2
  extends _ClearingSystemMemberIdentification2 {
  constructor: {new (): ClearingSystemMemberIdentification2}
}
export var ClearingSystemMemberIdentification2: {
  new (): ClearingSystemMemberIdentification2
}

interface _Contact4 extends BaseType {
  Dept?: string
  EmailAdr?: string
  EmailPurp?: string
  FaxNb?: string
  JobTitl?: string
  MobNb?: string
  Nm?: string
  NmPrfx?: NamePrefix2Code
  Othr?: OtherContact1[]
  PhneNb?: string
  PrefrdMtd?: PreferredContactMethod1Code
  Rspnsblty?: string
}
export interface Contact4 extends _Contact4 {
  constructor: {new (): Contact4}
}
export var Contact4: {new (): Contact4}

export type CopyDuplicate1Code = 'CODU' | 'COPY' | 'DUPL'
interface _CopyDuplicate1Code extends Primitive._string {
  content: CopyDuplicate1Code
}

interface _CorporateAction9 extends BaseType {
  EvtId: string
  EvtTp: string
}
export interface CorporateAction9 extends _CorporateAction9 {
  constructor: {new (): CorporateAction9}
}
export var CorporateAction9: {new (): CorporateAction9}

export type CountryCode = string
type _CountryCode = Primitive._string

export type CreditDebitCode = 'CRDT' | 'DBIT'
interface _CreditDebitCode extends Primitive._string {
  content: CreditDebitCode
}

interface _CreditLine3 extends BaseType {
  Amt?: ActiveOrHistoricCurrencyAndAmount
  Dt?: DateAndDateTime2Choice
  Incl: boolean
  Tp?: CreditLineType1Choice
}
export interface CreditLine3 extends _CreditLine3 {
  constructor: {new (): CreditLine3}
}
export var CreditLine3: {new (): CreditLine3}

interface _CreditLineType1Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface CreditLineType1Choice extends _CreditLineType1Choice {
  constructor: {new (): CreditLineType1Choice}
}
export var CreditLineType1Choice: {new (): CreditLineType1Choice}

interface _CreditorReferenceInformation2 extends BaseType {
  Ref?: string
  Tp?: CreditorReferenceType2
}
export interface CreditorReferenceInformation2
  extends _CreditorReferenceInformation2 {
  constructor: {new (): CreditorReferenceInformation2}
}
export var CreditorReferenceInformation2: {new (): CreditorReferenceInformation2}

interface _CreditorReferenceType1Choice extends BaseType {
  Cd: DocumentType3Code
  Prtry: string
}
export interface CreditorReferenceType1Choice extends _CreditorReferenceType1Choice {
  constructor: {new (): CreditorReferenceType1Choice}
}
export var CreditorReferenceType1Choice: {new (): CreditorReferenceType1Choice}

interface _CreditorReferenceType2 extends BaseType {
  CdOrPrtry: CreditorReferenceType1Choice
  Issr?: string
}
export interface CreditorReferenceType2 extends _CreditorReferenceType2 {
  constructor: {new (): CreditorReferenceType2}
}
export var CreditorReferenceType2: {new (): CreditorReferenceType2}

export type CSCManagement1Code = 'PRST' | 'BYPS' | 'UNRD' | 'NCSC'
interface _CSCManagement1Code extends Primitive._string {
  content: CSCManagement1Code
}

interface _CurrencyExchange5 extends BaseType {
  CtrctId?: string
  QtnDt?: Date
  SrcCcy: string
  TrgtCcy?: string
  UnitCcy?: string
  XchgRate: number
}
export interface CurrencyExchange5 extends _CurrencyExchange5 {
  constructor: {new (): CurrencyExchange5}
}
export var CurrencyExchange5: {new (): CurrencyExchange5}

interface _DateAndDateTime2Choice extends BaseType {
  Dt: Date
  DtTm: Date
}
export interface DateAndDateTime2Choice extends _DateAndDateTime2Choice {
  constructor: {new (): DateAndDateTime2Choice}
}
export var DateAndDateTime2Choice: {new (): DateAndDateTime2Choice}

interface _DateAndPlaceOfBirth1 extends BaseType {
  BirthDt: Date
  CityOfBirth: string
  CtryOfBirth: string
  PrvcOfBirth?: string
}
export interface DateAndPlaceOfBirth1 extends _DateAndPlaceOfBirth1 {
  constructor: {new (): DateAndPlaceOfBirth1}
}
export var DateAndPlaceOfBirth1: {new (): DateAndPlaceOfBirth1}

interface _DateOrDateTimePeriod1Choice extends BaseType {
  Dt: DatePeriod2
  DtTm: DateTimePeriod1
}
export interface DateOrDateTimePeriod1Choice extends _DateOrDateTimePeriod1Choice {
  constructor: {new (): DateOrDateTimePeriod1Choice}
}
export var DateOrDateTimePeriod1Choice: {new (): DateOrDateTimePeriod1Choice}

interface _DatePeriod2 extends BaseType {
  FrDt: Date
  ToDt: Date
}
export interface DatePeriod2 extends _DatePeriod2 {
  constructor: {new (): DatePeriod2}
}
export var DatePeriod2: {new (): DatePeriod2}

interface _DateTimePeriod1 extends BaseType {
  FrDtTm: Date
  ToDtTm: Date
}
export interface DateTimePeriod1 extends _DateTimePeriod1 {
  constructor: {new (): DateTimePeriod1}
}
export var DateTimePeriod1: {new (): DateTimePeriod1}

export type DecimalNumber = number
type _DecimalNumber = Primitive._number

interface _DiscountAmountAndType1 extends BaseType {
  Amt: ActiveOrHistoricCurrencyAndAmount
  Tp?: DiscountAmountType1Choice
}
export interface DiscountAmountAndType1 extends _DiscountAmountAndType1 {
  constructor: {new (): DiscountAmountAndType1}
}
export var DiscountAmountAndType1: {new (): DiscountAmountAndType1}

interface _DiscountAmountType1Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface DiscountAmountType1Choice extends _DiscountAmountType1Choice {
  constructor: {new (): DiscountAmountType1Choice}
}
export var DiscountAmountType1Choice: {new (): DiscountAmountType1Choice}

interface _DisplayCapabilities1 extends BaseType {
  DispTp: UserInterface2Code
  LineWidth: string
  NbOfLines: string
}
export interface DisplayCapabilities1 extends _DisplayCapabilities1 {
  constructor: {new (): DisplayCapabilities1}
}
export var DisplayCapabilities1: {new (): DisplayCapabilities1}

interface _Document extends BaseType {
  BkToCstmrAcctRpt: BankToCustomerAccountReportV08
}
export interface Document extends _Document {
  constructor: {new (): Document}
}
export var Document: {new (): Document}

interface _DocumentAdjustment1 extends BaseType {
  AddtlInf?: string
  Amt: ActiveOrHistoricCurrencyAndAmount
  CdtDbtInd?: CreditDebitCode
  Rsn?: string
}
export interface DocumentAdjustment1 extends _DocumentAdjustment1 {
  constructor: {new (): DocumentAdjustment1}
}
export var DocumentAdjustment1: {new (): DocumentAdjustment1}

interface _DocumentLineIdentification1 extends BaseType {
  Nb?: string
  RltdDt?: Date
  Tp?: DocumentLineType1
}
export interface DocumentLineIdentification1 extends _DocumentLineIdentification1 {
  constructor: {new (): DocumentLineIdentification1}
}
export var DocumentLineIdentification1: {new (): DocumentLineIdentification1}

interface _DocumentLineInformation1 extends BaseType {
  Amt?: RemittanceAmount3
  Desc?: string
  Id: DocumentLineIdentification1[]
}
export interface DocumentLineInformation1 extends _DocumentLineInformation1 {
  constructor: {new (): DocumentLineInformation1}
}
export var DocumentLineInformation1: {new (): DocumentLineInformation1}

interface _DocumentLineType1 extends BaseType {
  CdOrPrtry: DocumentLineType1Choice
  Issr?: string
}
export interface DocumentLineType1 extends _DocumentLineType1 {
  constructor: {new (): DocumentLineType1}
}
export var DocumentLineType1: {new (): DocumentLineType1}

interface _DocumentLineType1Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface DocumentLineType1Choice extends _DocumentLineType1Choice {
  constructor: {new (): DocumentLineType1Choice}
}
export var DocumentLineType1Choice: {new (): DocumentLineType1Choice}

export type DocumentType3Code = 'RADM' | 'RPIN' | 'FXDR' | 'DISP' | 'PUOR' | 'SCOR'
interface _DocumentType3Code extends Primitive._string {
  content: DocumentType3Code
}

export type DocumentType6Code =
  | 'MSIN'
  | 'CNFA'
  | 'DNFA'
  | 'CINV'
  | 'CREN'
  | 'DEBN'
  | 'HIRI'
  | 'SBIN'
  | 'CMCN'
  | 'SOAC'
  | 'DISP'
  | 'BOLD'
  | 'VCHR'
  | 'AROI'
  | 'TSUT'
  | 'PUOR'
interface _DocumentType6Code extends Primitive._string {
  content: DocumentType6Code
}

interface _EntryDetails9 extends BaseType {
  Btch?: BatchInformation2
  TxDtls?: EntryTransaction10[]
}
export interface EntryDetails9 extends _EntryDetails9 {
  constructor: {new (): EntryDetails9}
}
export var EntryDetails9: {new (): EntryDetails9}

interface _EntryStatus1Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface EntryStatus1Choice extends _EntryStatus1Choice {
  constructor: {new (): EntryStatus1Choice}
}
export var EntryStatus1Choice: {new (): EntryStatus1Choice}

interface _EntryTransaction10 extends BaseType {
  AddtlTxInf?: string
  Amt?: ActiveOrHistoricCurrencyAndAmount
  AmtDtls?: AmountAndCurrencyExchange3
  Avlbty?: CashAvailability1[]
  BkTxCd?: BankTransactionCodeStructure4
  CardTx?: CardTransaction17
  CdtDbtInd?: CreditDebitCode
  Chrgs?: Charges6
  CorpActn?: CorporateAction9
  CshDpst?: CashDeposit1[]
  FinInstrmId?: SecurityIdentification19
  Intrst?: TransactionInterest4
  LclInstrm?: LocalInstrument2Choice
  Purp?: Purpose2Choice
  Refs?: TransactionReferences6
  RltdAgts?: TransactionAgents5
  RltdDts?: TransactionDates3
  RltdPric?: TransactionPrice4Choice
  RltdPties?: TransactionParties6
  RltdQties?: TransactionQuantities3Choice[]
  RltdRmtInf?: RemittanceLocation7[]
  RmtInf?: RemittanceInformation16
  RtrInf?: PaymentReturnReason5
  SfkpgAcct?: SecuritiesAccount19
  SplmtryData?: SupplementaryData1[]
  Tax?: TaxInformation8
}
export interface EntryTransaction10 extends _EntryTransaction10 {
  constructor: {new (): EntryTransaction10}
}
export var EntryTransaction10: {new (): EntryTransaction10}

export type Exact1NumericText = string
type _Exact1NumericText = Primitive._string

export type Exact3NumericText = string
type _Exact3NumericText = Primitive._string

export type Exact4AlphaNumericText = string
type _Exact4AlphaNumericText = Primitive._string

export type ExternalAccountIdentification1Code = string
type _ExternalAccountIdentification1Code = Primitive._string

export type ExternalBalanceSubType1Code = string
type _ExternalBalanceSubType1Code = Primitive._string

export type ExternalBalanceType1Code = string
type _ExternalBalanceType1Code = Primitive._string

export type ExternalBankTransactionDomain1Code = string
type _ExternalBankTransactionDomain1Code = Primitive._string

export type ExternalBankTransactionFamily1Code = string
type _ExternalBankTransactionFamily1Code = Primitive._string

export type ExternalBankTransactionSubFamily1Code = string
type _ExternalBankTransactionSubFamily1Code = Primitive._string

export type ExternalCardTransactionCategory1Code = string
type _ExternalCardTransactionCategory1Code = Primitive._string

export type ExternalCashAccountType1Code = string
type _ExternalCashAccountType1Code = Primitive._string

export type ExternalChargeType1Code = string
type _ExternalChargeType1Code = Primitive._string

export type ExternalClearingSystemIdentification1Code = string
type _ExternalClearingSystemIdentification1Code = Primitive._string

export type ExternalCreditLineType1Code = string
type _ExternalCreditLineType1Code = Primitive._string

export type ExternalDiscountAmountType1Code = string
type _ExternalDiscountAmountType1Code = Primitive._string

export type ExternalDocumentLineType1Code = string
type _ExternalDocumentLineType1Code = Primitive._string

export type ExternalEntryStatus1Code = string
type _ExternalEntryStatus1Code = Primitive._string

export type ExternalFinancialInstitutionIdentification1Code = string
type _ExternalFinancialInstitutionIdentification1Code = Primitive._string

export type ExternalFinancialInstrumentIdentificationType1Code = string
type _ExternalFinancialInstrumentIdentificationType1Code = Primitive._string

export type ExternalGarnishmentType1Code = string
type _ExternalGarnishmentType1Code = Primitive._string

export type ExternalLocalInstrument1Code = string
type _ExternalLocalInstrument1Code = Primitive._string

export type ExternalOrganisationIdentification1Code = string
type _ExternalOrganisationIdentification1Code = Primitive._string

export type ExternalPersonIdentification1Code = string
type _ExternalPersonIdentification1Code = Primitive._string

export type ExternalProxyAccountType1Code = string
type _ExternalProxyAccountType1Code = Primitive._string

export type ExternalPurpose1Code = string
type _ExternalPurpose1Code = Primitive._string

export type ExternalReportingSource1Code = string
type _ExternalReportingSource1Code = Primitive._string

export type ExternalRePresentmentReason1Code = string
type _ExternalRePresentmentReason1Code = Primitive._string

export type ExternalReturnReason1Code = string
type _ExternalReturnReason1Code = Primitive._string

export type ExternalTaxAmountType1Code = string
type _ExternalTaxAmountType1Code = Primitive._string

export type ExternalTechnicalInputChannel1Code = string
type _ExternalTechnicalInputChannel1Code = Primitive._string

interface _FinancialIdentificationSchemeName1Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface FinancialIdentificationSchemeName1Choice
  extends _FinancialIdentificationSchemeName1Choice {
  constructor: {new (): FinancialIdentificationSchemeName1Choice}
}
export var FinancialIdentificationSchemeName1Choice: {
  new (): FinancialIdentificationSchemeName1Choice
}

interface _FinancialInstitutionIdentification18 extends BaseType {
  BICFI?: string
  ClrSysMmbId?: ClearingSystemMemberIdentification2
  LEI?: string
  Nm?: string
  Othr?: GenericFinancialIdentification1
  PstlAdr?: PostalAddress24
}
export interface FinancialInstitutionIdentification18
  extends _FinancialInstitutionIdentification18 {
  constructor: {new (): FinancialInstitutionIdentification18}
}
export var FinancialInstitutionIdentification18: {
  new (): FinancialInstitutionIdentification18
}

interface _FinancialInstrumentQuantity1Choice extends BaseType {
  AmtsdVal: number
  FaceAmt: number
  Unit: number
}
export interface FinancialInstrumentQuantity1Choice
  extends _FinancialInstrumentQuantity1Choice {
  constructor: {new (): FinancialInstrumentQuantity1Choice}
}
export var FinancialInstrumentQuantity1Choice: {
  new (): FinancialInstrumentQuantity1Choice
}

interface _FromToAmountRange1 extends BaseType {
  FrAmt: AmountRangeBoundary1
  ToAmt: AmountRangeBoundary1
}
export interface FromToAmountRange1 extends _FromToAmountRange1 {
  constructor: {new (): FromToAmountRange1}
}
export var FromToAmountRange1: {new (): FromToAmountRange1}

interface _Garnishment3 extends BaseType {
  Dt?: Date
  FmlyMdclInsrncInd?: boolean
  Grnshee?: PartyIdentification135
  GrnshmtAdmstr?: PartyIdentification135
  MplyeeTermntnInd?: boolean
  RefNb?: string
  RmtdAmt?: ActiveOrHistoricCurrencyAndAmount
  Tp: GarnishmentType1
}
export interface Garnishment3 extends _Garnishment3 {
  constructor: {new (): Garnishment3}
}
export var Garnishment3: {new (): Garnishment3}

interface _GarnishmentType1 extends BaseType {
  CdOrPrtry: GarnishmentType1Choice
  Issr?: string
}
export interface GarnishmentType1 extends _GarnishmentType1 {
  constructor: {new (): GarnishmentType1}
}
export var GarnishmentType1: {new (): GarnishmentType1}

interface _GarnishmentType1Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface GarnishmentType1Choice extends _GarnishmentType1Choice {
  constructor: {new (): GarnishmentType1Choice}
}
export var GarnishmentType1Choice: {new (): GarnishmentType1Choice}

interface _GenericAccountIdentification1 extends BaseType {
  Id: string
  Issr?: string
  SchmeNm?: AccountSchemeName1Choice
}
export interface GenericAccountIdentification1
  extends _GenericAccountIdentification1 {
  constructor: {new (): GenericAccountIdentification1}
}
export var GenericAccountIdentification1: {new (): GenericAccountIdentification1}

interface _GenericFinancialIdentification1 extends BaseType {
  Id: string
  Issr?: string
  SchmeNm?: FinancialIdentificationSchemeName1Choice
}
export interface GenericFinancialIdentification1
  extends _GenericFinancialIdentification1 {
  constructor: {new (): GenericFinancialIdentification1}
}
export var GenericFinancialIdentification1: {new (): GenericFinancialIdentification1}

interface _GenericIdentification1 extends BaseType {
  Id: string
  Issr?: string
  SchmeNm?: string
}
export interface GenericIdentification1 extends _GenericIdentification1 {
  constructor: {new (): GenericIdentification1}
}
export var GenericIdentification1: {new (): GenericIdentification1}

interface _GenericIdentification3 extends BaseType {
  Id: string
  Issr?: string
}
export interface GenericIdentification3 extends _GenericIdentification3 {
  constructor: {new (): GenericIdentification3}
}
export var GenericIdentification3: {new (): GenericIdentification3}

interface _GenericIdentification30 extends BaseType {
  Id: string
  Issr: string
  SchmeNm?: string
}
export interface GenericIdentification30 extends _GenericIdentification30 {
  constructor: {new (): GenericIdentification30}
}
export var GenericIdentification30: {new (): GenericIdentification30}

interface _GenericIdentification32 extends BaseType {
  Id: string
  Issr?: PartyType4Code
  ShrtNm?: string
  Tp?: PartyType3Code
}
export interface GenericIdentification32 extends _GenericIdentification32 {
  constructor: {new (): GenericIdentification32}
}
export var GenericIdentification32: {new (): GenericIdentification32}

interface _GenericOrganisationIdentification1 extends BaseType {
  Id: string
  Issr?: string
  SchmeNm?: OrganisationIdentificationSchemeName1Choice
}
export interface GenericOrganisationIdentification1
  extends _GenericOrganisationIdentification1 {
  constructor: {new (): GenericOrganisationIdentification1}
}
export var GenericOrganisationIdentification1: {
  new (): GenericOrganisationIdentification1
}

interface _GenericPersonIdentification1 extends BaseType {
  Id: string
  Issr?: string
  SchmeNm?: PersonIdentificationSchemeName1Choice
}
export interface GenericPersonIdentification1 extends _GenericPersonIdentification1 {
  constructor: {new (): GenericPersonIdentification1}
}
export var GenericPersonIdentification1: {new (): GenericPersonIdentification1}

interface _GroupHeader81 extends BaseType {
  AddtlInf?: string
  CreDtTm: Date
  MsgId: string
  MsgPgntn?: Pagination1
  MsgRcpt?: PartyIdentification135
  OrgnlBizQry?: OriginalBusinessQuery1
}
export interface GroupHeader81 extends _GroupHeader81 {
  constructor: {new (): GroupHeader81}
}
export var GroupHeader81: {new (): GroupHeader81}

export type IBAN2007Identifier = string
type _IBAN2007Identifier = Primitive._string

interface _IdentificationSource3Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface IdentificationSource3Choice extends _IdentificationSource3Choice {
  constructor: {new (): IdentificationSource3Choice}
}
export var IdentificationSource3Choice: {new (): IdentificationSource3Choice}

interface _ImpliedCurrencyAmountRange1Choice extends BaseType {
  EQAmt: number
  FrAmt: AmountRangeBoundary1
  FrToAmt: FromToAmountRange1
  NEQAmt: number
  ToAmt: AmountRangeBoundary1
}
export interface ImpliedCurrencyAmountRange1Choice
  extends _ImpliedCurrencyAmountRange1Choice {
  constructor: {new (): ImpliedCurrencyAmountRange1Choice}
}
export var ImpliedCurrencyAmountRange1Choice: {
  new (): ImpliedCurrencyAmountRange1Choice
}

export type ImpliedCurrencyAndAmount = number
type _ImpliedCurrencyAndAmount = Primitive._number

interface _InterestRecord2 extends BaseType {
  Amt: ActiveOrHistoricCurrencyAndAmount
  CdtDbtInd: CreditDebitCode
  FrToDt?: DateTimePeriod1
  Rate?: Rate4
  Rsn?: string
  Tax?: TaxCharges2
  Tp?: InterestType1Choice
}
export interface InterestRecord2 extends _InterestRecord2 {
  constructor: {new (): InterestRecord2}
}
export var InterestRecord2: {new (): InterestRecord2}

interface _InterestType1Choice extends BaseType {
  Cd: InterestType1Code
  Prtry: string
}
export interface InterestType1Choice extends _InterestType1Choice {
  constructor: {new (): InterestType1Choice}
}
export var InterestType1Choice: {new (): InterestType1Choice}

export type InterestType1Code = 'INDY' | 'OVRN'
interface _InterestType1Code extends Primitive._string {
  content: InterestType1Code
}

export type ISINOct2015Identifier = string
type _ISINOct2015Identifier = Primitive._string

export type ISO2ALanguageCode = string
type _ISO2ALanguageCode = Primitive._string

export type ISODate = Date
type _ISODate = Primitive._Date

export type ISODateTime = Date
type _ISODateTime = Primitive._Date

export type ISOYearMonth = string
type _ISOYearMonth = Primitive._string

export type LEIIdentifier = string
type _LEIIdentifier = Primitive._string

interface _LocalInstrument2Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface LocalInstrument2Choice extends _LocalInstrument2Choice {
  constructor: {new (): LocalInstrument2Choice}
}
export var LocalInstrument2Choice: {new (): LocalInstrument2Choice}

export type Max1025Text = string
type _Max1025Text = Primitive._string

export type Max105Text = string
type _Max105Text = Primitive._string

export type Max128Text = string
type _Max128Text = Primitive._string

export type Max140Text = string
type _Max140Text = Primitive._string

export type Max15NumericText = string
type _Max15NumericText = Primitive._string

export type Max15PlusSignedNumericText = string
type _Max15PlusSignedNumericText = Primitive._string

export type Max16Text = string
type _Max16Text = Primitive._string

export type Max2048Text = string
type _Max2048Text = Primitive._string

export type Max34Text = string
type _Max34Text = Primitive._string

export type Max350Text = string
type _Max350Text = Primitive._string

export type Max35Text = string
type _Max35Text = Primitive._string

export type Max3NumericText = string
type _Max3NumericText = Primitive._string

export type Max4Text = string
type _Max4Text = Primitive._string

export type Max500Text = string
type _Max500Text = Primitive._string

export type Max5NumericText = string
type _Max5NumericText = Primitive._string

export type Max70Text = string
type _Max70Text = Primitive._string

interface _MessageIdentification2 extends BaseType {
  MsgId?: string
  MsgNmId?: string
}
export interface MessageIdentification2 extends _MessageIdentification2 {
  constructor: {new (): MessageIdentification2}
}
export var MessageIdentification2: {new (): MessageIdentification2}

export type Min2Max3NumericText = string
type _Min2Max3NumericText = Primitive._string

export type Min3Max4NumericText = string
type _Min3Max4NumericText = Primitive._string

export type Min8Max28NumericText = string
type _Min8Max28NumericText = Primitive._string

interface _NameAndAddress16 extends BaseType {
  Adr: PostalAddress24
  Nm: string
}
export interface NameAndAddress16 extends _NameAndAddress16 {
  constructor: {new (): NameAndAddress16}
}
export var NameAndAddress16: {new (): NameAndAddress16}

export type NamePrefix2Code = 'DOCT' | 'MADM' | 'MISS' | 'MIST' | 'MIKS'
interface _NamePrefix2Code extends Primitive._string {
  content: NamePrefix2Code
}

export type NonNegativeDecimalNumber = number
type _NonNegativeDecimalNumber = Primitive._number

export type Number = number
type _Number = Primitive._number

interface _NumberAndSumOfTransactions1 extends BaseType {
  NbOfNtries?: string
  Sum?: number
}
export interface NumberAndSumOfTransactions1 extends _NumberAndSumOfTransactions1 {
  constructor: {new (): NumberAndSumOfTransactions1}
}
export var NumberAndSumOfTransactions1: {new (): NumberAndSumOfTransactions1}

interface _NumberAndSumOfTransactions4 extends BaseType {
  NbOfNtries?: string
  Sum?: number
  TtlNetNtry?: AmountAndDirection35
}
export interface NumberAndSumOfTransactions4 extends _NumberAndSumOfTransactions4 {
  constructor: {new (): NumberAndSumOfTransactions4}
}
export var NumberAndSumOfTransactions4: {new (): NumberAndSumOfTransactions4}

export type OnLineCapability1Code = 'OFLN' | 'ONLN' | 'SMON'
interface _OnLineCapability1Code extends Primitive._string {
  content: OnLineCapability1Code
}

interface _OrganisationIdentification29 extends BaseType {
  AnyBIC?: string
  LEI?: string
  Othr?: GenericOrganisationIdentification1[]
}
export interface OrganisationIdentification29 extends _OrganisationIdentification29 {
  constructor: {new (): OrganisationIdentification29}
}
export var OrganisationIdentification29: {new (): OrganisationIdentification29}

interface _OrganisationIdentificationSchemeName1Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface OrganisationIdentificationSchemeName1Choice
  extends _OrganisationIdentificationSchemeName1Choice {
  constructor: {new (): OrganisationIdentificationSchemeName1Choice}
}
export var OrganisationIdentificationSchemeName1Choice: {
  new (): OrganisationIdentificationSchemeName1Choice
}

interface _OriginalAndCurrentQuantities1 extends BaseType {
  AmtsdVal: number
  FaceAmt: number
}
export interface OriginalAndCurrentQuantities1
  extends _OriginalAndCurrentQuantities1 {
  constructor: {new (): OriginalAndCurrentQuantities1}
}
export var OriginalAndCurrentQuantities1: {new (): OriginalAndCurrentQuantities1}

interface _OriginalBusinessQuery1 extends BaseType {
  CreDtTm?: Date
  MsgId: string
  MsgNmId?: string
}
export interface OriginalBusinessQuery1 extends _OriginalBusinessQuery1 {
  constructor: {new (): OriginalBusinessQuery1}
}
export var OriginalBusinessQuery1: {new (): OriginalBusinessQuery1}

interface _OtherContact1 extends BaseType {
  ChanlTp: string
  Id?: string
}
export interface OtherContact1 extends _OtherContact1 {
  constructor: {new (): OtherContact1}
}
export var OtherContact1: {new (): OtherContact1}

interface _OtherIdentification1 extends BaseType {
  Id: string
  Sfx?: string
  Tp: IdentificationSource3Choice
}
export interface OtherIdentification1 extends _OtherIdentification1 {
  constructor: {new (): OtherIdentification1}
}
export var OtherIdentification1: {new (): OtherIdentification1}

interface _Pagination1 extends BaseType {
  LastPgInd: boolean
  PgNb: string
}
export interface Pagination1 extends _Pagination1 {
  constructor: {new (): Pagination1}
}
export var Pagination1: {new (): Pagination1}

interface _Party38Choice extends BaseType {
  OrgId: OrganisationIdentification29
  PrvtId: PersonIdentification13
}
export interface Party38Choice extends _Party38Choice {
  constructor: {new (): Party38Choice}
}
export var Party38Choice: {new (): Party38Choice}

interface _Party40Choice extends BaseType {
  Agt: BranchAndFinancialInstitutionIdentification6
  Pty: PartyIdentification135
}
export interface Party40Choice extends _Party40Choice {
  constructor: {new (): Party40Choice}
}
export var Party40Choice: {new (): Party40Choice}

interface _PartyIdentification135 extends BaseType {
  CtctDtls?: Contact4
  CtryOfRes?: string
  Id?: Party38Choice
  Nm?: string
  PstlAdr?: PostalAddress24
}
export interface PartyIdentification135 extends _PartyIdentification135 {
  constructor: {new (): PartyIdentification135}
}
export var PartyIdentification135: {new (): PartyIdentification135}

export type PartyType3Code =
  | 'OPOI'
  | 'MERC'
  | 'ACCP'
  | 'ITAG'
  | 'ACQR'
  | 'CISS'
  | 'DLIS'
interface _PartyType3Code extends Primitive._string {
  content: PartyType3Code
}

export type PartyType4Code = 'MERC' | 'ACCP' | 'ITAG' | 'ACQR' | 'CISS' | 'TAXH'
interface _PartyType4Code extends Primitive._string {
  content: PartyType4Code
}

interface _PaymentCard4 extends BaseType {
  AddtlCardData?: string
  CardBrnd?: GenericIdentification1
  CardCtryCd?: string
  PlainCardData?: PlainCardData1
}
export interface PaymentCard4 extends _PaymentCard4 {
  constructor: {new (): PaymentCard4}
}
export var PaymentCard4: {new (): PaymentCard4}

interface _PaymentContext3 extends BaseType {
  AttndncCntxt?: AttendanceContext1Code
  AttndntLang?: string
  AttndntMsgCpbl?: boolean
  AuthntcnMtd?: CardholderAuthentication2
  CardDataNtryMd: CardDataReading1Code
  CardPres?: boolean
  CrdhldrPres?: boolean
  FllbckInd?: boolean
  OnLineCntxt?: boolean
  TxChanl?: TransactionChannel1Code
  TxEnvt?: TransactionEnvironment1Code
}
export interface PaymentContext3 extends _PaymentContext3 {
  constructor: {new (): PaymentContext3}
}
export var PaymentContext3: {new (): PaymentContext3}

interface _PaymentReturnReason5 extends BaseType {
  AddtlInf?: string[]
  OrgnlBkTxCd?: BankTransactionCodeStructure4
  Orgtr?: PartyIdentification135
  Rsn?: ReturnReason5Choice
}
export interface PaymentReturnReason5 extends _PaymentReturnReason5 {
  constructor: {new (): PaymentReturnReason5}
}
export var PaymentReturnReason5: {new (): PaymentReturnReason5}

export type PercentageRate = number
type _PercentageRate = Primitive._number

interface _PersonIdentification13 extends BaseType {
  DtAndPlcOfBirth?: DateAndPlaceOfBirth1
  Othr?: GenericPersonIdentification1[]
}
export interface PersonIdentification13 extends _PersonIdentification13 {
  constructor: {new (): PersonIdentification13}
}
export var PersonIdentification13: {new (): PersonIdentification13}

interface _PersonIdentificationSchemeName1Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface PersonIdentificationSchemeName1Choice
  extends _PersonIdentificationSchemeName1Choice {
  constructor: {new (): PersonIdentificationSchemeName1Choice}
}
export var PersonIdentificationSchemeName1Choice: {
  new (): PersonIdentificationSchemeName1Choice
}

export type PhoneNumber = string
type _PhoneNumber = Primitive._string

interface _PlainCardData1 extends BaseType {
  CardSctyCd?: CardSecurityInformation1
  CardSeqNb?: string
  FctvDt?: string
  PAN: string
  SvcCd?: string
  TrckData?: TrackData1[]
  XpryDt: string
}
export interface PlainCardData1 extends _PlainCardData1 {
  constructor: {new (): PlainCardData1}
}
export var PlainCardData1: {new (): PlainCardData1}

export type POIComponentType1Code =
  | 'SOFT'
  | 'EMVK'
  | 'EMVO'
  | 'MRIT'
  | 'CHIT'
  | 'SECM'
  | 'PEDV'
interface _POIComponentType1Code extends Primitive._string {
  content: POIComponentType1Code
}

interface _PointOfInteraction1 extends BaseType {
  Cmpnt?: PointOfInteractionComponent1[]
  Cpblties?: PointOfInteractionCapabilities1
  GrpId?: string
  Id: GenericIdentification32
  SysNm?: string
}
export interface PointOfInteraction1 extends _PointOfInteraction1 {
  constructor: {new (): PointOfInteraction1}
}
export var PointOfInteraction1: {new (): PointOfInteraction1}

interface _PointOfInteractionCapabilities1 extends BaseType {
  CardRdngCpblties?: CardDataReading1Code[]
  CrdhldrVrfctnCpblties?: CardholderVerificationCapability1Code[]
  DispCpblties?: DisplayCapabilities1[]
  OnLineCpblties?: OnLineCapability1Code
  PrtLineWidth?: string
}
export interface PointOfInteractionCapabilities1
  extends _PointOfInteractionCapabilities1 {
  constructor: {new (): PointOfInteractionCapabilities1}
}
export var PointOfInteractionCapabilities1: {new (): PointOfInteractionCapabilities1}

interface _PointOfInteractionComponent1 extends BaseType {
  ApprvlNb?: string[]
  ManfctrId?: string
  Mdl?: string
  POICmpntTp: POIComponentType1Code
  SrlNb?: string
  VrsnNb?: string
}
export interface PointOfInteractionComponent1 extends _PointOfInteractionComponent1 {
  constructor: {new (): PointOfInteractionComponent1}
}
export var PointOfInteractionComponent1: {new (): PointOfInteractionComponent1}

interface _PostalAddress24 extends BaseType {
  AdrLine?: string[]
  AdrTp?: AddressType3Choice
  BldgNb?: string
  BldgNm?: string
  Ctry?: string
  CtrySubDvsn?: string
  Dept?: string
  DstrctNm?: string
  Flr?: string
  PstBx?: string
  PstCd?: string
  Room?: string
  StrtNm?: string
  SubDept?: string
  TwnLctnNm?: string
  TwnNm?: string
}
export interface PostalAddress24 extends _PostalAddress24 {
  constructor: {new (): PostalAddress24}
}
export var PostalAddress24: {new (): PostalAddress24}

export type PreferredContactMethod1Code = 'LETT' | 'MAIL' | 'PHON' | 'FAXX' | 'CELL'
interface _PreferredContactMethod1Code extends Primitive._string {
  content: PreferredContactMethod1Code
}

interface _Price7 extends BaseType {
  Tp: YieldedOrValueType1Choice
  Val: PriceRateOrAmount3Choice
}
export interface Price7 extends _Price7 {
  constructor: {new (): Price7}
}
export var Price7: {new (): Price7}

interface _PriceRateOrAmount3Choice extends BaseType {
  Amt: ActiveOrHistoricCurrencyAnd13DecimalAmount
  Rate: number
}
export interface PriceRateOrAmount3Choice extends _PriceRateOrAmount3Choice {
  constructor: {new (): PriceRateOrAmount3Choice}
}
export var PriceRateOrAmount3Choice: {new (): PriceRateOrAmount3Choice}

export type PriceValueType1Code = 'DISC' | 'PREM' | 'PARV'
interface _PriceValueType1Code extends Primitive._string {
  content: PriceValueType1Code
}

interface _Product2 extends BaseType {
  AddtlPdctInf?: string
  PdctAmt?: number
  PdctCd: string
  PdctQty?: number
  TaxTp?: string
  UnitOfMeasr?: UnitOfMeasure1Code
  UnitPric?: number
}
export interface Product2 extends _Product2 {
  constructor: {new (): Product2}
}
export var Product2: {new (): Product2}

interface _ProprietaryAgent4 extends BaseType {
  Agt: BranchAndFinancialInstitutionIdentification6
  Tp: string
}
export interface ProprietaryAgent4 extends _ProprietaryAgent4 {
  constructor: {new (): ProprietaryAgent4}
}
export var ProprietaryAgent4: {new (): ProprietaryAgent4}

interface _ProprietaryBankTransactionCodeStructure1 extends BaseType {
  Cd: string
  Issr?: string
}
export interface ProprietaryBankTransactionCodeStructure1
  extends _ProprietaryBankTransactionCodeStructure1 {
  constructor: {new (): ProprietaryBankTransactionCodeStructure1}
}
export var ProprietaryBankTransactionCodeStructure1: {
  new (): ProprietaryBankTransactionCodeStructure1
}

interface _ProprietaryDate3 extends BaseType {
  Dt: DateAndDateTime2Choice
  Tp: string
}
export interface ProprietaryDate3 extends _ProprietaryDate3 {
  constructor: {new (): ProprietaryDate3}
}
export var ProprietaryDate3: {new (): ProprietaryDate3}

interface _ProprietaryParty5 extends BaseType {
  Pty: Party40Choice
  Tp: string
}
export interface ProprietaryParty5 extends _ProprietaryParty5 {
  constructor: {new (): ProprietaryParty5}
}
export var ProprietaryParty5: {new (): ProprietaryParty5}

interface _ProprietaryPrice2 extends BaseType {
  Pric: ActiveOrHistoricCurrencyAndAmount
  Tp: string
}
export interface ProprietaryPrice2 extends _ProprietaryPrice2 {
  constructor: {new (): ProprietaryPrice2}
}
export var ProprietaryPrice2: {new (): ProprietaryPrice2}

interface _ProprietaryQuantity1 extends BaseType {
  Qty: string
  Tp: string
}
export interface ProprietaryQuantity1 extends _ProprietaryQuantity1 {
  constructor: {new (): ProprietaryQuantity1}
}
export var ProprietaryQuantity1: {new (): ProprietaryQuantity1}

interface _ProprietaryReference1 extends BaseType {
  Ref: string
  Tp: string
}
export interface ProprietaryReference1 extends _ProprietaryReference1 {
  constructor: {new (): ProprietaryReference1}
}
export var ProprietaryReference1: {new (): ProprietaryReference1}

interface _ProxyAccountIdentification1 extends BaseType {
  Id: string
  Tp?: ProxyAccountType1Choice
}
export interface ProxyAccountIdentification1 extends _ProxyAccountIdentification1 {
  constructor: {new (): ProxyAccountIdentification1}
}
export var ProxyAccountIdentification1: {new (): ProxyAccountIdentification1}

interface _ProxyAccountType1Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface ProxyAccountType1Choice extends _ProxyAccountType1Choice {
  constructor: {new (): ProxyAccountType1Choice}
}
export var ProxyAccountType1Choice: {new (): ProxyAccountType1Choice}

interface _Purpose2Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface Purpose2Choice extends _Purpose2Choice {
  constructor: {new (): Purpose2Choice}
}
export var Purpose2Choice: {new (): Purpose2Choice}

interface _Rate4 extends BaseType {
  Tp: RateType4Choice
  VldtyRg?: ActiveOrHistoricCurrencyAndAmountRange2
}
export interface Rate4 extends _Rate4 {
  constructor: {new (): Rate4}
}
export var Rate4: {new (): Rate4}

interface _RateType4Choice extends BaseType {
  Othr: string
  Pctg: number
}
export interface RateType4Choice extends _RateType4Choice {
  constructor: {new (): RateType4Choice}
}
export var RateType4Choice: {new (): RateType4Choice}

interface _ReferredDocumentInformation7 extends BaseType {
  LineDtls?: DocumentLineInformation1[]
  Nb?: string
  RltdDt?: Date
  Tp?: ReferredDocumentType4
}
export interface ReferredDocumentInformation7 extends _ReferredDocumentInformation7 {
  constructor: {new (): ReferredDocumentInformation7}
}
export var ReferredDocumentInformation7: {new (): ReferredDocumentInformation7}

interface _ReferredDocumentType3Choice extends BaseType {
  Cd: DocumentType6Code
  Prtry: string
}
export interface ReferredDocumentType3Choice extends _ReferredDocumentType3Choice {
  constructor: {new (): ReferredDocumentType3Choice}
}
export var ReferredDocumentType3Choice: {new (): ReferredDocumentType3Choice}

interface _ReferredDocumentType4 extends BaseType {
  CdOrPrtry: ReferredDocumentType3Choice
  Issr?: string
}
export interface ReferredDocumentType4 extends _ReferredDocumentType4 {
  constructor: {new (): ReferredDocumentType4}
}
export var ReferredDocumentType4: {new (): ReferredDocumentType4}

interface _RemittanceAmount2 extends BaseType {
  AdjstmntAmtAndRsn?: DocumentAdjustment1[]
  CdtNoteAmt?: ActiveOrHistoricCurrencyAndAmount
  DscntApldAmt?: DiscountAmountAndType1[]
  DuePyblAmt?: ActiveOrHistoricCurrencyAndAmount
  RmtdAmt?: ActiveOrHistoricCurrencyAndAmount
  TaxAmt?: TaxAmountAndType1[]
}
export interface RemittanceAmount2 extends _RemittanceAmount2 {
  constructor: {new (): RemittanceAmount2}
}
export var RemittanceAmount2: {new (): RemittanceAmount2}

interface _RemittanceAmount3 extends BaseType {
  AdjstmntAmtAndRsn?: DocumentAdjustment1[]
  CdtNoteAmt?: ActiveOrHistoricCurrencyAndAmount
  DscntApldAmt?: DiscountAmountAndType1[]
  DuePyblAmt?: ActiveOrHistoricCurrencyAndAmount
  RmtdAmt?: ActiveOrHistoricCurrencyAndAmount
  TaxAmt?: TaxAmountAndType1[]
}
export interface RemittanceAmount3 extends _RemittanceAmount3 {
  constructor: {new (): RemittanceAmount3}
}
export var RemittanceAmount3: {new (): RemittanceAmount3}

interface _RemittanceInformation16 extends BaseType {
  Strd?: StructuredRemittanceInformation16[]
  Ustrd?: string[]
}
export interface RemittanceInformation16 extends _RemittanceInformation16 {
  constructor: {new (): RemittanceInformation16}
}
export var RemittanceInformation16: {new (): RemittanceInformation16}

interface _RemittanceLocation7 extends BaseType {
  RmtId?: string
  RmtLctnDtls?: RemittanceLocationData1[]
}
export interface RemittanceLocation7 extends _RemittanceLocation7 {
  constructor: {new (): RemittanceLocation7}
}
export var RemittanceLocation7: {new (): RemittanceLocation7}

interface _RemittanceLocationData1 extends BaseType {
  ElctrncAdr?: string
  Mtd: RemittanceLocationMethod2Code
  PstlAdr?: NameAndAddress16
}
export interface RemittanceLocationData1 extends _RemittanceLocationData1 {
  constructor: {new (): RemittanceLocationData1}
}
export var RemittanceLocationData1: {new (): RemittanceLocationData1}

export type RemittanceLocationMethod2Code =
  | 'FAXI'
  | 'EDIC'
  | 'URID'
  | 'EMAL'
  | 'POST'
  | 'SMSM'
interface _RemittanceLocationMethod2Code extends Primitive._string {
  content: RemittanceLocationMethod2Code
}

interface _ReportEntry10 extends BaseType {
  AcctSvcrRef?: string
  AddtlInfInd?: MessageIdentification2
  AddtlNtryInf?: string
  Amt: ActiveOrHistoricCurrencyAndAmount
  AmtDtls?: AmountAndCurrencyExchange3
  Avlbty?: CashAvailability1[]
  BkTxCd: BankTransactionCodeStructure4
  BookgDt?: DateAndDateTime2Choice
  CardTx?: CardEntry4
  CdtDbtInd: CreditDebitCode
  Chrgs?: Charges6
  ComssnWvrInd?: boolean
  Intrst?: TransactionInterest4
  NtryDtls?: EntryDetails9[]
  NtryRef?: string
  RvslInd?: boolean
  Sts: EntryStatus1Choice
  TechInptChanl?: TechnicalInputChannel1Choice
  ValDt?: DateAndDateTime2Choice
}
export interface ReportEntry10 extends _ReportEntry10 {
  constructor: {new (): ReportEntry10}
}
export var ReportEntry10: {new (): ReportEntry10}

interface _ReportingSource1Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface ReportingSource1Choice extends _ReportingSource1Choice {
  constructor: {new (): ReportingSource1Choice}
}
export var ReportingSource1Choice: {new (): ReportingSource1Choice}

interface _ReturnReason5Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface ReturnReason5Choice extends _ReturnReason5Choice {
  constructor: {new (): ReturnReason5Choice}
}
export var ReturnReason5Choice: {new (): ReturnReason5Choice}

interface _SecuritiesAccount19 extends BaseType {
  Id: string
  Nm?: string
  Tp?: GenericIdentification30
}
export interface SecuritiesAccount19 extends _SecuritiesAccount19 {
  constructor: {new (): SecuritiesAccount19}
}
export var SecuritiesAccount19: {new (): SecuritiesAccount19}

interface _SecurityIdentification19 extends BaseType {
  Desc?: string
  ISIN?: string
  OthrId?: OtherIdentification1[]
}
export interface SecurityIdentification19 extends _SecurityIdentification19 {
  constructor: {new (): SecurityIdentification19}
}
export var SecurityIdentification19: {new (): SecurityIdentification19}

interface _SequenceRange1 extends BaseType {
  FrSeq: string
  ToSeq: string
}
export interface SequenceRange1 extends _SequenceRange1 {
  constructor: {new (): SequenceRange1}
}
export var SequenceRange1: {new (): SequenceRange1}

interface _SequenceRange1Choice extends BaseType {
  EQSeq: string[]
  FrSeq: string
  FrToSeq: SequenceRange1[]
  NEQSeq: string[]
  ToSeq: string
}
export interface SequenceRange1Choice extends _SequenceRange1Choice {
  constructor: {new (): SequenceRange1Choice}
}
export var SequenceRange1Choice: {new (): SequenceRange1Choice}

interface _StructuredRemittanceInformation16 extends BaseType {
  AddtlRmtInf?: string[]
  CdtrRefInf?: CreditorReferenceInformation2
  GrnshmtRmt?: Garnishment3
  Invcee?: PartyIdentification135
  Invcr?: PartyIdentification135
  RfrdDocAmt?: RemittanceAmount2
  RfrdDocInf?: ReferredDocumentInformation7[]
  TaxRmt?: TaxInformation7
}
export interface StructuredRemittanceInformation16
  extends _StructuredRemittanceInformation16 {
  constructor: {new (): StructuredRemittanceInformation16}
}
export var StructuredRemittanceInformation16: {
  new (): StructuredRemittanceInformation16
}

interface _SupplementaryData1 extends BaseType {
  Envlp: SupplementaryDataEnvelope1
  PlcAndNm?: string
}
export interface SupplementaryData1 extends _SupplementaryData1 {
  constructor: {new (): SupplementaryData1}
}
export var SupplementaryData1: {new (): SupplementaryData1}

interface _SupplementaryDataEnvelope1 extends BaseType {}
export interface SupplementaryDataEnvelope1 extends _SupplementaryDataEnvelope1 {
  constructor: {new (): SupplementaryDataEnvelope1}
}
export var SupplementaryDataEnvelope1: {new (): SupplementaryDataEnvelope1}

interface _TaxAmount2 extends BaseType {
  Dtls?: TaxRecordDetails2[]
  Rate?: number
  TaxblBaseAmt?: ActiveOrHistoricCurrencyAndAmount
  TtlAmt?: ActiveOrHistoricCurrencyAndAmount
}
export interface TaxAmount2 extends _TaxAmount2 {
  constructor: {new (): TaxAmount2}
}
export var TaxAmount2: {new (): TaxAmount2}

interface _TaxAmountAndType1 extends BaseType {
  Amt: ActiveOrHistoricCurrencyAndAmount
  Tp?: TaxAmountType1Choice
}
export interface TaxAmountAndType1 extends _TaxAmountAndType1 {
  constructor: {new (): TaxAmountAndType1}
}
export var TaxAmountAndType1: {new (): TaxAmountAndType1}

interface _TaxAmountType1Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface TaxAmountType1Choice extends _TaxAmountType1Choice {
  constructor: {new (): TaxAmountType1Choice}
}
export var TaxAmountType1Choice: {new (): TaxAmountType1Choice}

interface _TaxAuthorisation1 extends BaseType {
  Nm?: string
  Titl?: string
}
export interface TaxAuthorisation1 extends _TaxAuthorisation1 {
  constructor: {new (): TaxAuthorisation1}
}
export var TaxAuthorisation1: {new (): TaxAuthorisation1}

interface _TaxCharges2 extends BaseType {
  Amt?: ActiveOrHistoricCurrencyAndAmount
  Id?: string
  Rate?: number
}
export interface TaxCharges2 extends _TaxCharges2 {
  constructor: {new (): TaxCharges2}
}
export var TaxCharges2: {new (): TaxCharges2}

interface _TaxInformation7 extends BaseType {
  AdmstnZone?: string
  Cdtr?: TaxParty1
  Dbtr?: TaxParty2
  Dt?: Date
  Mtd?: string
  Rcrd?: TaxRecord2[]
  RefNb?: string
  SeqNb?: number
  TtlTaxAmt?: ActiveOrHistoricCurrencyAndAmount
  TtlTaxblBaseAmt?: ActiveOrHistoricCurrencyAndAmount
  UltmtDbtr?: TaxParty2
}
export interface TaxInformation7 extends _TaxInformation7 {
  constructor: {new (): TaxInformation7}
}
export var TaxInformation7: {new (): TaxInformation7}

interface _TaxInformation8 extends BaseType {
  AdmstnZone?: string
  Cdtr?: TaxParty1
  Dbtr?: TaxParty2
  Dt?: Date
  Mtd?: string
  Rcrd?: TaxRecord2[]
  RefNb?: string
  SeqNb?: number
  TtlTaxAmt?: ActiveOrHistoricCurrencyAndAmount
  TtlTaxblBaseAmt?: ActiveOrHistoricCurrencyAndAmount
}
export interface TaxInformation8 extends _TaxInformation8 {
  constructor: {new (): TaxInformation8}
}
export var TaxInformation8: {new (): TaxInformation8}

interface _TaxParty1 extends BaseType {
  RegnId?: string
  TaxId?: string
  TaxTp?: string
}
export interface TaxParty1 extends _TaxParty1 {
  constructor: {new (): TaxParty1}
}
export var TaxParty1: {new (): TaxParty1}

interface _TaxParty2 extends BaseType {
  Authstn?: TaxAuthorisation1
  RegnId?: string
  TaxId?: string
  TaxTp?: string
}
export interface TaxParty2 extends _TaxParty2 {
  constructor: {new (): TaxParty2}
}
export var TaxParty2: {new (): TaxParty2}

interface _TaxPeriod2 extends BaseType {
  FrToDt?: DatePeriod2
  Tp?: TaxRecordPeriod1Code
  Yr?: Date
}
export interface TaxPeriod2 extends _TaxPeriod2 {
  constructor: {new (): TaxPeriod2}
}
export var TaxPeriod2: {new (): TaxPeriod2}

interface _TaxRecord2 extends BaseType {
  AddtlInf?: string
  CertId?: string
  Ctgy?: string
  CtgyDtls?: string
  DbtrSts?: string
  FrmsCd?: string
  Prd?: TaxPeriod2
  TaxAmt?: TaxAmount2
  Tp?: string
}
export interface TaxRecord2 extends _TaxRecord2 {
  constructor: {new (): TaxRecord2}
}
export var TaxRecord2: {new (): TaxRecord2}

interface _TaxRecordDetails2 extends BaseType {
  Amt: ActiveOrHistoricCurrencyAndAmount
  Prd?: TaxPeriod2
}
export interface TaxRecordDetails2 extends _TaxRecordDetails2 {
  constructor: {new (): TaxRecordDetails2}
}
export var TaxRecordDetails2: {new (): TaxRecordDetails2}

export type TaxRecordPeriod1Code =
  | 'MM01'
  | 'MM02'
  | 'MM03'
  | 'MM04'
  | 'MM05'
  | 'MM06'
  | 'MM07'
  | 'MM08'
  | 'MM09'
  | 'MM10'
  | 'MM11'
  | 'MM12'
  | 'QTR1'
  | 'QTR2'
  | 'QTR3'
  | 'QTR4'
  | 'HLF1'
  | 'HLF2'
interface _TaxRecordPeriod1Code extends Primitive._string {
  content: TaxRecordPeriod1Code
}

interface _TechnicalInputChannel1Choice extends BaseType {
  Cd: string
  Prtry: string
}
export interface TechnicalInputChannel1Choice extends _TechnicalInputChannel1Choice {
  constructor: {new (): TechnicalInputChannel1Choice}
}
export var TechnicalInputChannel1Choice: {new (): TechnicalInputChannel1Choice}

interface _TotalsPerBankTransactionCode5 extends BaseType {
  Avlbty?: CashAvailability1[]
  BkTxCd: BankTransactionCodeStructure4
  CdtNtries?: NumberAndSumOfTransactions1
  DbtNtries?: NumberAndSumOfTransactions1
  Dt?: DateAndDateTime2Choice
  FcstInd?: boolean
  NbOfNtries?: string
  Sum?: number
  TtlNetNtry?: AmountAndDirection35
}
export interface TotalsPerBankTransactionCode5
  extends _TotalsPerBankTransactionCode5 {
  constructor: {new (): TotalsPerBankTransactionCode5}
}
export var TotalsPerBankTransactionCode5: {new (): TotalsPerBankTransactionCode5}

interface _TotalTransactions6 extends BaseType {
  TtlCdtNtries?: NumberAndSumOfTransactions1
  TtlDbtNtries?: NumberAndSumOfTransactions1
  TtlNtries?: NumberAndSumOfTransactions4
  TtlNtriesPerBkTxCd?: TotalsPerBankTransactionCode5[]
}
export interface TotalTransactions6 extends _TotalTransactions6 {
  constructor: {new (): TotalTransactions6}
}
export var TotalTransactions6: {new (): TotalTransactions6}

interface _TrackData1 extends BaseType {
  TrckNb?: string
  TrckVal: string
}
export interface TrackData1 extends _TrackData1 {
  constructor: {new (): TrackData1}
}
export var TrackData1: {new (): TrackData1}

interface _TransactionAgents5 extends BaseType {
  CdtrAgt?: BranchAndFinancialInstitutionIdentification6
  DbtrAgt?: BranchAndFinancialInstitutionIdentification6
  DlvrgAgt?: BranchAndFinancialInstitutionIdentification6
  InstdAgt?: BranchAndFinancialInstitutionIdentification6
  InstgAgt?: BranchAndFinancialInstitutionIdentification6
  IntrmyAgt1?: BranchAndFinancialInstitutionIdentification6
  IntrmyAgt2?: BranchAndFinancialInstitutionIdentification6
  IntrmyAgt3?: BranchAndFinancialInstitutionIdentification6
  IssgAgt?: BranchAndFinancialInstitutionIdentification6
  Prtry?: ProprietaryAgent4[]
  RcvgAgt?: BranchAndFinancialInstitutionIdentification6
  SttlmPlc?: BranchAndFinancialInstitutionIdentification6
}
export interface TransactionAgents5 extends _TransactionAgents5 {
  constructor: {new (): TransactionAgents5}
}
export var TransactionAgents5: {new (): TransactionAgents5}

export type TransactionChannel1Code = 'MAIL' | 'TLPH' | 'ECOM' | 'TVPY'
interface _TransactionChannel1Code extends Primitive._string {
  content: TransactionChannel1Code
}

interface _TransactionDates3 extends BaseType {
  AccptncDtTm?: Date
  EndDt?: Date
  IntrBkSttlmDt?: Date
  Prtry?: ProprietaryDate3[]
  StartDt?: Date
  TradActvtyCtrctlSttlmDt?: Date
  TradDt?: Date
  TxDtTm?: Date
}
export interface TransactionDates3 extends _TransactionDates3 {
  constructor: {new (): TransactionDates3}
}
export var TransactionDates3: {new (): TransactionDates3}

export type TransactionEnvironment1Code = 'MERC' | 'PRIV' | 'PUBL'
interface _TransactionEnvironment1Code extends Primitive._string {
  content: TransactionEnvironment1Code
}

interface _TransactionIdentifier1 extends BaseType {
  TxDtTm: Date
  TxRef: string
}
export interface TransactionIdentifier1 extends _TransactionIdentifier1 {
  constructor: {new (): TransactionIdentifier1}
}
export var TransactionIdentifier1: {new (): TransactionIdentifier1}

interface _TransactionInterest4 extends BaseType {
  Rcrd?: InterestRecord2[]
  TtlIntrstAndTaxAmt?: ActiveOrHistoricCurrencyAndAmount
}
export interface TransactionInterest4 extends _TransactionInterest4 {
  constructor: {new (): TransactionInterest4}
}
export var TransactionInterest4: {new (): TransactionInterest4}

interface _TransactionParties6 extends BaseType {
  Cdtr?: Party40Choice
  CdtrAcct?: CashAccount38
  Dbtr?: Party40Choice
  DbtrAcct?: CashAccount38
  InitgPty?: Party40Choice
  Prtry?: ProprietaryParty5[]
  TradgPty?: Party40Choice
  UltmtCdtr?: Party40Choice
  UltmtDbtr?: Party40Choice
}
export interface TransactionParties6 extends _TransactionParties6 {
  constructor: {new (): TransactionParties6}
}
export var TransactionParties6: {new (): TransactionParties6}

interface _TransactionPrice4Choice extends BaseType {
  DealPric: Price7
  Prtry: ProprietaryPrice2[]
}
export interface TransactionPrice4Choice extends _TransactionPrice4Choice {
  constructor: {new (): TransactionPrice4Choice}
}
export var TransactionPrice4Choice: {new (): TransactionPrice4Choice}

interface _TransactionQuantities3Choice extends BaseType {
  OrgnlAndCurFaceAmt: OriginalAndCurrentQuantities1
  Prtry: ProprietaryQuantity1
  Qty: FinancialInstrumentQuantity1Choice
}
export interface TransactionQuantities3Choice extends _TransactionQuantities3Choice {
  constructor: {new (): TransactionQuantities3Choice}
}
export var TransactionQuantities3Choice: {new (): TransactionQuantities3Choice}

interface _TransactionReferences6 extends BaseType {
  AcctOwnrTxId?: string
  AcctSvcrRef?: string
  AcctSvcrTxId?: string
  ChqNb?: string
  ClrSysRef?: string
  EndToEndId?: string
  InstrId?: string
  MktInfrstrctrTxId?: string
  MndtId?: string
  MsgId?: string
  PmtInfId?: string
  PrcgId?: string
  Prtry?: ProprietaryReference1[]
  TxId?: string
  UETR?: string
}
export interface TransactionReferences6 extends _TransactionReferences6 {
  constructor: {new (): TransactionReferences6}
}
export var TransactionReferences6: {new (): TransactionReferences6}

export type TrueFalseIndicator = boolean
type _TrueFalseIndicator = Primitive._boolean

export type UnitOfMeasure1Code =
  | 'PIEC'
  | 'TONS'
  | 'FOOT'
  | 'GBGA'
  | 'USGA'
  | 'GRAM'
  | 'INCH'
  | 'KILO'
  | 'PUND'
  | 'METR'
  | 'CMET'
  | 'MMET'
  | 'LITR'
  | 'CELI'
  | 'MILI'
  | 'GBOU'
  | 'USOU'
  | 'GBQA'
  | 'USQA'
  | 'GBPI'
  | 'USPI'
  | 'MILE'
  | 'KMET'
  | 'YARD'
  | 'SQKI'
  | 'HECT'
  | 'ARES'
  | 'SMET'
  | 'SCMT'
  | 'SMIL'
  | 'SQMI'
  | 'SQYA'
  | 'SQFO'
  | 'SQIN'
  | 'ACRE'
interface _UnitOfMeasure1Code extends Primitive._string {
  content: UnitOfMeasure1Code
}

export type UserInterface2Code = 'MDSP' | 'CDSP'
interface _UserInterface2Code extends Primitive._string {
  content: UserInterface2Code
}

export type UUIDv4Identifier = string
type _UUIDv4Identifier = Primitive._string

export type YesNoIndicator = boolean
type _YesNoIndicator = Primitive._boolean

interface _YieldedOrValueType1Choice extends BaseType {
  ValTp: PriceValueType1Code
  Yldd: boolean
}
export interface YieldedOrValueType1Choice extends _YieldedOrValueType1Choice {
  constructor: {new (): YieldedOrValueType1Choice}
}
export var YieldedOrValueType1Choice: {new (): YieldedOrValueType1Choice}

export interface document extends BaseType {
  Document: Document
}
export var document: document
