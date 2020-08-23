import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CargoEntity } from '@simples-org/api-interfaces';
import { Repository } from 'typeorm';

@Injectable()
export class CargosService extends TypeOrmCrudService<CargoEntity> {
  constructor(@InjectRepository(CargoEntity) thisRepository: Repository<CargoEntity>) {
    super(thisRepository);
  }

  getData(): any {
    return { message: 'Welcome to api!' };
  }    
}
