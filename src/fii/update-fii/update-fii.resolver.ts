import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FII } from 'src/database/models/fii.model';
import UpdateFIIInput from './update-fii.input';
import UpdateFIIService from './update-fii.service';

@Resolver(() => FII)
export default class UpdateFIIResolver {
  constructor(private service: UpdateFIIService) {}

  @Mutation(() => FII)
  async updateFii(
    @Args('input') input: UpdateFIIInput,
  ): ReturnType<UpdateFIIService['update']> {
    return this.service.update(input);
  }
}
