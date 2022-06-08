import { Controller, Get } from '@nestjs/common';
import ListUsersService from './list-user.service';

@Controller('user')
export default class ListUsersController {
  constructor(private service: ListUsersService) {}

  @Get()
  async users(): ReturnType<ListUsersService['list']> {
    return this.service.list();
  }
}
