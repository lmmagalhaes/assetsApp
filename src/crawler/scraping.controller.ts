import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';
import { ScrapingService } from './scraping.service';

@Controller('scraping')
export class ScrapingController {
  constructor(private scrapingService: ScrapingService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async scrapping() {
    return this.scrapingService.getScrapping();
  }
}
