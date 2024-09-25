import chalk from 'chalk';
import { ICommand } from './command.interface.js';

export class HelpCommand implements ICommand {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(`
        Программа для подготовки данных для REST API сервера.
        Пример:
            cli.js ${chalk.yellow('--<command>')} ${chalk.yellow('[--arguments]')}
        Команды:
            ${chalk.cyan('--version')}:                   # выводит номер версии
            ${chalk.cyan('--help')}:                      # печатает этот текст
    `);
  }
}
