import { Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/shared/jwt-auth.guard';
import { FII } from '../../database/models/fii.model';
import ListFIIsService from './list-fii.service';

@Resolver(() => FII)
export default class ListFIIsResolver {
  constructor(private service: ListFIIsService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [FII])
  async listFii(): ReturnType<ListFIIsService['list']> {
    return this.service.list();
  }
}
