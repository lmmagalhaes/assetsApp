import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FII } from 'src/database/models/fii.model';
import { Repository } from 'typeorm';

@Injectable()
export default class ListFIIsService {
  constructor(
    @InjectRepository(FII)
    private tagsRepository: Repository<FII>,
  ) {}

  async list(): Promise<FII[]> {
    return this.tagsRepository.find();
  }
}
