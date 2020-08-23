import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibApiCoreModule } from '@simples-org/lib-api-core';

import { TesteEntity } from './teste.entity';
import { TestesController } from './testes.controller';
import { TestesService } from './testes.service';

@Module({
  imports: [LibApiCoreModule, TypeOrmModule.forFeature([TesteEntity])],
  controllers: [TestesController],
  providers: [TestesService],
})
export class TestesModule {}
