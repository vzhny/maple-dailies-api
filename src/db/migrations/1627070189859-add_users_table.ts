import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUsersTable1627070189859 implements MigrationInterface {
  name = 'addUsersTable1627070189859';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("user_id" character varying(10) NOT NULL, "username" character varying(32) NOT NULL, "password" character varying(256) NOT NULL, "active_flag" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "created_by" character varying(10) NOT NULL DEFAULT 'SYSTEM', "last_changed_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "last_changed_by" character varying(10) NOT NULL DEFAULT 'SYSTEM', CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_96aac72f1574b88752e9fb00089" PRIMARY KEY ("user_id"))`,
    );
    await queryRunner.query(`CREATE INDEX "IDX_fe0bb3f6520ee0469504521e71" ON "users" ("username") `);
    await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_96aac72f1574b88752e9fb00089" UNIQUE ("user_id")`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_96aac72f1574b88752e9fb00089"`);
    await queryRunner.query(`DROP INDEX "IDX_fe0bb3f6520ee0469504521e71"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
