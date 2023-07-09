import api from '../api';

describe('SignIn', () => {
  it('Should pass a email and password and receive access_token', async () => {
    const request = await api.post('/api/auth/signin', {
      email: 'test@test.com',
      password: '12345678Oi',
    });

    expect(request).resolves.toHaveProperty('data.access_token');
  });
});
