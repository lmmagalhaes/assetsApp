import { Body, Controller, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/shared/jwt-auth.guard';
import UpdateFIIInput from './update-fii.input';
import UpdateFIIService from './update-fii.service';

@Controller('fii')
export default class UpdateFIIController {
  constructor(private service: UpdateFIIService) {}

  @UseGuards(JwtAuthGuard)
  @Put()
  async updateFii(
    @Body() input: UpdateFIIInput,
  ): ReturnType<UpdateFIIService['update']> {
    return this.service.update(input);
  }
}
