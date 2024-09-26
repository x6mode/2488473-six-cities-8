import { inject, injectable } from 'inversify';
import { Components } from '../types/components.js';

import { DatabaseClient } from '../shared/libs/database-client.js';
import { Logger } from '../shared/libs/logger/index.js';

@injectable()
export class RestApplication {
  constructor (
    @inject(Components.Logger) private readonly logger: Logger,
    @inject(Components.DatabaseClient) private readonly database: DatabaseClient,
  ) {}

  private initDB () {
    this.database.connect('mongodb://localhost:27017/');
  }

  public init () {
    this.logger.info('🚀 Application initialization...');

    this.initDB();
  }
}
