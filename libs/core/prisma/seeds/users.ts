import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import PasswordManager from '../../src/utils/password-manager';

export default async function usersSeed(prisma: PrismaClient) {
  const password = new PasswordManager();
  const { salt, hash } = password.hashPassword('12345678Oi');
  await prisma.users.create({
    data: {
      name: faker.internet.userName(),
      email: 'test@test.com',
      password: hash,
      salt,
    },
  });
}
