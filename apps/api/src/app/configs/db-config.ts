import { environment } from '../../environments/environment';

export const dbConfig = () => ({
  port: Number(environment.API_PORT),
  jwtSecret: environment.JWT_SECRET,
  database: {
    port: Number(environment.API_BASE_TYPEORM_PORT),
    type: environment.API_BASE_TYPEORM_TYPE || 'mysql',
    host: environment.API_BASE_TYPEORM_HOST,
    username: environment.API_BASE_TYPEORM_USERNAME ,
    password: environment.API_BASE_TYPEORM_PASSWORD,
    database: environment.API_BASE_TYPEORM_DATABASE,
    synchronize: environment.API_BASE_TYPEORM_SYNCHRONIZE,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    logging: true,
    autoLoadEntities: true,
  },
});
