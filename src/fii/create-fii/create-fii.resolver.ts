import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FII } from '../../database/models/fii.model';
import CreateFIIInput from './create-fii.input';
import CreateFIIService from './create-fii.service';
import { JwtAuthGuard } from '../../auth/shared/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => FII)
export default class CreateFIIResolver {
  constructor(private service: CreateFIIService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => FII)
  async createFii(
    @Args('input', { type: () => CreateFIIInput }) input: CreateFIIInput,
  ): ReturnType<CreateFIIService['create']> {
    return this.service.create(input);
  }
}
