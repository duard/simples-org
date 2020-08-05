import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { IAwsConfig } from '@simples-org/api-interfaces';
import * as dotenv from 'dotenv';

import { SnakeNamingStrategy } from '../../snake-naming.strategy';
import { UserSubscriber } from '../entity-subscribers/user-subscriber';

export class ConfigService {
  constructor() {
    const nodeEnv = this.nodeEnv;
    dotenv.config({
      path: `.${nodeEnv}.env`,
    });

    // Replace \\n with \n to support multiline strings in AWS
    for (const envName of Object.keys(process.env)) {
      process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
    }
  }

  get isDevelopment(): boolean {
    return this.nodeEnv === 'development';
  }

  get isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  public get(key: string): any {
    return process.env[key];
  }

  public getNumber(key: string): number {
    return Number(this.get(key));
  }

  get nodeEnv(): string {
    return this.get('NODE_ENV') || 'development';
  }

  get fallbackLanguage(): string {
    return this.get('FALLBACK_LANGUAGE').toLowerCase();
  }

  get typeOrmConfig(): TypeOrmModuleOptions {
    let entities = [
      __dirname + '/../../modules/**/*.entity{.ts,.js}',
      __dirname + '/../../modules/**/*.entity{.ts,.js}',
      '/home/duard/super-nx/simples-org/apps/api/**/*.entity{.ts,.js}',
      // __dirname + '/**/*.entity.{js,ts}',
      // __dirname + '/*.entity.{js,ts}',
      // __dirname + '/../**/*.entity.{js,ts}',
      // '/../../modules/**/*.entity{.ts,.js}',
      // '../../modules/**/*.entity{.ts,.js}',
      // '/../modules/**/*.entity{.ts,.js}',
      // '../modules/**/*.entity{.ts,.js}',
      // '/modules/**/*.entity{.ts,.js}',
      // 'modules/**/*.entity{.ts,.js}',
      // '/modules/**/*.entity{.ts,.js}',
      // __dirname + '/../../src/entity/*.js',
      // '/home/duard/super-nx/simples-org/dist/apps/api/src/app/modules/**/*.entity{.ts,.js}'
    ];
    let migrations = [__dirname + '/../../migrations/*{.ts,.js}'];

    console.log('ENTIDADES', entities);
    console.log('__dirname', __dirname);
    console.log('__dirname', __dirname + '/../../modules');
    console.log('__dirname', __dirname + '/../../modules');
    console.log('__dirname', __dirname + '/../../modules');

    if ((<any>module).hot) {
      const entityContext = (<any>require).context(
        // './../../modules',
        '../../modules',
        true,
        /\.entity\.ts$/
      );

      console.log('entityContext', entityContext);

      entities = entityContext.keys().map((id) => {
        const entityModule = entityContext(id);
        const [entity] = Object.values(entityModule);
        console.log('entidadezinha', entity);
        return entity;
      });
      const migrationContext = (<any>require).context(
        './../../migrations',
        false,
        /\.ts$/
      );
      migrations = migrationContext.keys().map((id) => {
        const migrationModule = migrationContext(id);
        const [migration] = Object.values(migrationModule);
        return migration;
      });
    }
    console.log('entidadesBonitas', entities);

    return {
      entities,
      // migrations,
      keepConnectionAlive: true,
      type: this.get('DB_TYPE'),
      host: this.get('DB_HOST'),
      port: this.getNumber('DB_PORT'),
      username: this.get('DB_USERNAME'),
      password: this.get('DB_PASSWORD'),
      database: this.get('DB_DATABASE'),
      subscribers: [UserSubscriber],
      migrationsRun: false,
      logging: this.nodeEnv === 'development',
      namingStrategy: new SnakeNamingStrategy(),
      autoLoadEntities: true,
    };
  }

  get awsS3Config(): IAwsConfig {
    return {
      accessKeyId: this.get('AWS_S3_ACCESS_KEY_ID'),
      secretAccessKey: this.get('AWS_S3_SECRET_ACCESS_KEY'),
      bucketName: this.get('S3_BUCKET_NAME'),
    };
  }
}
