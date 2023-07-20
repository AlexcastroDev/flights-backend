import api from '../api.mjs';
import { faker } from '@faker-js/faker';
import test from 'node:test';
import assert from 'node:assert';
import Auth from '../fixtures/auth.fixtures.mjs';
import AssertObject from '../utils/assert-object.mjs';

const authentication = new Auth();

test('Should delete a testimonial', async () => {
  await authentication.login();

  const { data } = await api.post(
    '/api/testimonials',
    {
      user_id: 1,
      comment: faker.lorem.sentence().substring(0, 150),
    },
    {
      headers: {
        Authorization: `Bearer ${authentication.access_token}`,
      },
    }
  );

  assert.strictEqual(typeof data.id, 'number');

  const response = await api.delete(`/api/testimonials/${data.id}`, {
    headers: {
      Authorization: `Bearer ${authentication.access_token}`,
    },
  });

  assert.doesNotThrow(() =>
    AssertObject(response.data, {
      count: Number,
    })
  );
});
