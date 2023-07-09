import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { PasswordManager } from '../../src';

export default async function usersSeed(prisma: PrismaClient) {
  const { hash, salt } = new PasswordManager().hashPassword('12345678Oi');
  await prisma.users.create({
    data: {
      name: faker.internet.displayName(),
      email: 'test@test.com',
      password: hash,
      salt,
    },
  });
}
