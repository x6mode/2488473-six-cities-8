import { injectable } from 'inversify';

import { Logger as PinoInstance, pino } from 'pino';

export interface ILogger {
  info(message: string, ...args: unknown[]): void;
  warn(message: string, ...args: unknown[]): void;
  error(message: string, error: Error, ...args: unknown[]): void;
  debug(message: string, ...args: unknown[]): void;
}

@injectable()
export class Logger implements ILogger {
  private readonly logger: PinoInstance;

  constructor () {
    this.logger = pino();
    this.logger.info('Logger created....');
  }

  info(message: string, ...args: unknown[]): void {
    this.logger.info(message, ...args);
  }

  debug(message: string, ...args: unknown[]): void {
    this.logger.debug(message, ...args);
  }

  error(message: string, ...args: unknown[]): void {
    this.logger.error(message, ...args);
  }

  warn(message: string, ...args: unknown[]): void {
    this.logger.warn(message, ...args);
  }
}
