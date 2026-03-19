import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getUser', () => {
    it('should return a existing user', () => {
      const result = service.getUser(1);

      expect(result).toEqual({
        id: 1,
        name: 'Lucas',
        email: 'lucas@mail.com',
        age: 27,
      });
    });

    it('should return undefined for a not existing user', () => {
      const result = service.getUser(99);

      expect(result).toEqual(undefined);
    });
  });

  describe('listUsers', () => {
    it('should return a list user', () => {
      const result = service.listUsers(3);

      expect(result.length).toEqual(3);
    });

    it('should return an empty list of user', () => {
      const result = service.listUsers(0);

      expect(result).toEqual([]);
    });
  });
});
