import { Test, TestingModule } from '@nestjs/testing';
import { UsersRepository } from '../database/repositories/users.repository';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let usersRepository: {
    findUserById: jest.Mock;
    findUsers: jest.Mock;
  };

  beforeEach(async () => {
    usersRepository = {
      findUserById: jest.fn(),
      findUsers: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersRepository,
          useValue: usersRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getUser', () => {
    it('should return an existing user and call repository with id', () => {
      const expectedUser = {
        id: 1,
        name: 'Lucas',
        email: 'lucas@mail.com',
        age: 27,
      };

      usersRepository.findUserById.mockReturnValue(expectedUser);

      const result = service.getUser(1);

      expect(usersRepository.findUserById).toHaveBeenCalledTimes(1);
      expect(usersRepository.findUserById).toHaveBeenCalledWith(1);
      expect(result).toEqual(expectedUser);
    });

    it('should return undefined for a not existing user and call repository with id', () => {
      usersRepository.findUserById.mockReturnValue(undefined);

      const result = service.getUser(99);

      expect(usersRepository.findUserById).toHaveBeenCalledTimes(1);
      expect(usersRepository.findUserById).toHaveBeenCalledWith(99);
      expect(result).toEqual(undefined);
    });
  });

  describe('listUsers', () => {
    it('should return a list of users and call repository with limit', () => {
      const expectedUsers = [
        {
          id: 1,
          name: 'Lucas',
          email: 'lucas@mail.com',
          age: 27,
        },
        {
          id: 2,
          name: 'Ana',
          email: 'ana@mail.com',
          age: 22,
        },
        {
          id: 3,
          name: 'Maria',
          email: 'maria@mail.com',
          age: 30,
        },
      ];

      usersRepository.findUsers.mockReturnValue(expectedUsers);

      const result = service.listUsers(3);

      expect(usersRepository.findUsers).toHaveBeenCalledTimes(1);
      expect(usersRepository.findUsers).toHaveBeenCalledWith(3);
      expect(result).toEqual(expectedUsers);
    });

    it('should return an empty list of users and call repository with limit 0', () => {
      usersRepository.findUsers.mockReturnValue([]);

      const result = service.listUsers(0);

      expect(usersRepository.findUsers).toHaveBeenCalledTimes(1);
      expect(usersRepository.findUsers).toHaveBeenCalledWith(0);
      expect(result).toEqual([]);
    });
  });
});
