import { IUserSchema } from '../schemas/user.schema';

export default [
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
] as const satisfies IUserSchema[];
