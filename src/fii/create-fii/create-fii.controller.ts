import CreateFIIInput from './create-fii.input';
import CreateFIIService from './create-fii.service';
import { JwtAuthGuard } from '../../auth/shared/jwt-auth.guard';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';

@Controller('fii')
export default class CreateFIIController {
  constructor(private service: CreateFIIService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createFii(
    @Body() createFii: CreateFIIInput,
  ): ReturnType<CreateFIIService['create']> {
    return this.service.create(createFii);
  }
}
