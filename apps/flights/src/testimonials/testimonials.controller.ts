import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { Testimonial, TestimonialsService } from './testimonials.service';

@Controller('testimonials')
export class TestimonialsController {
  constructor(private testimonialsService: TestimonialsService) {}

  @Get()
  async getTestimonials() {
    return this.testimonialsService.getAll();
  }

  @Post()
  async createTestimonial(@Body() data: Testimonial) {
    return this.testimonialsService.create(data);
  }

  @Put(':id')
  async updateTestimonial(@Param('id') id: string, @Body() data: Testimonial) {
    return this.testimonialsService.update(Number(id), data);
  }

  @Delete(':id')
  async deleteTestimonial(@Param('id') id: string) {
    return this.testimonialsService.delete(Number(id));
  }
}
