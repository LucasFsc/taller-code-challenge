import { ArgsType, Field } from '@nestjs/graphql';
import { IsInt, IsPositive } from 'class-validator';

@ArgsType()
export class GetUserArgs {
  @IsInt()
  @IsPositive()
  @Field(() => Number, { description: 'The unique identifier of the user' })
  id: number;
}
