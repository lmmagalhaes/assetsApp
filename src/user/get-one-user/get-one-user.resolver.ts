import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { User } from '../../database/models/user.model';
import GetOneUserService from './get-one-user.service';

@Resolver(() => User)
export default class GetOneUserResolver {
  constructor(private service: GetOneUserService) {}

  @Query(() => User)
  async user(
    @Args('id', { type: () => ID }) id: User['id'],
  ): ReturnType<GetOneUserService['get']> {
    return this.service.get(id);
  }
}
