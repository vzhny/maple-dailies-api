/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppContants } from 'src/constants/app.contants';
import { UserConstants } from 'src/constants/auth/auth.constants';
import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// DO NOT USE DIRECTLY, simply copy and paste into new entities. This is because TypeORM doesn't allow
// explicit ordering of columns, so if an entity is to inherit this class, these audit fields will be
// added first, disrupting column ordering.
class BaseEntityDb {
  @Column({ name: 'active_flag', type: 'boolean', default: true })
  activeFlag: boolean;

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
    name: 'created_by',
    type: 'varchar',
    length: AppContants.NANO_ID_LENGTH,
    default: () => `'${UserConstants.SYSTEM_USER}'`,
  })
  lastChangedBy: string;
}
