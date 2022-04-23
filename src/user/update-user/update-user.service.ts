import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/models/user.model';
import { Repository } from 'typeorm';
import UpdateUserInput from './update-user.input';

@Injectable()
export default class UpdateUserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async update(input: UpdateUserInput): Promise<User> {
    const user = await this.repository.findOneOrFail(input.id);
    const userToUpdate = Object.assign(user, input);
    const userSaved = this.repository.save(userToUpdate);
    return userSaved;
  }
}
