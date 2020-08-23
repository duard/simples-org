  
import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions() {
    // const dbConfig = this.configService.get('database');
    // console.log('\n\n\n');
    // console.log('=>', dbConfig);
    // console.log('💡');

    return this.configService.get('database');
  }
}