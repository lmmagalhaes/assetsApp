import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from '../../database/models/user.model';
import GetUserByEmailInput from './get-user-by-email.input';
import GetUserByEmailService from './get-user-email.service';

@Resolver(() => User)
export default class GetUserByEmailResolver {
  constructor(private service: GetUserByEmailService) {}

  @Query(() => User)
  async user(
    @Args('input') input: GetUserByEmailInput,
  ): ReturnType<GetUserByEmailService['getByEmail']> {
    return this.service.getByEmail(input.email);
  }
}
