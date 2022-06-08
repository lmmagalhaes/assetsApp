import { Controller, Get, Param } from '@nestjs/common';
import { User } from '../../database/models/user.model';
import GetOneUserService from './get-one-user.service';

@Controller('user')
export default class GetOneUserController {
  constructor(private service: GetOneUserService) {}

  @Get(':id')
  async user(
    @Param('id') id: User['id'],
  ): ReturnType<GetOneUserService['get']> {
    return this.service.get(id);
  }
}
