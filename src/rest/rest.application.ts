import { inject, injectable } from 'inversify';
import { Components } from '../types/components.js';

import express, { Express } from 'express';

import { DatabaseClient } from '../shared/libs/database-client.js';
import { Logger } from '../shared/libs/logger.js';

@injectable()
export class RestApplication {
  private readonly server: Express;

  constructor (
    @inject(Components.Logger) private readonly logger: Logger,
    @inject(Components.DatabaseClient) private readonly database: DatabaseClient,
  ) {
    this.server = express();
  }

  private _initDB () {
    this.database.connect('mongodb://localhost:27017/');
  }

  private _initServer () {
    this.server.listen(
      process.env.APP_PORT,
      () => {
        this.logger.info('Server successfully started!');
      }
    );
  }

  public async init () {
    this.logger.info('🚀 Application initialization...');

    await this._initDB();
    await this._initServer();
  }
}
