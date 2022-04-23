import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FII } from 'src/database/models/fii.model';
import CreateFIIInput from './create-fii.input';
import CreateFIIService from './create-fii.service';

@Resolver(() => FII)
export default class CreateFIIResolver {
  constructor(private service: CreateFIIService) {}

  @Mutation(() => FII)
  async createFii(
    @Args('input', { type: () => CreateFIIInput }) input: CreateFIIInput,
  ): ReturnType<CreateFIIService['create']> {
    return this.service.create(input);
  }
}
