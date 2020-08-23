import { Module } from '@nestjs/common';
import { LibApiCoreModule } from '@simples-org/lib-api-core';
import { CargosModule, TestesModule } from '@simples-org/lib-api-cruds';
import { LibApiSharedModule } from '@simples-org/lib-api-shared';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [LibApiCoreModule, LibApiSharedModule, CargosModule, TestesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
