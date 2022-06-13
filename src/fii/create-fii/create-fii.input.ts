import { Field, InputType } from '@nestjs/graphql';
import { User } from 'src/database/models/user.model';
import { FII } from '../../database/models/fii.model';

@InputType()
export default class CreateFIIInput {
  @Field(() => String)
  acronym: FII['acronym'];

  @Field(() => Number)
  amount: FII['amount'];

  user: User['id'];
}
