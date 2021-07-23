import { CacheInterceptor, ClassSerializerInterceptor, Controller, Get, Param, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LookupService } from '../service/lookup.service';

@Controller('lookups')
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class LookupsController {
  constructor(private lookups: LookupService) {}

  @UseInterceptors(CacheInterceptor)
  @Get(':lookupName')
  getLookupByList(@Param('lookupName') lookupName: string) {
    return this.lookups.getList(lookupName);
  }

  @UseInterceptors(CacheInterceptor)
  @Get(':lookupName/:lookupKey')
  getLookupByKey(@Param('lookupName') lookupName: string, @Param('lookupKey') lookupKey: string) {
    return this.lookups.getByKey(lookupName, lookupKey);
  }
}
