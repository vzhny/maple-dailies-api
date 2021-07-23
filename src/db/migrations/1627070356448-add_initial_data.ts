import { MigrationInterface, QueryRunner } from 'typeorm';

export class addInitialData1627070356448 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO "users" ("user_id", "username", "password") VALUES ('SYSTEM', 'SYSTEM', '')`);

    await queryRunner.query(
      `
        INSERT INTO "lk_arcane_river_areas"
            ("arcane_river_area_lk", "description", "short_description", "seqno")
        VALUES
            ('VJ', 'Vanishing Journey', 'Vanishing Journey', 10),
            ('RC', 'Reverse City', 'Reverse City', 20),
            ('CCI', 'Chu Chu Island', 'Chu Chu', 30),
            ('YYI', 'Yum Yum Island', 'Yum Yum Island', 40),
            ('LACH', 'Lachelein', 'Lachelein', 50),
            ('ARC', 'Arcana', 'Arcana', 60),
            ('MOR', 'Morass', 'Morass', 70),
            ('ESF', 'Esfera', 'Esfera', 80),
            ('SEL', 'Sellas', 'Sellas', 90),
            ('MOON', 'Tenebris - Moonbridge', 'Moonbridge', 100),
            ('LOS', 'Tenebris - Labyrinth of Suffering', 'Labyrinth of Suffering', 110),
            ('LIM', 'Tenebris - Limina', 'Limina', 120)
      `,
    );

    await queryRunner.query(
      `
        INSERT INTO "lk_boss_difficulties"
            ("boss_difficulty_lk", "description", "short_description", "seqno")
        VALUES
            ('EASY', 'Easy', 'Easy', 10),
            ('NORML', 'Normal', 'Normal', 20),
            ('HARD', 'Hard', 'Hard', 30),
            ('CHAOS', 'Chaos', 'Chaos', 40)
      `,
    );

    await queryRunner.query(
      `
        INSERT INTO "lk_boss_frequencies"
            ("boss_frequency_lk", "description", "short_description", "seqno")
        VALUES
            ('DAILY', 'Daily', 'Daily', 10),
            ('WEEK', 'Weekly', 'Weekly', 20),
            ('MONTH', 'Monthly', 'Monthly', 30)
      `,
    );

    await queryRunner.query(
      `
        INSERT INTO "lk_bosses"
            ("boss_lk", "description", "short_description", "seqno")
        VALUES
            ('ZAKUM', 'Zakum', 'Zakum', 10),
            ('MRAN', 'Mori Ranmaru', 'Ranmaru', 20),
            ('PAP', 'Papulatus', 'Papulatus', 30),
            ('MAG', 'Magnus', 'Magnus', 40),
            ('HILLA', 'Hilla', 'Hilla', 50),
            ('HTAIL', 'Horntail', 'Horntail', 60),
            ('CQ', 'Crimson Queen', 'Crimson Queen', 70),
            ('CLOWN', 'Pierre', 'Pierre', 80),
            ('VBON', 'Von Bon', 'Von Bon', 90),
            ('VEL', 'Vellum', 'Vellum', 100),
            ('VLEON', 'Von Leon', 'Von Leon', 110),
            ('ARK', 'Arkarium', 'Arkarium', 120),
            ('JULE', 'Julieta', 'Julieta', 130),
            ('OMNI', 'OMNI-CLN', 'OMNI-CLN', 140),
            ('PBEAN', 'Pink Bean', 'Pink Bean', 140),
            ('CYGN', 'Cygnus', 'Cygnus', 150),
            ('PNOU', 'Princess Nou', 'Princess Nou', 160),
            ('AKECH', 'Akechi Mitsuhide', 'Akechi', 170),
            ('LOTUS', 'Lotus', 'Lotus', 180),
            ('DEMON', 'Damien', 'Damien', 190),
            ('LUCID', 'Lucid', 'Lucid', 200),
            ('WILL', 'Will', 'Will', 210),
            ('GLM', 'Gloom', 'Gloom', 220),
            ('DNELL', 'Darknell', 'Darknell', 220),
            ('VHIL', 'Verus Hilla', 'Verus Hilla', 230),
            ('BM', 'Black Mage', 'Black Mage', 240)
      `,
    );

    await queryRunner.query(
      `
        INSERT INTO "lk_character_classes"
            ("character_class_lk", "description", "short_description", "seqno")
        VALUES
            ('HERO', 'Hero', 'Hero', 10),
            ('DK', 'Dark Knight', 'Dark Knight', 20),
            ('PAL', 'Paladin', 'Paladin', 30),
            ('BM', 'Bowmaster', 'Bowmaster', 40),
            ('MARK', 'Marksman', 'Marksman', 50),
            ('PF', 'Pathfinder', 'Pathfinder', 60),
            ('IL', 'Ice/Lightning Archmage', 'I/L Archmage', 70),
            ('FP', 'Fire/Poison Archmage', 'F/P Archmage', 80),
            ('BSHP', 'Bishop', 'Bishop', 90),
            ('NL', 'Night Lord', 'Night Lord', 100),
            ('SHAD', 'Shadower', 'Shadower', 110),
            ('DB', 'Dual Blade', 'Dual Blade', 120),
            ('BUCC', 'Buccaneer', 'Buccaneer', 130),
            ('CORS', 'Corsair', 'Corsair', 140),
            ('CANNR', 'Cannoneer', 'Cannoneer', 150),
            ('JETT', 'Jett', 'Jett', 160),
            ('DW', 'Dawn Warrior', 'Dawn Warrior', 170),
            ('WA', 'Wind Archer', 'Wind Archer', 180),
            ('BW', 'Blaze Wizard', 'Blaze Wizard', 190),
            ('NW', 'Night Walker', 'Night Walker', 200),
            ('TB', 'Thunder Breaker', 'Thunder Breaker', 210),
            ('MIHLE', 'Mihile', 'Mihile', 220),
            ('BLSTR', 'Blaster', 'Blaster', 230),
            ('WH', 'Wild Hunter', 'Wild Hunter', 240),
            ('BAM', 'Battle Mage', 'Battle Mage', 250),
            ('XENON', 'Xenon', 'Xenon', 260),
            ('MECH', 'Mechanic', 'Mechanic', 270),
            ('DS', 'Demon Slayer', 'Demon Slayer', 280),
            ('DA', 'Demon Avenger', 'Demon Avenger', 290),
            ('ARAN', 'Aran', 'Aran', 300),
            ('MERC', 'Mercedes', 'Mercedes', 310),
            ('EVAN', 'Evan', 'Evan', 320),
            ('LUMI', 'Luminous', 'Luminous', 330),
            ('PHNTM', 'Phantom', 'Phantom', 340),
            ('SHADE', 'Shade', 'Shade', 350),
            ('KAISR', 'Kaiser', 'Kaiser', 360),
            ('KAIN', 'Kain', 'Kain', 370),
            ('CAD', 'Cadena', 'Cadena', 380),
            ('AB', 'Angelic Buster', 'Angelic Buster', 390),
            ('HAYTO', 'Hayato', 'Hayato', 400),
            ('KANNA', 'Kanna', 'Kanna', 410),
            ('KINS', 'Kinesis', 'Kinesis', 420),
            ('ADELE', 'Adele', 'Adele', 430),
            ('ILLUM', 'Illium', 'Illium', 440),
            ('ARK', 'Ark', 'Ark', 450),
            ('ZERO', 'Zero', 'Zero', 460),
            ('HOYNG', 'Hoyoung', 'Hoyoung', 470),
            ('BT', 'Beast Tamer', 'Beast Tamer', 480)
      `,
    );

    await queryRunner.query(
      `
        INSERT INTO "lk_character_factions"
            ("character_faction_lk", "description", "short_description", "seqno")
        VALUES
            ('EXPLR', 'Explorers', 'Explorers', 10),
            ('CYKNT', 'Cygnus Knights', 'Cygnus Knights', 20),
            ('RST', 'Resistance', 'Resistance', 30),
            ('HOM', 'Heroes of Maple', 'Heroes of Maple', 40),
            ('NOVA', 'Nova', 'Nova', 50),
            ('SNGKU', 'Sengoku', 'Sengoku', 60),
            ('FSTRY', 'Friendstory', 'Friendstory', 70),
            ('FLORA', 'Flora', 'Flora', 80),
            ('COG', 'Child of God', 'Child of God', 90),
            ('ANIMA', 'Anima', 'Anima', 100),
            ('BT', 'Beast Tamer', 'Beast Tamer', 110)
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "users"`);
    await queryRunner.query(`DELETE FROM "lk_arcane_river_areas"`);
    await queryRunner.query(`DELETE FROM "lk_boss_difficulties"`);
    await queryRunner.query(`DELETE FROM "lk_boss_frequencies"`);
    await queryRunner.query(`DELETE FROM "lk_bosses"`);
    await queryRunner.query(`DELETE FROM "lk_character_classes"`);
    await queryRunner.query(`DELETE FROM "lk_character_factions"`);
  }
}
