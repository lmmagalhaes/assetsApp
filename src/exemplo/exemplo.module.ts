import { Module } from '@nestjs/common';
import { ExemploService } from './exemplo.service';
import { ExemploController } from './exemplo.controller';

@Module({
  providers: [ExemploService],
  controllers: [ExemploController],
})
export class ExemploModule {}
