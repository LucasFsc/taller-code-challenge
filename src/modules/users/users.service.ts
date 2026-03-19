import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../database/repositories/users.repository';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  getUser(id: number): User | undefined {
    return this.usersRepository.findUserById(id);
  }

  listUsers(limit: number): User[] {
    return this.usersRepository.findUsers(limit);
  }
}
