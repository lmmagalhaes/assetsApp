import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/models/user.model';
import { Repository } from 'typeorm';

@Injectable()
export default class GetOneUserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async get(id: User['id']): Promise<User> {
    return this.userRepository.findOne(id);
  }
}
