import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';

const users: Array<User> = [
  {
    id: 1,
    name: 'Lucas',
    email: 'lucas@mail.com',
    age: 27,
  },
  {
    id: 2,
    name: 'Alex',
    email: 'alex@mail.com',
  },
  {
    id: 3,
    name: 'Souza',
    email: 'souza@mail.com',
    age: 67,
  },
];

@Injectable()
export class UsersService {
  getUser(id: number): User | undefined {
    return users.find((user) => user.id === id);
  }

  listUsers(limit: number) {
    return users.slice(0, limit);
  }
}
