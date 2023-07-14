import api from '../api';
import { faker } from '@faker-js/faker';

describe('Create testemonials', () => {
  it('Should create a testimonial', async () => {
    const result = await api.post('/api/auth/login', {
      email: 'test@test.com',
      password: '12345678Oi',
    });

    const { data } = await api.post(
      '/api/testimonials',
      {
        user_id: 1,
        comment: faker.lorem.sentence().substring(0, 150),
      },
      {
        headers: {
          Authorization: `Bearer ${result.data.access_token}`,
        },
      }
    );

    expect(data).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        comment: expect.any(String),
        created_at: expect.any(String),
        updated_at: expect.any(String),
        user_id: expect.any(Number),
      })
    );
  });
});
