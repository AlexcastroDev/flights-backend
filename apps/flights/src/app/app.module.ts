import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestimonialsModule } from '../testimonials/testimonials.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [TestimonialsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
