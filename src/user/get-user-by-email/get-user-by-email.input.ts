import { Field, InputType } from '@nestjs/graphql';
import { User } from '../../database/models/user.model';

@InputType()
export default class GetUserByEmailInput {
  @Field(() => String)
  email: User['email'];

  @Field(() => String)
  password: User['password'];
}
