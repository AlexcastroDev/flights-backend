import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PasswordManager } from '@flights/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private appService: PrismaService,
    private jwtService: JwtService
  ) {}
  async findOne(email: string) {
    return await this.appService.users.findUnique({
      where: {
        email,
      },
    });
  }

  async signIn(email: string, password: string) {
    const user = await this.findOne(email);
    const passwordMatch = new PasswordManager().validatePassword(
      password,
      user?.password,
      user?.salt
    );

    if (!passwordMatch) {
      throw new UnauthorizedException();
    }
    const payload = { email: user.email, sub: user.id, name: user.name, id: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
