import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

export default async function testimonialsSeed(prisma: PrismaClient) {
  await prisma.testimonials.create({
    data: {
      comment: faker.lorem.sentence().substring(0, 150),
      user_id: 1,
    },
  });
}
