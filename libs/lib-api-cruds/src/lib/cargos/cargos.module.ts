import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CargoEntity } from '@simples-org/api-interfaces';
import { LibApiCoreModule } from '@simples-org/lib-api-core';

import { CargosController } from './cargos.controller';
import { CargosService } from './cargos.service';

@Module({
  imports: [LibApiCoreModule, TypeOrmModule.forFeature([CargoEntity])],
  controllers: [CargosController],
  providers: [CargosService],
  exports: [TypeOrmModule],
})
export class CargosModule {}
