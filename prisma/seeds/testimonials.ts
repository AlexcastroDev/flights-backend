import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

export default async function testimonialsSeed(prisma: PrismaClient) {
  await prisma.testimonials.upsert({
    create: {
      comment: faker.lorem.sentence(150),
    },
    where: {},
    update: {},
  });
}
