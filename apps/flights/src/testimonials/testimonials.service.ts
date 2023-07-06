import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

@Injectable()
export class TestimonialsService {
  getAll() {
    return [
      {
        name: faker.person.fullName(),
        picture: faker.internet.avatar(),
        comment: faker.lorem.paragraph(),
      },
    ];
  }
}
