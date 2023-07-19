import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Testimonial, TestimonialsService } from './testimonials.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('testimonials')
export class TestimonialsController {
  constructor(private testimonialsService: TestimonialsService) {}

  @Get()
  async getTestimonials() {
    return this.testimonialsService.getAll();
  }

  @UseGuards(AuthGuard)
  @Post()
  async createTestimonial(@Body() data: Testimonial) {
    return this.testimonialsService.create(data);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async updateTestimonial(@Param('id') id: string, @Body() data: Testimonial) {
    return this.testimonialsService.update(Number(id), data);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteTestimonial(@Param('id') id: string) {
    return this.testimonialsService.delete(Number(id));
  }
}
