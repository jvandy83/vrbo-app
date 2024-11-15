import { Module } from '@nestjs/common';
import {
  ConfigService,
  ConfigModule as NestconfigModule,
} from '@nestjs/config';

import Joi from 'joi';

@Module({
  imports: [
    NestconfigModule.forRoot({
      isGlobal: true,
      // validationSchema: Joi.object({
      //   MONGODB_URI: Joi.string(),
      // }),
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
