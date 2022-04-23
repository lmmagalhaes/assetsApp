import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../../database/models/user.model';
import ListUsersService from './list-user.service';

@Resolver(() => User)
export default class ListUsersResolver {
  constructor(private service: ListUsersService) {}

  @Query(() => [User])
  async users(): ReturnType<ListUsersService['list']> {
    return this.service.list();
  }
}
