import { Test, TestingModule } from '@nestjs/testing';
import { TestimonialsService } from './testimonials.service';
import { PrismaService } from '../prisma/prisma.service';

describe('TestimonialsService', () => {
  let service: TestimonialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestimonialsService, PrismaService],
    }).compile();

    service = module.get<TestimonialsService>(TestimonialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('Should create a new testimonial', async () => {
    const testimonial = await service.create({
      comment: 'test',
      user_id: 1,
    });
    expect(testimonial).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        comment: expect.any(String),
        created_at: expect.any(Date),
        updated_at: expect.any(Date),
        user_id: expect.any(Number),
      })
    );
  });
  it('Should create a new testimonial', async () => {
    const testimonial = await service.update(1, {
      comment: 'test 2',
      user_id: 1,
    });
    expect(testimonial).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        comment: expect.any(String),
        created_at: expect.any(Date),
        updated_at: expect.any(Date),
        user_id: expect.any(Number),
      })
    );
  });
  it('should return an array of testimonials', async () => {
    const testimonials = await service.getAll();
    expect(testimonials).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          comment: expect.any(String),
          created_at: expect.any(Date),
          updated_at: expect.any(Date),
          user_id: expect.any(Number),
        }),
      ])
    );
  });
  it('should delete a testimonial', async () => {
    const testimonials = await service.delete(1);
    console.log(
      '🚀 ~ file: testimonials.service.spec.ts:65 ~ it ~ testimonials:',
      testimonials
    );
    expect(testimonials).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          comment: expect.any(String),
          created_at: expect.any(Date),
          updated_at: expect.any(Date),
          user_id: expect.any(Number),
        }),
      ])
    );
  });
});
