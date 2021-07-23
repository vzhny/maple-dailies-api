import { CacheInterceptor, ClassSerializerInterceptor, HttpException, HttpStatus, Injectable, UseInterceptors } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArcaneRiverAreaLkDb } from '../entities/arcane-river/arcane-river-area-lks.entity';
import { BossDifficultyLkDb } from '../entities/bosses/boss-difficulty-lk.entity';
import { BossFrequencyLkDb } from '../entities/bosses/boss-frequency-lk.entity';
import { BossLkDb } from '../entities/bosses/boss-lk.entity';
import { CharacterClassLkDb } from '../entities/characters/character-class-lk.entity';
import { CharacterFactionLkDb } from '../entities/characters/character-faction-lk.entity';

// TODO: Update this service to use generics instead of the any type
@Injectable()
@UseInterceptors(ClassSerializerInterceptor)
export class LookupService {
  constructor(
    @InjectRepository(ArcaneRiverAreaLkDb)
    private arcaneRiverAreaLksRepo: Repository<ArcaneRiverAreaLkDb>,
    @InjectRepository(BossDifficultyLkDb)
    private bossDifficultyLksRepo: Repository<BossDifficultyLkDb>,
    @InjectRepository(BossFrequencyLkDb)
    private bossFrequencyLksRepo: Repository<BossFrequencyLkDb>,
    @InjectRepository(BossLkDb)
    private bossLksRepo: Repository<BossLkDb>,
    @InjectRepository(CharacterClassLkDb)
    private characterClassLksRepo: Repository<CharacterClassLkDb>,
    @InjectRepository(CharacterFactionLkDb)
    private characterFactionLksRepo: Repository<CharacterFactionLkDb>,
  ) {}

  async getByKey(lookupName: string, lookupKey: string): Promise<any> {
    const list = await this.getList(lookupName);

    const lookup = list.find((item: any) => item[lookupName.slice(0, -1)] === lookupKey) as any;

    if (lookup !== undefined) {
      return lookup;
    } else {
      throw new HttpException(`${lookupKey} key not found in ${lookupName} lookup`, HttpStatus.NOT_FOUND);
    }
  }

  @UseInterceptors(CacheInterceptor)
  getList(lookupName: string): Promise<any[]> {
    switch (lookupName) {
      case 'arcaneRiverAreaLks':
        return this.arcaneRiverAreaLksRepo.find({ order: { seqno: 'ASC' } });
      case 'bossDifficultyLks':
        return this.bossDifficultyLksRepo.find({ order: { seqno: 'ASC' } });
      case 'bossFrequencyLks':
        return this.bossFrequencyLksRepo.find({ order: { seqno: 'ASC' } });
      case 'bossLks':
        return this.bossLksRepo.find({ order: { seqno: 'ASC' } });
      case 'characterClassLks':
        return this.characterClassLksRepo.find({ order: { seqno: 'ASC' } });
      case 'characterFactionLks':
        return this.characterFactionLksRepo.find({ order: { seqno: 'ASC' } });
      default:
        throw new HttpException(`${lookupName} lookup was not found`, HttpStatus.NOT_FOUND);
    }
  }
}
