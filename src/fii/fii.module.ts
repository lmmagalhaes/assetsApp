import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FII } from '../database/models/fii.model';
import CreateFIIController from './create-fii/create-fii.controller';
import CreateFIIService from './create-fii/create-fii.service';
import DeleteFIIController from './delete-fii/delete-fii.controller';
import DeleteFIIService from './delete-fii/delete-fii.service';
import ListFIIsController from './list-fii/list-fii.controller';
import ListFIIsService from './list-fii/list-fii.service';
import UpdateFIIController from './update-fii/update-fii.controller';
import UpdateFIIService from './update-fii/update-fii.service';

@Module({
  imports: [TypeOrmModule.forFeature([FII])],
  controllers: [
    CreateFIIController,
    DeleteFIIController,
    ListFIIsController,
    UpdateFIIController,
  ],
  providers: [
    CreateFIIService,
    DeleteFIIService,
    ListFIIsService,
    UpdateFIIService,
  ],
})
export default class FiiModule {}
