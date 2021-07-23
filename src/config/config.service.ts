import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

function getMigrationDirectory() {
  const directory = process.env.NODE_ENV === 'migration' ? 'src' : `${__dirname}`;
  return `${directory}/../db/migrations/**/*{.ts,.js}`;
}

class ConfigService {
  getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: ['./dist/**/*.entity.js'],
      migrationsTableName: 'migrations',
      migrations: [getMigrationDirectory()],
      cli: {
        migrationsDir: './src/db/migrations',
      },
      ssl: process.env.MODE !== 'DEV',
    };
  }
}

export const configService = new ConfigService();
