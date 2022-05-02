import { Query, Resolver } from '@nestjs/graphql';
import { FII } from '../../database/models/fii.model';
import ListFIIsService from './list-fii.service';

@Resolver(() => FII)
export default class ListFIIsResolver {
  constructor(private service: ListFIIsService) {}

  @Query(() => [FII])
  async listFii(): ReturnType<ListFIIsService['list']> {
    return this.service.list();
  }
}
