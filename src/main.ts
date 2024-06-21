import * as process from 'process';
import { config } from './config';
import { buildFastifyApp } from './app/build-fastify-app';

(async () => {
  const server = buildFastifyApp();

  try {
    await server.listen(config.server);
  } catch (e) {
    server.log.error(e);
    process.exit(1);
  }
})();
