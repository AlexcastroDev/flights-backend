import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private appService: PrismaService) {}
  findOne(email: string) {
    return this.appService.users.findUnique({
      where: {
        email,
      },
    });
  }
}
