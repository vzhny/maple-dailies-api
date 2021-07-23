import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { isEmpty, omit } from 'lodash';
import { AuthConstants } from 'src/constants/auth/auth.constants';
import { UserDb } from '../entities/user.entity';
import { AuthService } from '../service/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: (request: Request) => {
        if (isEmpty(request?.cookies)) {
          return null;
        } else {
          return request.cookies[AuthConstants.JWT_TOKEN_KEY].accessToken;
        }
      },
      ignoreExpiration: false,
      secretOrKey: AuthConstants.JWT_SECRET,
    });
  }

  async validate(payload: Partial<UserDb>): Promise<Partial<UserDb>> {
    const user = await this.authService.getUserByUserId(payload.userId);

    return omit(user, ['password']) as Partial<UserDb>;
  }
}
