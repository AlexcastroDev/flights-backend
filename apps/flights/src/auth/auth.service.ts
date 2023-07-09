import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { PasswordManager, omit } from '@flights/core';
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(email: string, password: string) {
    const user = await this.usersService.findOne(email);
    const hashedPassword = new PasswordManager().validatePassword(
      password,
      user.password,
      user.salt
    );

    if (!hashedPassword) {
      throw new UnauthorizedException();
    }
    const result = omit(user, ['password', 'salt']);
    return result;
  }
}
