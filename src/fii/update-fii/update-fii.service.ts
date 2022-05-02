import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FII } from '../../database/models/fii.model';
import { Repository } from 'typeorm';
import UpdateFIIInput from './update-fii.input';

@Injectable()
export default class UpdateFIIService {
  constructor(
    @InjectRepository(FII)
    private repository: Repository<FII>,
  ) {}

  async update(input: UpdateFIIInput): Promise<FII> {
    const fii = await this.repository.findOneOrFail(input.id);
    const fiiToUpdate = Object.assign<FII, UpdateFIIInput>(fii, input);
    const fiiSaved = this.repository.save(fiiToUpdate);
    return fiiSaved;
  }
}
