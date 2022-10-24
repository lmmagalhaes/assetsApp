import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FII } from '../../database/models/fii.model';
import { Repository } from 'typeorm';

@Injectable()
export default class ListFIIsByUserService {
  constructor(
    @InjectRepository(FII)
    private fiiRepository: Repository<FII>,
  ) {}

  async list(userId: string): Promise<FII[]> {
    return this.fiiRepository.find({
      where: {
        userId,
      },
    });
  }
}
