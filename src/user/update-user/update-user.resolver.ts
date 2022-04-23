import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../../database/models/user.model';
import UpdateUserInput from './update-user.input';
import UpdateUserService from './update-user.service';

@Resolver(() => User)
export default class UpdateUserResolver {
  constructor(private service: UpdateUserService) {}

  @Mutation(() => User)
  async updateUser(
    @Args('input') input: UpdateUserInput,
  ): ReturnType<UpdateUserService['update']> {
    return this.service.update(input);
  }
}
