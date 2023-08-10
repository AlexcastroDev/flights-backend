import { Module } from '@nestjs/common';
import { TestimonialsService } from './testimonials.service';
import { TestimonialsController } from './testimonials.controller';
import { PrismaService } from '../prisma/prisma.service';
import { TestimonialsResolver } from './testimonials.resolvers';

@Module({
  providers: [TestimonialsService, PrismaService, TestimonialsResolver],
  controllers: [TestimonialsController],
})
export class TestimonialsModule {}
