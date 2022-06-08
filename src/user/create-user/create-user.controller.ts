import { Body, Controller, Post } from '@nestjs/common';
import CreateUserInput from './create-user.input';
import CreateUserService from './create-user.service';

@Controller('user')
export default class CreateUserController {
  constructor(private service: CreateUserService) {}

  @Post()
  async createUser(
    @Body() createUser: CreateUserInput,
  ): ReturnType<CreateUserService['create']> {
    return this.service.create(createUser);
  }
}
