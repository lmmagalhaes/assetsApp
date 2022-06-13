import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FII } from '../../database/models/fii.model';
import { Repository } from 'typeorm';
import CreateFIIInput from './create-fii.input';
import { User } from 'src/database/models/user.model';

@Injectable()
export default class CreateFIIService {
  constructor(
    @InjectRepository(FII)
    private repository: Repository<FII>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(input: CreateFIIInput): Promise<FII> {
    const user = await this.userRepository.findOne(input.user);
    const inputToCreate = {
      user,
      amount: input.amount,
      acronym: input.acronym,
    };
    const fiiToCreate = this.repository.create(inputToCreate);
    const fiiSaved = this.repository.save(fiiToCreate);
    return fiiSaved;
  }
}
