import { MigrationInterface, QueryRunner } from 'typeorm';

export class addInitialLkTables1627070321886 implements MigrationInterface {
  name = 'addInitialLkTables1627070321886';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "lk_arcane_river_areas" ("arcane_river_area_lk" character varying(5) NOT NULL, "description" character varying(36) NOT NULL, "short_description" character varying(24) NOT NULL, "active_flag" boolean NOT NULL DEFAULT true, "seqno" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "created_by" character varying(10) NOT NULL DEFAULT 'SYSTEM', "last_changed_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "last_changed_by" character varying(10) NOT NULL DEFAULT 'SYSTEM', CONSTRAINT "UQ_e51712718ba3f0c5d1f19532d14" UNIQUE ("arcane_river_area_lk"), CONSTRAINT "PK_e51712718ba3f0c5d1f19532d14" PRIMARY KEY ("arcane_river_area_lk"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "lk_boss_difficulties" ("boss_difficulty_lk" character varying(5) NOT NULL, "description" character varying(36) NOT NULL, "short_description" character varying(24) NOT NULL, "active_flag" boolean NOT NULL DEFAULT true, "seqno" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "created_by" character varying(10) NOT NULL DEFAULT 'SYSTEM', "last_changed_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "last_changed_by" character varying(10) NOT NULL DEFAULT 'SYSTEM', CONSTRAINT "UQ_414b4b72e942358d9b26301fed5" UNIQUE ("boss_difficulty_lk"), CONSTRAINT "PK_414b4b72e942358d9b26301fed5" PRIMARY KEY ("boss_difficulty_lk"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "lk_boss_frequencies" ("boss_frequency_lk" character varying(5) NOT NULL, "description" character varying(36) NOT NULL, "short_description" character varying(24) NOT NULL, "active_flag" boolean NOT NULL DEFAULT true, "seqno" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "created_by" character varying(10) NOT NULL DEFAULT 'SYSTEM', "last_changed_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "last_changed_by" character varying(10) NOT NULL DEFAULT 'SYSTEM', CONSTRAINT "UQ_f5f8d0b4bda7836e2bbe9a6bfe6" UNIQUE ("boss_frequency_lk"), CONSTRAINT "PK_f5f8d0b4bda7836e2bbe9a6bfe6" PRIMARY KEY ("boss_frequency_lk"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "lk_bosses" ("boss_lk" character varying(5) NOT NULL, "description" character varying(36) NOT NULL, "short_description" character varying(24) NOT NULL, "active_flag" boolean NOT NULL DEFAULT true, "seqno" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "created_by" character varying(10) NOT NULL DEFAULT 'SYSTEM', "last_changed_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "last_changed_by" character varying(10) NOT NULL DEFAULT 'SYSTEM', CONSTRAINT "UQ_3106e049d860a06a35c63b4465d" UNIQUE ("boss_lk"), CONSTRAINT "PK_3106e049d860a06a35c63b4465d" PRIMARY KEY ("boss_lk"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "lk_character_classes" ("character_class_lk" character varying(5) NOT NULL, "description" character varying(36) NOT NULL, "short_description" character varying(24) NOT NULL, "active_flag" boolean NOT NULL DEFAULT true, "seqno" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "created_by" character varying(10) NOT NULL DEFAULT 'SYSTEM', "last_changed_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "last_changed_by" character varying(10) NOT NULL DEFAULT 'SYSTEM', CONSTRAINT "UQ_1d5f3a2be68abb6f3328f50539a" UNIQUE ("character_class_lk"), CONSTRAINT "PK_1d5f3a2be68abb6f3328f50539a" PRIMARY KEY ("character_class_lk"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "lk_character_factions" ("character_faction_lk" character varying(5) NOT NULL, "description" character varying(36) NOT NULL, "short_description" character varying(24) NOT NULL, "active_flag" boolean NOT NULL DEFAULT true, "seqno" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "created_by" character varying(10) NOT NULL DEFAULT 'SYSTEM', "last_changed_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "last_changed_by" character varying(10) NOT NULL DEFAULT 'SYSTEM', CONSTRAINT "UQ_ba7a6007ae1da19e6e43745dde0" UNIQUE ("character_faction_lk"), CONSTRAINT "PK_ba7a6007ae1da19e6e43745dde0" PRIMARY KEY ("character_faction_lk"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "lk_character_factions"`);
    await queryRunner.query(`DROP TABLE "lk_character_classes"`);
    await queryRunner.query(`DROP TABLE "lk_bosses"`);
    await queryRunner.query(`DROP TABLE "lk_boss_frequencies"`);
    await queryRunner.query(`DROP TABLE "lk_boss_difficulties"`);
    await queryRunner.query(`DROP TABLE "lk_arcane_river_areas"`);
  }
}
