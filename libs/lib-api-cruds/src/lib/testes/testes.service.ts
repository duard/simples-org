import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { TesteEntity } from '@simples-org/api-interfaces';
import { Repository } from 'typeorm';

@Injectable()
export class TestesService extends TypeOrmCrudService<TesteEntity> {
  constructor(@InjectRepository(TesteEntity) thisRepository: Repository<TesteEntity>) {
    super(thisRepository);
  }

  getData(): any {
    return { message: 'Welcome to api!' };
  }    
}
