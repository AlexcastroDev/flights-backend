import api from '../api';

describe('SignIn', () => {
  it('Should pass a email and password and receive access_token', async () => {
    const { data } = await api.post('/api/auth/login', {
      email: 'test@test.com',
      password: '12345678Oi',
    });
    console.log('🚀 ~ file: signin-e2e.spec.ts:9 ~ it ~ data:', data);

    expect(data).toEqual(
      expect.objectContaining({
        access_token: expect.any(String),
      })
    );
  });
  it('Should get user data by Authorization Bearer', async () => {
    const request = await api.post('/api/auth/login', {
      email: 'test@test.com',
      password: '12345678Oi',
    });
    const { access_token } = request.data;

    const user = await api.get('/api/auth/me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    expect(user.data.email).toBe('test@test.com');
  });
});
