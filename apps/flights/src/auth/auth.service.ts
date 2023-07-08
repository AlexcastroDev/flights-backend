import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(username: string, password: string) {
    const user = await this.usersService.findOne(username);
    // node -p "const bcrypt = require('bcrypt'); ;(async () => {console.log(await bcrypt.hash('12345678Oi', 10))})()"
    // $2b$10$H75JB2Q/Y2sKfEvCBWULK.O/loX41gJuXeYDxu/FZJrQMlAJzDRo.
    const hashedPassword = await compare(password, user.password);
    if (!hashedPassword) {
      throw new UnauthorizedException();
    }
    const { password: _, ...result } = user;
    return result;
  }
}
