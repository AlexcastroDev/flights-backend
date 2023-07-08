import { PrismaClient } from '@prisma/client';
import testimonialsSeed from './testimonials';
import usersSeed from './users';
const prisma = new PrismaClient();

async function main() {
  const priorizedSeeds = Promise.all([usersSeed(prisma)]);
  const seeds = Promise.all([testimonialsSeed(prisma)]);

  await priorizedSeeds;
  await seeds;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
