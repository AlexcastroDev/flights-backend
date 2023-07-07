import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

// TODO: Move to Contracts package
export interface Testimonial {
  name: string;
  comment: string;
}

const testimonials = [];

// TODO: Implement Repository to move between
// in-memory and database storage
@Injectable()
export class TestimonialsService {
  getAll() {
    return testimonials;
  }

  create(data: Testimonial) {
    testimonials.push({ ...data, picture: faker.internet.avatar() });

    return data;
  }
}
