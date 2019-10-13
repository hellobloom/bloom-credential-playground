import * as getopts from 'getopts'
import {interactive} from './interactive'
import {account} from './account'
import {issuance} from './issuance'
import {share} from './share'
import {verify} from './verify'
import {
  ICommand,
  CommandStack,
  ArgsStack,
  CommandAction,
  IOption,
  commandPrinter,
} from '../models'
import {Repo} from '../repository'
import {replay} from './replay'

export const rootCommand = {
  options: [],

  subcommands: {
    account,
    issuance,
    share,
    verify,
    version: {options: [], action: () => console.log('0.0.1')},
    interactive,
    replay,
  },
} as ICommand

async function parseArgs(
  argv: string[],
  commandStack: CommandStack,
  argStack: ArgsStack
): Promise<any> {
  const current = commandStack[commandStack.length - 1]
  const alias = {}
  current.command.options.forEach(o => (alias[o.name] = o.alias))

  const newArgs = getopts(argv, {
    stopEarly: true,
    boolean: current.command.options.filter(o => o.type === 'flag').map(o => o.name),
    string: current.command.options.filter(o => o.type === 'value').map(o => o.name),
    alias,
    unknown: option => help(`unknown option ${option}`),
  })

  const operands = newArgs._
  const [subcommandName] = operands

  delete newArgs._
  argStack.push({name: current.name, args: newArgs})

  if (subcommandName === undefined) {
    if (current.command.action === undefined) {
      return help('please choose a subcommand')
    }
    if ((await validateAllArgs(commandStack, argStack)) === false) return

    return executeCommand(current.command.action, combineArgs(argStack))
  }

  if (current.command.subcommands === undefined)
    return help(`unknown sub command ${process.argv.slice(2)}`)

  const subcommand = current.command.subcommands[subcommandName]
  if (subcommand === undefined)
    return help(`unknown sub command ${process.argv.slice(2)}`)

  commandStack.push({name: subcommandName, command: subcommand})
  return parseArgs(operands.slice(1), commandStack, argStack)
}

export async function cli(argv: string[] = process.argv.slice(2)) {
  // await sleep(10000)
  await parseArgs(
    argv,
    [{name: 'bloom-credential-playground', command: rootCommand}],
    []
  )

  if (argv[0] !== 'replay') {
    await new Repo().addRecentCommand(argv)
  }
}

export function combineArgs(argStack: ArgsStack) {
  const args = {}
  argStack.forEach(a => (args[a.name] = a.args))
  return args
}

export async function validateArgSet(name: string, options: IOption[], args: any) {
  for (const option of options) {
    const unset = [undefined, ''].indexOf(args[option.alias]) !== -1

    if (unset && option.getDefault !== undefined) {
      args[option.alias] = await option.getDefault(args)
      continue
    }

    if (option.required && unset) {
      console.log(`${option.alias} is required for ${name}`)
      return false
    }
  }
  return true
}

export async function validateAllArgs(
  commandStack: CommandStack,
  argStack: ArgsStack
) {
  for (let i = 0; i < commandStack.length; i++) {
    const options = commandStack[i].command.options
    const args = argStack[i].args
    const valid = await validateArgSet(commandStack[i].name, options, args)
    if (!valid) return false
  }
  return true
}

export function cmd(argv: string[]) {
  let cmd = ''
  for (const arg of argv) {
    cmd += `${arg} `
  }
  return cmd
}

export function argv(commandStack: CommandStack, argStack: ArgsStack) {
  const argv: string[] = []
  commandStack.forEach((current, i) => {
    argv.push(current.name)
    const args = argStack[i].args
    if (args !== undefined) {
      for (const arg in args) {
        const option = current.command.options.find(o => o.alias === arg)!
        if (option.type === 'flag') {
          argv.push(`--${option.alias}`)
        } else if (option.type === 'value') {
          argv.push(`--${option.alias}`, args[arg])
        } else {
          throw new Error(`option type ${option.type} not supported`)
        }
      }
    }
  })

  return argv
}

async function executeCommand(action: CommandAction, args: {}) {
  try {
    await action(args)
  } catch (err) {
    console.error(err)
  }
}

function help(message: string) {
  console.log(`${message}\n`)
  commandPrinter(rootCommand)
  process.exit()
  return false
}
