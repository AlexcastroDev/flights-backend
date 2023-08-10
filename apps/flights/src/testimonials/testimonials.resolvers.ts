import { Query, Resolver } from '@nestjs/graphql';
import { TestimonialsService } from './testimonials.service';

@Resolver('Testimonial')
export class TestimonialsResolver {
  constructor(private testimonialsService: TestimonialsService) {}

  @Query('testimonials')
  async getUser() {
    return this.testimonialsService.getAll();
  }
}
