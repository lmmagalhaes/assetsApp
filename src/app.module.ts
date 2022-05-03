import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import FiiModule from './fii/fii.module';
import { ApolloDriver } from '@nestjs/apollo';
import { ScrapingModule } from './crawler/scraping.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { resolve } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        PORT: Joi.number().default(3000),
      }),
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (
        configService: ConfigService,
      ): Promise<TypeOrmModuleOptions> => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST_PRODUCTION'),
        port: +configService.get('POSTGRES_PORT_PRODUCTION') || 5432,
        username: configService.get('POSTGRES_USER_PRODUCTION'),
        password: configService.get('POSTGRES_PASSWORD_PRODUCTION'),
        database: configService.get('POSTGRES_DB_PRODUCTION'),
        autoLoadEntities: true,
        logging: true,
        keepConnectionAlive: false,
        synchronize: true,
        migrationsRun: true,
        migrations: [resolve(__dirname, './migrations/*.{ts,js}')],
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    FiiModule,
    ScrapingModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
