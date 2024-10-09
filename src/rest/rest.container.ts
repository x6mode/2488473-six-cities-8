import { Container } from 'inversify';

import { Components } from '../types/components.js';

import { Logger } from '../shared/libs/logger.js';
import { DatabaseClient } from '../shared/libs/database-client.js';
import { RestApplication } from './rest.application.js';

export function createRestApplicationContainer () {
  const container = new Container();

  container.bind(Components.Logger).to(Logger).inSingletonScope();
  container.bind(Components.DatabaseClient).to(DatabaseClient).inSingletonScope();
  container.bind(Components.RestApplication).to(RestApplication).inSingletonScope();

  return container;
}
