import api from '../api.mjs';
import { faker } from '@faker-js/faker';
import test from 'node:test';
import assert from 'node:assert';
import Auth from '../fixtures/auth.fixtures.mjs';
import AssertObject from '../utils/assert-object.mjs';

const authentication = new Auth();

test('Should update a testimonial', async () => {
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

  const response = await api.put(
    `/api/testimonials/${data.id}`,
    {
      comment: faker.lorem.sentence().substring(0, 150),
    },
    {
      headers: {
        Authorization: `Bearer ${authentication.access_token}`,
      },
    }
  );

  assert.doesNotThrow(() =>
    AssertObject(response.data, {
      id: Number,
      comment: String,
      created_at: String,
      updated_at: String,
      user_id: Number,
    })
  );
});
