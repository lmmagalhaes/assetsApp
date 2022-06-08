import { Module } from '@nestjs/common';
import { User } from '../database/models/user.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import CreateUserService from './create-user/create-user.service';
import GetOneUserService from './get-one-user/get-one-user.service';
import ListUsersService from './list-user/list-user.service';
import UpdateUserService from './update-user/update-user.service';
import GetUserByEmailService from './get-user-by-email/get-user-email.service';
import CreateUserController from './create-user/create-user.controller';
import GetOneUserController from './get-one-user/get-one-user.controller';
import ListUsersController from './list-user/list-user.controller';
import UpdateUserController from './update-user/update-user.controller';
import GetUserByEmailController from './get-user-by-email/get-user-email.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [
    CreateUserController,
    GetOneUserController,
    GetUserByEmailController,
    ListUsersController,
    UpdateUserController,
  ],
  providers: [
    CreateUserService,
    GetOneUserService,
    GetUserByEmailService,
    ListUsersService,
    UpdateUserService,
  ],
})
export class UserModule {}
