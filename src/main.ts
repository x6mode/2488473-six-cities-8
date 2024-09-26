import { createRestApplicationContainer } from './rest/rest.container.js';

import { Components } from './types/components.js';
import { RestApplication } from './rest/rest.application.js';


async function bootstrap () {
  const appContainer = createRestApplicationContainer();

  const application = appContainer.get<RestApplication>(Components.RestApplication);
  await application.init();
}

bootstrap();
