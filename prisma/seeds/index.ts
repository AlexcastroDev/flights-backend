import { PrismaClient } from '@prisma/client';
import testimonialsSeed from './testimonials';
const prisma = new PrismaClient();

async function main() {
  const seeds = Promise.all([testimonialsSeed(prisma)]);

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
