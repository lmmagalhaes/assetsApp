import { Controller, Get, Param } from '@nestjs/common';
import { User } from '../../database/models/user.model';
import GetOneUserService from './get-one-user.service';

@Controller('user')
export default class GetOneUserController {
  constructor(private service: GetOneUserService) {}

  @Get(':email')
  async user(
    @Param('email') email: User['email'],
  ): ReturnType<GetOneUserService['get']> {
    return this.service.get(email);
  }
}
