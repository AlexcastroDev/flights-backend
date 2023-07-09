import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private appService: PrismaService) {}
  async findOne(email: string) {
    return await this.appService.users.findUnique({
      where: {
        email,
      },
    });
  }
}
