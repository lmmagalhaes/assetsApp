import { Field, InputType } from '@nestjs/graphql';
import { User } from '../../database/models/user.model';

@InputType()
export default class CreateUserInput {
  @Field(() => String)
  name: User['name'];

  @Field(() => String)
  email: User['email'];
}
