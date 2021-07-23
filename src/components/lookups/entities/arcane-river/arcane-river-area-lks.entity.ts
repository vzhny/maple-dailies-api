import { AppContants } from 'src/constants/app.contants';
import { UserConstants } from 'src/constants/auth/auth.constants';
import { Entity, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'lk_arcane_river_areas' })
export class ArcaneRiverAreaLkDb {
  @Column({
    name: 'arcane_river_area_lk',
    type: 'varchar',
    length: 5,
    primary: true,
    unique: true,
  })
  arcaneRiverAreaLk: string;

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
