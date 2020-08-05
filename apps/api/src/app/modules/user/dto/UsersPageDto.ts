import { ApiProperty } from '@nestjs/swagger';

import { UserDto } from './UserDto';
import { PageMetaDto } from '../../../common/dto/PageMetaDto';
// import { PageMetaDto } from '@simples-org/lib-api-shared';

export class UsersPageDto {
  @ApiProperty({
    type: UserDto,
    isArray: true,
  })
  readonly data: UserDto[];

  @ApiProperty()
  readonly meta: PageMetaDto;

  constructor(data: UserDto[], meta: PageMetaDto) {
    this.data = data;
    this.meta = meta;
  }
}
