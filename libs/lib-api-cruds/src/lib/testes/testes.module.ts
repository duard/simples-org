import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestesController } from './testes.controller';
import { TestesService } from './testes.service';
import { TesteEntity } from "@simples-org/api-interfaces";

@Module({
  imports: [TypeOrmModule.forFeature([TesteEntity])],
  controllers: [TestesController],
  providers: [TestesService],
})
export class TestesModule {}
