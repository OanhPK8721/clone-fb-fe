import  BaseService from './base';
export class AuthenticateService extends BaseService {
  async login(username, password) {
    try {
      const response = await this.api.post('/auth/login', {
        email: username,
        password,
      });
      return response;
    } catch (error) {
      console.error('An error occurred during login:', error);
      throw error;
    }
  }

  async register ({
    name,
    email,
    password
  }) {
    try {
      const response = await this.api.post('/auth/register', {
        name,
        email,
        password
      });
      return response;
    } catch (error) {
      console.error('An error occurred during registration:', error);
      throw error;
    }
  }
}
