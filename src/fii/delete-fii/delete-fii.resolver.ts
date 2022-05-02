import { UseGuards } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from '../../auth/shared/jwt-auth.guard';
import { FII } from '../../database/models/fii.model';
import DeleteFIIService from './delete-fii.service';

@Resolver(() => FII)
export default class DeleteFIIResolver {
  constructor(private service: DeleteFIIService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteFii(
    @Args('id', { type: () => ID }) id: FII['id'],
  ): ReturnType<DeleteFIIService['delete']> {
    return this.service.delete(id);
  }
}
