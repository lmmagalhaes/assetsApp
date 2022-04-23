import { Module } from '@nestjs/common';
import { User } from '../database/models/user.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import CreateUserService from './create-user/create-user.service';
import CreateUserResolver from './create-user/create-user.resolver';
import GetOneUserService from './get-one-user/get-one-user.service';
import GetOneUserResolver from './get-one-user/get-one-user.resolver';
import ListUsersService from './list-user/list-user.service';
import ListUsersResolver from './list-user/list-user.resolver';
import UpdateUserService from './update-user/update-user.service';
import UpdateUserResolver from './update-user/update-user.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    CreateUserService,
    CreateUserResolver,
    GetOneUserService,
    GetOneUserResolver,
    ListUsersService,
    ListUsersResolver,
    UpdateUserService,
    UpdateUserResolver,
  ],
})
export class UserModule {}
