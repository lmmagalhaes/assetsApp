import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import GetUserByEmailService from '../../user/get-user-by-email/get-user-email.service';

@Injectable()
export class AuthService {
  constructor(
    private getUserByEmailService: GetUserByEmailService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.getUserByEmailService.getByEmail(email);
    if (user && user.password === password) {
      const { id, name, email } = user;
      return { id, name, email };
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
