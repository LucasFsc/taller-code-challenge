import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IUserSchema } from 'src/modules/database/schemas/user.schema';

@ObjectType()
export class User implements IUserSchema {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => Int, { nullable: true })
  age?: number;
}
