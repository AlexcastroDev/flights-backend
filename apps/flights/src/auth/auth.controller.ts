import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() data: Record<string, any>) {
    return this.authService.signIn(data.email, data.password);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async me(@Request() req) {
    return req.user;
  }
}
