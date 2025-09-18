import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to NestJS Backend with JWT Authentication! 🚀\n\nAvailable endpoints:\n- POST /auth/signup - Register new user\n- POST /auth/signin - Login user\n- GET /auth/profile - Get user profile (protected)\n- GET /auth/test - Test protected route\n- GET /health - Health check';
  }
}
