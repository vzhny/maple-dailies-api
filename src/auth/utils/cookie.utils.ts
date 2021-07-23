import { Response } from 'express';
import { AuthConstants } from 'src/constants/auth/auth.constants';
import { JwtToken } from '../models/auth.interface';

export const setJwtInCookie = (res: Response, jwtToken: JwtToken) => {
  res.cookie(AuthConstants.JWT_TOKEN_KEY, jwtToken, {
    httpOnly: true,
    domain: AuthConstants.CORS_DOMAIN,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
  });

  return res;
};
