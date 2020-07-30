/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = environment.API_PORT || 3333;
  await app.listen(port, () => {
    if (!environment.production) {
      Logger.debug(environment.API_BASE_TYPEORM_HOST, 'HOSTNAME');
      Logger.debug(environment.API_BASE_TYPEORM_USERNAME, 'USERNAME');
      Logger.debug(environment.API_BASE_TYPEORM_PASSWORD, 'PASSWORD');
      Logger.debug(environment.API_BASE_TYPEORM_DATABASE, 'DATABASE');
    }
    Logger.debug(
      'Listening at http://localhost:' + port || 3000 + '/' + globalPrefix,

      `AMBIENTE => ${environment.environment}`
    );
    console.log('😃');
  });
}

bootstrap();
