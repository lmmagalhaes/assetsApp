import { Controller, Get, Param } from '@nestjs/common';
import GetUserByEmailInput from './get-user-by-email.input';
import GetUserByEmailService from './get-user-email.service';

@Controller('user')
export default class GetUserByEmailController {
  constructor(private service: GetUserByEmailService) {}

  @Get(':email')
  async user(
    @Param('input') input: GetUserByEmailInput,
  ): ReturnType<GetUserByEmailService['getByEmail']> {
    return this.service.getByEmail(input.email);
  }
}
