import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/models/user.model';
import { Repository } from 'typeorm';

@Injectable()
export default class GetUserByEmailService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getByEmail(email: User['email']): Promise<User> {
    return this.userRepository.findOne({ email });
  }
}
