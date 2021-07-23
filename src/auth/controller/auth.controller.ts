import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserCredentials } from '../models/auth.interface';
import { AuthService } from '../service/auth.service';
import { setJwtInCookie } from '../utils/cookie.utils';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: UserCredentials, @Res() response: Response) {
    const jwtToken = await this.authService.register(body);

    setJwtInCookie(response, jwtToken).status(200).send();
  }

  @Post('login')
  async login(@Body() body: UserCredentials, @Res() response: Response) {
    const jwtToken = await this.authService.login(body);

    setJwtInCookie(response, jwtToken).status(200).send();
  }
}
