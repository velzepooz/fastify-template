import dotenv from 'dotenv';
import { initServerConfig, IServerConfig } from './server.config';

dotenv.config();

export type IConfig = {
  server: IServerConfig;
};

export const config = {
  server: initServerConfig(),
};
