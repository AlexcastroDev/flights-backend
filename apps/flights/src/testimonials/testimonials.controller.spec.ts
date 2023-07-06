import { Test, TestingModule } from '@nestjs/testing';
import { TestimonialsController } from './testimonials.controller';
import { TestimonialsService } from './testimonials.service';

describe('TestimonialsController', () => {
  let controller: TestimonialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestimonialsService],
      controllers: [TestimonialsController],
    }).compile();

    controller = module.get<TestimonialsController>(TestimonialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should return an array of testimonials', async () => {
    const testimonials = await controller.getTestimonials();
    expect(testimonials).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          picture: expect.any(String),
          comment: expect.any(String),
        }),
      ])
    );
  });
});
