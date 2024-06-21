import fastify from 'fastify';
import fastifyCookie from '@fastify/cookie';
import cors from '@fastify/cors';
import fileUpload from '@fastify/multipart';
import fastifyHelmet from '@fastify/helmet';
import { initControllers } from './init-http-contollers';
import diContainer from './di-container';

/**
 * Create fastify app and create http routes for app
 */
export const buildFastifyApp = (opts = { logger: true }) => {
  const app = fastify(opts);

  app.register(fastifyCookie);
  app.register(cors);
  app.register(fileUpload);
  app.register(fastifyHelmet);

  const routes = initControllers(diContainer);

  for (const route of routes) {
    app.route(route);
  }

  return app;
};
