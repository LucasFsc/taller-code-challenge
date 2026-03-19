import { Injectable } from '@nestjs/common';
import usersMockData from '../data/users-mock.data';
import { IUserSchema } from '../schemas/user.schema';

@Injectable()
export class UsersRepository {
  InMemoryData: IUserSchema[] = usersMockData;

  findUserById(userId: number): IUserSchema | undefined {
    return this.InMemoryData.find((user) => user.id === userId);
  }

  findUsers(limit: number): IUserSchema[] {
    return this.InMemoryData.slice(0, limit);
  }
}
