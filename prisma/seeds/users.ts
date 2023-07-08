import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { PasswordManager } from '@flights/core';

export default async function usersSeed(prisma: PrismaClient) {
  const password = new PasswordManager();
  const { salt, hash } = password.hashPassword('12345678');
  await prisma.users.create({
    data: {
      name: faker.internet.userName(),
      email: faker.internet.email(),
      password: hash,
      salt,
    },
  });
}
