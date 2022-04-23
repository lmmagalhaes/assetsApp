import { Controller, Get } from '@nestjs/common';
import { ScrapingService } from './scraping.service';

@Controller('scraping')
export class ScrapingController {
  constructor(private scrapingService: ScrapingService) {}

  @Get()
  async scrapping() {
    return this.scrapingService.getScrapping();
  }
}
