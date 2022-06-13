import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class ScrapingService {
  async getScrapping() {
    const URL = 'https://www.fundsexplorer.com.br/rendimentos-e-amortizacoes';
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(URL, {
      waitUntil: 'networkidle2',
    });

    await page.setDefaultNavigationTimeout(0);
    // textContent is equal to innerText

    return await page.evaluate(() => {
      const result = [];
      document.querySelectorAll('.odd').forEach((element) => {
        const data = {
          name: element.querySelector('td').innerText,
          value: element.querySelector('td:nth-child(3)').textContent,
          value_percent: element.querySelector('td:nth-child(4)').textContent,
          date_payment: element.querySelector('td:nth-child(10)').textContent,
        };
        result.push(data);
      });
      console.log('element', result);
      return result;
    });
  }
}
