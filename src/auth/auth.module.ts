import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../database/models/user.model';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './shared/auth.service';
import { LocalStrategy } from './shared/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './shared/constants';
import { JwtStrategy } from './shared/jwt.strategy';
import GetUserByEmailService from '../user/get-user-by-email/get-user-email.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10 days' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, GetUserByEmailService, JwtStrategy],
})
export class AuthModule {}
