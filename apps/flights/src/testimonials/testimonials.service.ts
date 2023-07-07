import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface Testimonial {
  comment: string;
}

@Injectable()
export class TestimonialsService {
  constructor(private prisma: PrismaService) {}
  async getAll() {
    return await this.prisma.testimonials.findMany();
  }

  async create(data: Testimonial) {
    return await this.prisma.testimonials.create({
      data: {
        comment: data.comment,
      },
    });
  }
}
