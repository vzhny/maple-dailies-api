import { Entity, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
import { UserConstants } from 'src/constants/auth/auth.constants';
import { AppContants } from 'src/constants/app.contants';

@Entity({ name: 'users' })
export class UserDb {
  @Column({
    name: 'user_id',
    type: 'varchar',
    length: AppContants.NANO_ID_LENGTH,
    primary: true,
    unique: true,
  })
  userId: string;

  @Index()
  @Column({ name: 'username', type: 'varchar', length: 32, unique: true })
  username: string;

  @Column({ name: 'password', type: 'varchar', length: 256 })
  password: string;

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
    name: 'last_changed_by',
    type: 'varchar',
    length: AppContants.NANO_ID_LENGTH,
    default: () => `'${UserConstants.SYSTEM_USER}'`,
  })
  lastChangedBy: string;
}
