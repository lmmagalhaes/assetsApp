import { resolve } from 'path';
import { ConnectionOptions } from 'typeorm';

const typeormConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [resolve(__dirname, './src/**/*.model.{js,ts}')],
  dropSchema: false,
  synchronize: true,
  migrations: [resolve(__dirname, './src/migrations/**/*.{js,ts}')],
  migrationsRun: false,
  cli: { migrationsDir: './src/migrations' },
};
export = typeormConfig;
