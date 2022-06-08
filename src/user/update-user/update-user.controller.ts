import { Body, Controller, Put } from '@nestjs/common';
import UpdateUserInput from './update-user.input';
import UpdateUserService from './update-user.service';

@Controller('user')
export default class UpdateUserController {
  constructor(private service: UpdateUserService) {}

  @Put()
  async updateUser(
    @Body() input: UpdateUserInput,
  ): ReturnType<UpdateUserService['update']> {
    return this.service.update(input);
  }
}
