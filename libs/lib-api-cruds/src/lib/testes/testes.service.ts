import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TesteEntity } from "@simples-org/api-interfaces";

@Injectable()
export class TestesService extends TypeOrmCrudService<TesteEntity> {
  constructor(@InjectRepository(TesteEntity) thisRepository: Repository<TesteEntity>) {
    super(thisRepository);
  }
}
