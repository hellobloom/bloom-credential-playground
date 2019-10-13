import * as inquirer from 'inquirer'
import {rootCommand, combineArgs, cmd, argv, cli, validateArgSet} from './root'
import {toBoolean} from '../utls/misc'
import {ICommand, CommandStack, ArgsStack, IChoice, isNameValuePair} from '../models'

export const interactive: ICommand = {
  options: [],

  action: async args => {
    // dont need this one
    delete rootCommand.subcommands!.interactive

    const ui = new TextInterface('bloom-credential-playground', rootCommand)
    return ui.enter()
  },
}

class TextInterface {
  public commandStack: CommandStack
  public argStack: ArgsStack

  constructor(public name: string, public rootCommand: ICommand) {
    this.resetStack()
  }

  public resetStack() {
    this.commandStack = [{name: this.name, command: this.rootCommand}]
    this.argStack = [{name: this.name, args: {}}]
  }

  get args() {
    return this.argStack[this.argStack.length - 1]
  }

  get command() {
    return this.commandStack[this.commandStack.length - 1].command
  }

  get argv() {
    return argv(this.commandStack, this.argStack)
  }

  get cmd() {
    return cmd(this.argv)
  }

  get missingArgs() {
    return this.command.options
      .filter(o => toBoolean(o.required))
      .filter(o => Object.keys(this.args.args).indexOf(o.alias) === -1)
      .map(a => a.alias)
  }

  public async enter(): Promise<any> {
    const choice = await this.mainPrompt()

    if (choice === 'BACK') {
      if (this.commandStack.length < 2) return process.exit()
      this.commandStack.pop()
      this.argStack.pop()
      return this.enter()
    }

    if (choice.startsWith('--')) {
      return this.argPrompt(choice)
    }

    const valid = await validateArgSet(
      this.args.name,
      this.command.options,
      this.args.args
    )

    // if required args are missing prompt for them
    if (valid !== true) {
      console.log()
      console.log(
        `some required options are missing: ${this.missingArgs.reduce(
          (a, b) => `${a}, ${b} `
        )}`
      )
      return this.enter()
    }

    if (choice === 'EXECUTE') {
      return this.execute()
    }

    const subcommand = this.command.subcommands![choice]
    console.log(choice)

    this.commandStack.push({name: choice, command: subcommand})
    this.argStack.push({name: choice, args: {}})
    return this.enter()
  }

  public async mainPrompt(): Promise<string> {
    console.log()
    // if theres no options or subcommand short circuit and execte
    if (
      (this.command.subcommands === undefined ||
        Object.keys(this.command.subcommands).length === 0) &&
      this.command.options.length === 0
    ) {
      // commands must either have subcommands or an action
      // this will fail if not
      return this.execute()
    }

    let choices = ['BACK']

    if (this.command.action !== undefined) {
      choices.unshift('EXECUTE')
    }
    choices.unshift(new inquirer.Separator('------- Controls -------') as any)

    if (this.command.options.length > 0) {
      choices = choices.concat(
        new inquirer.Separator('-------- Options --------') as any,
        ...this.command.options.map(o => `--${o.alias}`)
      )
    }
    if (this.command.subcommands) {
      choices = choices.concat(
        new inquirer.Separator('------ Subcommands ------') as any,
        Object.keys(this.command.subcommands)
      )
    }

    return this.promptChoice(
      this.cmd,
      choices,
      this.missingArgs.map(o => [`--${o}`, '(missing)'] as [string, string])
    )
  }

  public async argPrompt(choice: string) {
    const optionName = choice.replace('--', '')
    const option = this.command.options.find(o => o.alias === optionName)!

    if (option.type === 'flag') {
      this.args.args[optionName] = await this.promptBoolean(
        `${this.cmd} <${optionName}>`
      )
    } else if (option.type === 'value') {
      if (option.getChoices !== undefined) {
        const optionChoices = await option.getChoices(combineArgs(this.argStack))
        optionChoices.unshift('MANUAL')

        const answer = await this.promptChoice(
          `${this.cmd} --${optionName}`,
          optionChoices
        )

        if (answer === 'MANUAL') {
          this.args.args[optionName] = await this.promptInput(
            `${this.cmd} --${optionName}`
          )
        } else {
          this.args.args[optionName] = answer
        }
      } else {
        this.args.args[optionName] = await this.promptInput(
          `${this.cmd} --${optionName}`
        )
      }
    } else {
      throw new Error(`option type ${option.type} not supported`)
    }

    return this.enter()
  }

  public async execute() {
    console.log()
    console.log(`EXECUTING: ${this.cmd}`)
    await cli(this.argv.slice(1))
    console.log()
    this.resetStack()
    return this.enter()
  }

  public async promptChoice(
    message: string,
    choices: IChoice[],
    extras?: Array<[string, string]>
  ) {
    let index = 0
    if (extras === undefined) extras = []

    const answers = await inquirer.prompt([
      {
        name: 'options',
        type: 'list',
        pageSize: 15,
        message,
        choices: choices.map(choice => {
          if (choice instanceof inquirer.Separator) {
            return choice
          }
          index += 1
          if (typeof choice === 'string') {
            const extra = extras!.find(e => e[0] === choice)
            return {
              name: `${index}) ${choice} ${extra ? extra[1] : ''}`,
              value: choice,
            }
          }
          if (isNameValuePair(choice)) {
            return {name: choice.name, value: choice.value}
          }
          throw new Error('choices must be a name value pair or string or separator')
        }),
      },
    ])

    return answers.options as string
  }

  public async promptBoolean(message: string) {
    const answers = await inquirer.prompt([
      {
        name: 'options',
        type: 'list',
        message,
        choices: ['true', 'false'],
      },
    ])

    return toBoolean(answers.options)
  }

  public async promptInput(message: string) {
    const answers = await inquirer.prompt([
      {
        name: 'options',
        type: 'input',
        message,
      },
    ])

    return answers.options as string
  }
}
