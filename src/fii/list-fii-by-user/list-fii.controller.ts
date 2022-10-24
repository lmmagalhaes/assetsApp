import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/shared/jwt-auth.guard';
import ListFIIsByUserService from './list-fii.service';

@Controller('fii')
export default class ListFIIsByUserController {
  constructor(private service: ListFIIsByUserService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async listFiiByUser(
    @Param('id') userId: string,
  ): ReturnType<ListFIIsByUserService['list']> {
    return this.service.list(userId);
  }
}
