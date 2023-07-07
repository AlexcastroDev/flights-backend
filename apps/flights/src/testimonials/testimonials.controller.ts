import { Body, Controller, Get, Post } from '@nestjs/common';
import { Testimonial, TestimonialsService } from './testimonials.service';

@Controller('testimonials')
export class TestimonialsController {
  constructor(private testimonialsService: TestimonialsService) {}

  @Get()
  async getTestimonials() {
    return this.testimonialsService.getAll();
  }

  // TODO: Implement AuthGuard
  @Post()
  async createTestimonial(@Body() data: Testimonial) {
    return this.testimonialsService.create(data);
  }
}
