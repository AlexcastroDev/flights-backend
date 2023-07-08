import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'Alex',
      password: '$2b$10$H75JB2Q/Y2sKfEvCBWULK.O/loX41gJuXeYDxu/FZJrQMlAJzDRo.',
    },
    {
      userId: 2,
      username: 'Jane Doe',
      password: 'aaaaaaaa',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
