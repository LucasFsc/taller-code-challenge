import { Args, Query, Resolver } from '@nestjs/graphql';
import { GetUserArgs } from './dtos/get-user.args';
import { ListUserArgs } from './dtos/list-user.args';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { nullable: true })
  getUser(@Args() getUserArgs: GetUserArgs) {
    return this.usersService.getUser(getUserArgs.id);
  }

  @Query(() => [User])
  listUsers(@Args() listUsersArgs: ListUserArgs) {
    return this.usersService.listUsers(listUsersArgs.limit);
  }
}
