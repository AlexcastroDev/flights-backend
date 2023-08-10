import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Testimonial, TestimonialsService } from './testimonials.service';
import { AuthGuard } from '../auth/auth.guard';
import { IUserRequest } from '../types';

@Controller('testimonials')
export class TestimonialsController {
  constructor(private testimonialsService: TestimonialsService) {}

  @Get()
  async getTestimonials() {
    return this.testimonialsService.getAll();
  }

  @UseGuards(AuthGuard)
  @Post()
  async createTestimonial(
    @Body() data: Testimonial,
    @Request() req: IUserRequest
  ) {
    return this.testimonialsService.create({
      ...data,
      user_id: req.user.id,
    });
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async updateTestimonial(
    @Param('id') id: string,
    @Body() data: Testimonial,
    @Request() req: IUserRequest
  ) {
    return this.testimonialsService.update(Number(id), {
      ...data,
      user_id: req.user.id,
    });
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteTestimonial(
    @Param('id') id: string,
    @Request() req: IUserRequest
  ) {
    return this.testimonialsService.delete(Number(id), req.user.id);
  }
}
