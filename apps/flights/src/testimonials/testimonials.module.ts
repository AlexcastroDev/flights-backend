import { Module } from '@nestjs/common';
import { TestimonialsService } from './testimonials.service';
import { TestimonialsController } from './testimonials.controller';
import { PrismaService } from '../prisma/prisma.service';
import { AuthModule } from '../auth/auth.module';
import { TestimonialsResolver } from './testimonials.resolvers';

@Module({
  imports: [AuthModule],
  providers: [TestimonialsService, PrismaService, TestimonialsResolver],
  controllers: [TestimonialsController],
})
export class TestimonialsModule {}
