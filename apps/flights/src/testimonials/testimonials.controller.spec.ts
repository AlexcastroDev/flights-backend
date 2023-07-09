import { Test, TestingModule } from '@nestjs/testing';
import { TestimonialsController } from './testimonials.controller';
import { TestimonialsService } from './testimonials.service';
import { PrismaService } from '../prisma/prisma.service';
import { faker } from '@faker-js/faker';

describe('TestimonialsController', () => {
  let controller: TestimonialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestimonialsService, PrismaService],
      controllers: [TestimonialsController],
    }).compile();

    controller = module.get<TestimonialsController>(TestimonialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should return an array of testimonials', async () => {
    const comment = faker.lorem.sentence().substring(0, 150);
    const response = await controller.createTestimonial({ comment });

    expect(response).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        comment: expect.any(String),
        created_at: expect.any(Date),
        updated_at: expect.any(Date),
      })
    );

    expect(response.comment).toEqual(comment);
  });
});
