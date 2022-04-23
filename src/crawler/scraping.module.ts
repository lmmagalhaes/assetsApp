import { Module } from '@nestjs/common';
import { ScrapingController } from './scraping.controller';
import { ScrapingService } from './scraping.service';

@Module({
  imports: [],
  controllers: [ScrapingController],
  providers: [ScrapingService],
})
export class ScrapingModule {}
