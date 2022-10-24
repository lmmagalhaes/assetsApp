import { Field, InputType } from '@nestjs/graphql';
import { User } from '../../database/models/user.model';

@InputType()
export default class ListFiiByUserInput {
  @Field(() => String)
  id: User['id'];
}
