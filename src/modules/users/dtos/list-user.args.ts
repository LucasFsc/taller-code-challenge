import { ArgsType, Field } from '@nestjs/graphql';
import { IsInt, IsPositive } from 'class-validator';

@ArgsType()
export class ListUserArgs {
  @IsInt()
  @IsPositive()
  @Field(() => Number, { description: 'The maximum number of users to return' })
  limit: number;
}
