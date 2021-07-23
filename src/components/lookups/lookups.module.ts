import { LookupsController } from './controller/lookups.controller';
import { CacheModule, Module } from '@nestjs/common';
import { LookupService } from './service/lookup.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArcaneRiverAreaLkDb } from './entities/arcane-river/arcane-river-area-lks.entity';
import { BossDifficultyLkDb } from './entities/bosses/boss-difficulty-lk.entity';
import { BossFrequencyLkDb } from './entities/bosses/boss-frequency-lk.entity';
import { BossLkDb } from './entities/bosses/boss-lk.entity';
import { CharacterClassLkDb } from './entities/characters/character-class-lk.entity';
import { CharacterFactionLkDb } from './entities/characters/character-faction-lk.entity';
import { AppContants } from 'src/constants/app.contants';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ArcaneRiverAreaLkDb,
      BossDifficultyLkDb,
      BossFrequencyLkDb,
      BossLkDb,
      CharacterClassLkDb,
      CharacterFactionLkDb,
    ]),
    CacheModule.register({
      ttl: AppContants.TWENTY_FOUR_HOURS_TTL,
    }),
  ],
  controllers: [LookupsController],
  providers: [LookupService],
})
export class LookupsModule {}
