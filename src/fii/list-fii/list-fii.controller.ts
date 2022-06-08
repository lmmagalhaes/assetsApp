import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/shared/jwt-auth.guard';
import ListFIIsService from './list-fii.service';

@Controller('fii')
export default class ListFIIsController {
  constructor(private service: ListFIIsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async listFii(): ReturnType<ListFIIsService['list']> {
    return this.service.list();
  }
}
