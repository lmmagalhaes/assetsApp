import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FII } from '../../database/models/fii.model';
import { Repository } from 'typeorm';
import { ScrapingService } from 'src/crawler/scraping.service';

@Injectable()
// TODO: Colocar o objeto do crawler junto com os dados do FII neste serviço
// TODO: Mudar o tempo de expiração do Token
// TODO: Colocar o bcrypt
// TODO: Vincular o FII ao User na criação.
export default class ListFIIsByUserService {
  constructor(
    @InjectRepository(FII)
    private fiiRepository: Repository<FII>,
    private scrapingService: ScrapingService,
  ) {}

  async list(userIdId: string): Promise<FII[]> {
    const dataScraping = await this.scrapingService.getScrapping();
    const fiiOnDatabase = await this.fiiRepository.find({
      where: {
        userIdId,
      },
    });
    const variavelzerada = [];

    for (let index = 0; index < dataScraping.length; index++) {
      for (let indexDoBD = 0; indexDoBD < fiiOnDatabase.length; indexDoBD++) {
        if (dataScraping[index].name === fiiOnDatabase[indexDoBD].acronym) {
          const fiiFinalResult = {
            name: fiiOnDatabase[indexDoBD].acronym,
            value: dataScraping[index].value,
            percent: dataScraping[index].value_percent,
            paymentDate: dataScraping[index].date_payment,
            amount: fiiOnDatabase[indexDoBD].amount,
          };
          variavelzerada.push(fiiFinalResult);
        }
      }
    }
    return variavelzerada;
  }
}
