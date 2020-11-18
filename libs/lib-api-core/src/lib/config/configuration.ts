import { join } from 'path';

export const configuration = () => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.PORT || '3000', 10),

  jwtSecret: process.env.JWT_SECRET,
  database: {
    type: process.env.API_BASE_TYPEORM_TYPE || 'mysql',
    port: Number(process.env.API_BASE_TYPEORM_PORT),
    synchronize: process.env.API_BASE_TYPEORM_SYNC,

    database: process.env.API_BASE_TYPEORM_DATABASE,
    username: process.env.API_BASE_TYPEORM_USERNAME,
    password: process.env.API_BASE_TYPEORM_PASSWORD,
    host: process.env.API_BASE_TYPEORM_HOSTNAME,
    entities: [
      __dirname + '/../**/*.entity{.ts,.js}',
      'libs/typeorm/src/lib/entity/**/*.entity{.ts,.js}',
      'libs/lib-api-cruds/src/lib/entity/**/*.entity{.ts,.js}',
      join(__dirname, './**/*.entity{.ts,.js}'),
      '../../../../../libs/lib-api-cruds/src/lib/*.entity{.ts,.js}',
    ],
    // logging: 'all',
    autoLoadEntities: true,
    // entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
  },
});

/*

  API_BASE_TYPEORM_TYPE: process.env.API_BASE_TYPEORM_TYPE,
  API_BASE_TYPEORM_PORT: process.env.API_BASE_TYPEORM_PORT,
  API_BASE_TYPEORM_SYNC: process.env.API_BASE_TYPEORM_SYNC,

  API_BASE_TYPEORM_DATABASE: process.env.API_BASE_TYPEORM_DATABASE,
  API_BASE_TYPEORM_USERNAME: process.env.API_BASE_TYPEORM_USERNAME,
  API_BASE_TYPEORM_PASSWORD: process.env.API_BASE_TYPEORM_PASSWORD,
  API_BASE_TYPEORM_HOSTNAME: process.env.API_BASE_TYPEORM_HOSTNAME,

*/
