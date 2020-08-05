import { Global, HttpModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { GeneratorService, ValidatorService } from '@simples-org/lib-api-shared';

import { AwsS3Service } from './services/aws-s3.service';
import { ConfigService } from './services/config.service';

const providers = [
  ConfigService,
  ValidatorService,
  AwsS3Service,
  GeneratorService,
];

@Global()
@Module({
  providers,
  imports: [
    HttpModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secretOrPrivateKey: configService.get('JWT_SECRET_KEY'),
        // if you want to use token with expiration date
        // signOptions: {
        //     expiresIn: configService.getNumber('JWT_EXPIRATION_TIME'),
        // },
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [...providers, HttpModule, JwtModule],
})
export class SharedModule {}
