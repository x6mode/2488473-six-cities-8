import { inject, injectable } from 'inversify';
import { Components } from '../types/components.js';

import { DatabaseClient } from '../shared/libs/database-client.js';
import { Logger } from '../shared/libs/logger/index.js';
import 'reflect-metadata';

@injectable()
export class RestApplication {
  constructor (
    @inject(Components.Logger) private readonly logger: Logger,
    @inject(Components.DatabaseClient) private readonly database: DatabaseClient,
  ) {}

  private initDB () {
    this.database.connect('fas');
  }

  public init () {
    this.logger.info('🚀 Application initialization...');

    this.initDB();
  }
}
