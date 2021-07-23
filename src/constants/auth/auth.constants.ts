// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export const AuthConstants = {
  JWT_TOKEN_KEY: 'jwt_token',
  JWT_SECRET: process.env.JWT_SECRET,
  CORS_DOMAIN: process.env.CORS_DOMAIN,
};

export const UserConstants = {
  SYSTEM_USER: 'SYSTEM',
};
