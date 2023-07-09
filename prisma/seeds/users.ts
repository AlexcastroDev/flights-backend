import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

export default async function usersSeed(prisma: PrismaClient) {
  await prisma.users.create({
    data: {
      name: faker.internet.displayName(),
      email: 'test@test.com',
      password: '12345678Oi',
      salt: '12345678Oi',
    },
  });
}
