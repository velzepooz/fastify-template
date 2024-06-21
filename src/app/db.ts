import { PrismaClient } from '@prisma/client';

export const initDb = (): PrismaClient => {
  const client = new PrismaClient();
  client.$connect();
  return client;
};
