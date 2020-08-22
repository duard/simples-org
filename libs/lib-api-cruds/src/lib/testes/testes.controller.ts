import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { TestesService } from './testes.service';

import { TesteEntity } from "@simples-org/api-interfaces";

@Crud({
  model: {
    type: TesteEntity,
  },
  query: {
    limit: 5,
    cache: 2000,
  },
  params: {
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    },
  },
})
@Controller('testes')
export class TestesController implements CrudController<TesteEntity> {
  constructor(public service: TestesService) {}
}
