import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/shared/jwt-auth.guard';
import { FII } from '../../database/models/fii.model';
import DeleteFIIService from './delete-fii.service';

@Controller('fii')
export default class DeleteFIIController {
  constructor(private service: DeleteFIIService) {}

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteFii(
    @Param('id') id: FII['id'],
  ): ReturnType<DeleteFIIService['delete']> {
    return this.service.delete(id);
  }
}
