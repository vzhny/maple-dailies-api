import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { configService } from './config/config.service';
import { RemoveAuditInfoInterceptor } from './interceptors/remove-audit-info.interceptor';
import { LookupsModule } from './components/lookups/lookups.module';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()), AuthModule, LookupsModule],
  controllers: [],
  providers: [{ provide: APP_INTERCEPTOR, useClass: RemoveAuditInfoInterceptor }],
})
export class AppModule {}
