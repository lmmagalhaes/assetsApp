import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FII } from 'src/database/models/fii.model';
import { Repository } from 'typeorm';

@Injectable()
export default class DeleteFIIService {
  constructor(
    @InjectRepository(FII)
    private repository: Repository<FII>,
  ) {}

  async delete(id: FII['id']): Promise<true> {
    const fii = await this.repository.findOneOrFail(id);
    await this.repository.remove(fii);
    return true;
  }
}
