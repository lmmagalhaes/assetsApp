import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FII } from '../database/models/fii.model';
import CreateFIIResolver from './create-fii/create-fii.resolver';
import CreateFIIService from './create-fii/create-fii.service';
import DeleteFIIResolver from './delete-fii/delete-fii.resolver';
import DeleteFIIService from './delete-fii/delete-fii.service';
import ListFIIsResolver from './list-fii/list-fii.resolver';
import ListFIIsService from './list-fii/list-fii.service';
import UpdateFIIResolver from './update-fii/update-fii.resolver';
import UpdateFIIService from './update-fii/update-fii.service';

@Module({
  imports: [TypeOrmModule.forFeature([FII])],
  providers: [
    CreateFIIService,
    CreateFIIResolver,
    DeleteFIIService,
    DeleteFIIResolver,
    ListFIIsService,
    ListFIIsResolver,
    UpdateFIIService,
    UpdateFIIResolver,
  ],
})
export default class FiiModule {}
