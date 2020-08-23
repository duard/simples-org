import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TesteEntity } from '@simples-org/api-interfaces';
import { LibApiCoreModule } from '@simples-org/lib-api-core';

import { TestesController } from './testes.controller';
import { TestesService } from './testes.service';

@Module({
  imports: [LibApiCoreModule, TypeOrmModule.forFeature([TesteEntity])],
  controllers: [TestesController],
  providers: [TestesService],
})
export class TestesModule {}
