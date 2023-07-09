import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  async signIn(@Body() data: Record<string, any>) {
    return await this.authService.signIn(data.email, data.password);
  }
}
