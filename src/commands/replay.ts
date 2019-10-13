import {Repo} from '../repository'
import {ICommand} from '../models'
import {cmd, cli} from './root'

const repo = new Repo()

export const replay: ICommand = {
  options: [
    {
      name: 'c',
      type: 'value',
      alias: 'cmd',
      required: true,

      getChoices: async args => {
        const commands = await repo.getRecentCommands()
        return commands.map((c, i) => ({name: cmd(c), value: i.toString()}))
      },
    },
  ],
  action: async (args: {replay: {cmd: string}}) => {
    const commands = await repo.getRecentCommands()
    const argv = commands[Number(args.replay.cmd)]
    return cli(argv)
  },
}
