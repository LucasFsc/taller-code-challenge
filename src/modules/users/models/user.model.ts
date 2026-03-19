import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => Int, { nullable: true })
  age?: number;
}

// id: ID!
// name: String!
// email: String!
// age: Int
