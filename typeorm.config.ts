import { ConnectionOptions } from 'typeorm';

const typeormConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['dist/**/*.entity{ .ts,.js}'],
  dropSchema: false,
  synchronize: true,
};
export = typeormConfig;
