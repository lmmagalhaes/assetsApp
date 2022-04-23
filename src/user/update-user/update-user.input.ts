import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { User } from '../../database/models/user.model';
import CreateUserInput from '../create-user/create-user.input';

@InputType()
export default class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => ID)
  id: User['id'];
}
