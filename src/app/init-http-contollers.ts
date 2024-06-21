import { RouteOptions } from 'fastify';
import { IDIContainer } from './di-container';

export const initControllers = (container: IDIContainer): RouteOptions[] => {
  return [
    {
      method: 'GET',
      url: '/ping',
      handler: () => {
        return { pong: 'pong' };
      },
    },
  ];
};
