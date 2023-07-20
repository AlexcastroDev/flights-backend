import api from '../api.mjs';

class Auth {
  access_token;
  email;
  password;
  constructor(email = 'test@test.com', password = '12345678Oi') {
    this.email = email;
    this.password = password;
  }

  async login() {
    const result = await api.post('/api/auth/login', {
      email: this.email,
      password: this.password,
    });

    this.access_token = result.data.access_token;
  }
}

export default Auth;
