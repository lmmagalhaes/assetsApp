import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FII } from '../../database/models/fii.model';
import { Repository } from 'typeorm';
import CreateFIIInput from './create-fii.input';

@Injectable()
export default class CreateFIIService {
  constructor(
    @InjectRepository(FII)
    private repository: Repository<FII>,
  ) {}

  async create(input: CreateFIIInput): Promise<FII> {
    const fiiToCreate = this.repository.create(input);
    const fiiSaved = this.repository.save(fiiToCreate);
    return fiiSaved;
  }
}
