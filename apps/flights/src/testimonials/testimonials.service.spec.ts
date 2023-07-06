import { Test, TestingModule } from '@nestjs/testing';
import { TestimonialsService } from './testimonials.service';

describe('TestimonialsService', () => {
  let service: TestimonialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestimonialsService],
    }).compile();

    service = module.get<TestimonialsService>(TestimonialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return an array of testimonials', () => {
    const testimonials = service.getAll();
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
