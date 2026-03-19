import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { nullable: true })
  getUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.getUser(id);
  }

  @Query(() => [User])
  listUsers(@Args('limit', { type: () => Int }) limit: number) {
    return this.usersService.listUsers(limit);
  }
}
