import { resolve } from 'path';
import { ConnectionOptions } from 'typeorm';

const typeormConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST_PRODUCTION,
  port: +process.env.POSTGRES_PORT_PRODUCTION,
  username: process.env.POSTGRES_USER_PRODUCTION,
  password: process.env.POSTGRES_PASSWORD_PRODUCTION,
  database: process.env.POSTGRES_DB_PRODUCTION,
  entities: [resolve(__dirname, './src/**/*.model.{js,ts}')],
  dropSchema: false,
  ssl: { rejectUnauthorized: false },
  synchronize: true,
  migrations: [resolve(__dirname, './src/migrations/**/*.{js,ts}')],
  migrationsRun: false,
  cli: { migrationsDir: './src/migrations' },
};
export = typeormConfig;
