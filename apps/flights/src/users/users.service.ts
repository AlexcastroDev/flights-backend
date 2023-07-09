import { PasswordManager } from '@flights/core';
import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

interface User {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  constructor(private appService: PrismaService) {}
  async findOne(email: string): Promise<Users | undefined> {
    return this.appService.users.findUnique({
      where: {
        email,
      },
    });
  }

  async create(user: User): Promise<Users> {
    const { hash, salt } = new PasswordManager().hashPassword(user.password);

    return this.appService.users.create({
      data: {
        name: user.name,
        email: user.email,
        password: hash,
        salt,
      },
    });
  }
}
