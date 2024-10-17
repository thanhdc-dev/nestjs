import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 3000;
  await app.listen(port);
  Logger.log(`Listening on port ${port}`);
}
bootstrap();
