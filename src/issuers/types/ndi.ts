import {NDI} from '@bloomprotocol/attestations-lib'

interface IDataFieldValueBased {
  value: string | number
}

interface IDataFieldCodeBased {
  code: string
  desc?: string
}

type TDataField = IDataFieldCodeBased | IDataFieldValueBased

type TDataObject = {[key: string]: TDataField}

type TNDI = {
  name: NDI.TNDIItemValueBased
  edulevel: NDI.TNDIItemCodeBased
  nationality: NDI.TNDIItemCodeBased
  occupation: NDI.TNDIItemCodeBased
  employment: NDI.TNDIItemValueBased
  mobileno: NDI.TNDIMobileNo
  mailadd: NDI.TNDIMailAdd
  passportnumber: NDI.TNDIItemValueBased
  passportexpirydate: NDI.TNDIItemValueBased
  schoolname: NDI.TNDIItemCodeBased
  dob: NDI.TNDIItemValueBased
  email: NDI.TNDIItemValueBased
  householdincome: NDI.TNDIHouseholdIncome
  sex: NDI.TNDIItemCodeBased
  [key: string]: any
}

export {TNDI}
