import { AppContants } from 'src/constants/app.contants';
import { UserConstants } from 'src/constants/auth/auth.constants';
import { Entity, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'lk_boss_frequencies' })
export class BossFrequencyLkDb {
  @Column({
    name: 'boss_frequency_lk',
    type: 'varchar',
    length: 5,
    primary: true,
    unique: true,
  })
  bossFrequencyLk: string;

  @Column({ name: 'description', type: 'varchar', length: 36 })
  description: string;

  @Column({ name: 'short_description', type: 'varchar', length: 24 })
  shortDescription: string;

  @Column({ name: 'active_flag', type: 'boolean', default: true })
  activeFlag: boolean;

  @Column({ name: 'seqno', type: 'integer', nullable: false })
  seqno: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    name: 'created_by',
    type: 'varchar',
    length: AppContants.NANO_ID_LENGTH,
    default: () => `'${UserConstants.SYSTEM_USER}'`,
  })
  createdBy: string;

  @UpdateDateColumn({
    name: 'last_changed_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  lastChangedAt: Date;

  @Column({
    name: 'last_changed_by',
    type: 'varchar',
    length: AppContants.NANO_ID_LENGTH,
    default: () => `'${UserConstants.SYSTEM_USER}'`,
  })
  lastChangedBy: string;
}
