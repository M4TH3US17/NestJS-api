import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import  { json, urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const host = process.env.API_HOST;
  const port = process.env.API_PORT || 3000;

  await app.listen(port, () => console.log(`SERVER PORT: ${port}`));
}
bootstrap();
