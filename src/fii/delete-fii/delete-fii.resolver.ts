import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { FII } from '../../database/models/fii.model';
import DeleteFIIService from './delete-fii.service';

@Resolver(() => FII)
export default class DeleteFIIResolver {
  constructor(private service: DeleteFIIService) {}

  @Mutation(() => Boolean)
  async deleteFii(
    @Args('id', { type: () => ID }) id: FII['id'],
  ): ReturnType<DeleteFIIService['delete']> {
    return this.service.delete(id);
  }
}
