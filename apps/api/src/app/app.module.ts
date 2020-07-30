import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';


import { LibApiCoreModule, DatabaseConfig } from "@simples-org/lib-api-core";
import { dbConfig } from './configs/db-config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig],
    }),
 
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    LibApiCoreModule
 ],  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
