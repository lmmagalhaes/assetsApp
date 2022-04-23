import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/models/user.model';
import { Repository } from 'typeorm';

@Injectable()
export default class ListUsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async list(): Promise<User[]> {
    return this.userRepository.find();
  }
}
