import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { AuthConstants } from './constants/auth/auth.constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: AuthConstants.CORS_DOMAIN,
      credentials: true,
    },
  });

  app.use(cookieParser());

  await app.listen(3000);
}
bootstrap();
