import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../../database/models/user.model';
import CreateUserInput from './create-user.input';
import CreateUserService from './create-user.service';

@Resolver(() => User)
export default class CreateUserResolver {
  constructor(private service: CreateUserService) {}

  @Mutation(() => User)
  async createUser(
    @Args('input', { type: () => CreateUserInput }) input: CreateUserInput,
  ): ReturnType<CreateUserService['create']> {
    return this.service.create(input);
  }
}
