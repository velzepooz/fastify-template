import diContainer from 'true-di';
import { PrismaClient } from '@prisma/client';
import { config } from '../config';
import { initDb } from './db';

export interface IDIContainer {
  db: PrismaClient;
}

export default diContainer<IDIContainer>({
  db: () => initDb(),
});
