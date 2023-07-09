import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('Should return an user', async () => {
    const user = await service.findOne('test@test.com');
    expect(user).toBeDefined();
    expect(user).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        email: expect.any(String),
        password: expect.any(String),
        created_at: expect.any(Date),
        updated_at: expect.any(Date),
      })
    );
  });
});
