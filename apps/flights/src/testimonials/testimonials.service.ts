import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface Testimonial {
  comment: string;
  user_id: number;
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
        user_id: data.user_id,
      },
    });
  }

  async update(id: number, data: Testimonial) {
    return await this.prisma.testimonials.update({
      where: {
        id,
      },
      data: {
        comment: data.comment,
        user_id: data.user_id,
      },
    });
  }
  async delete(id: number, user_id: number) {
    try {
      return await this.prisma.testimonials.deleteMany({
        where: {
          id,
          user_id,
        },
      });
    } catch {
      throw new NotFoundException();
    }
  }
}
