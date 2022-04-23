import { Field, InputType } from '@nestjs/graphql';
import { FII } from 'src/database/models/fii.model';

@InputType()
export default class CreateFIIInput {
  @Field(() => String)
  acronym: FII['acronym'];

  @Field(() => Number)
  amount: FII['amount'];
}
