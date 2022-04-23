import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/models/user.model';
import { Repository } from 'typeorm';
import CreateUserInput from './create-user.input';

@Injectable()
export default class CreateUserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async create(input: CreateUserInput): Promise<User> {
    const userToCreate = this.repository.create(input);
    const userSaved = this.repository.save(userToCreate);
    return userSaved;
  }
}
