import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { FII } from 'src/database/models/fii.model';
import CreateFIIInput from '../create-fii/create-fii.input';

@InputType()
export default class UpdateFIIInput extends PartialType(CreateFIIInput) {
  @Field(() => ID)
  id: FII['id'];
}
