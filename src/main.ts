import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

import mongoose from 'mongoose';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  dotenv.config(); // Load .env file

  const app = await NestFactory.create(AppModule);
  //to perform the validation globally we use the useGlobalPipes method
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
