import mongoose from 'mongoose';

import { inject, injectable } from 'inversify';
import { setTimeout } from 'node:timers/promises';

import { Components } from '../../types/components.js';
import { Logger } from './logger/index.js';


const MAX_ATTEMPT = 5;
const FOR_TIMEOUT = 1000;

interface IDatabaseClient {
  connect(uri: string): Promise<void>;
  disconnect(): Promise<void>;
}

@injectable()
export class DatabaseClient implements IDatabaseClient {
  private mongoose: typeof mongoose;
  private isConnected: boolean;

  constructor (
    @inject(Components.Logger) private logger: Logger
  ) {}

  public async connect(uri: string): Promise<void> {
    if (this.isConnected) {
      throw new Error('Database already connected');
    }

    this.logger.info('Trying to connect database...');

    let attempt = 0;
    while (attempt < MAX_ATTEMPT) {
      try {
        this.mongoose = await mongoose.connect(uri);
        this.logger.info('Database successfully connected!');
        this.isConnected = true;
      } catch (error) {
        attempt++;
        this.logger.error(`Database can't connect on try ${attempt}`, error as Error);
        await setTimeout(FOR_TIMEOUT);
      }
    }
  }

  public async disconnect(): Promise<void> {
    if (!this.isConnected) {
      throw new Error('Database not connected');
    }
    this.mongoose.disconnect();
  }
}
