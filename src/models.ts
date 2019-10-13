import inquirer = require('inquirer')

export interface Account {
  defaultAccount: boolean
  rowid: number
  pgpKey: string
  email: string
  pendingEmail?: string
  address: string
  privateKey: string
  name: string
  loginCookie?: string
  vaultToken?: string
}

export interface AttestationVault {
  id: number
  accountId: number
  signature: string
  data: string
}

export interface Presentations {
  id: number
  accountId: number
  signature: string
  data: string
}

export interface Attestation {
  id: string
  createdAt: number
  merkleTreeComponents: any
  signature: string
  subject: string
  requester: string
  attester: string
  requestNonce: string
}

///////////////////////////////////// COMMAND LINE //////////////////////////////////////////////

export function isNameValuePair(
  choice: any
): choice is {name: string; value: string} {
  return typeof choice.value === 'string' && typeof choice.name === 'string'
}

export type IChoice =
  | {name: string; value: string}
  | string
  | typeof inquirer.Separator

export type ChoiceGetter = (args: any) => Promise<IChoice[]> | IChoice[]

export interface IOption {
  type: 'value' | 'flag'
  alias: string
  required?: boolean
  getChoices?: ChoiceGetter
  getDefault?: (args: any) => Promise<string | boolean> | string | boolean
  name:
    | 'a'
    | 'b'
    | 'c'
    | 'd'
    | 'e'
    | 'f'
    | 'g'
    | 'h'
    | 'i'
    | 'k'
    | 'l'
    | 'm'
    | 'n'
    | 'p'
    | 'q'
    | 'r'
    | 's'
    | 't'
    | 'u'
    | 'v'
    | 'w'
    | 'x'
    | 'z'
    | 'y'
}

export type CommandAction = (args: any) => Promise<any> | any

export interface ICommand {
  options: IOption[]
  action?: CommandAction
  subcommands?: ICommands
}

export interface ICommands {
  [key: string]: ICommand
}

export const commandPrinter = (command: ICommand, level: number = 0) => {
  if (typeof command.subcommands !== 'undefined') {
    Object.keys(command.subcommands).forEach(scKey => {
      if (!command.subcommands) {
        return
      }
      const subCommand = command.subcommands[scKey]
      const optionsStr =
        subCommand.options.length > 0
          ? `${subCommand.options
              .map(o => {
                const {alias, name, ...opts} = o
                return `--${o.alias} ${JSON.stringify(opts)}`
              })
              .join(', ')
              .trim()}`
          : ''

      if (optionsStr.trim() !== '') {
        console.log('\t'.repeat(level), scKey, optionsStr)
      } else {
        console.log('\t'.repeat(level), scKey)
      }

      commandPrinter(subCommand, level + 1)

      if (level === 0) {
        console.log()
      }
    })
  }
}

export type CommandStack = Array<{name: string; command: ICommand}>

export type ArgsStack = Array<{name: string; args: any}>
