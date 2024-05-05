import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import  { json, urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const host = process.env.API_HOST;
  const port = process.env.API_PORT || 3000;
  
  /*app.use(json({ limit: '450mb' }));
  app.use(urlencoded({ extended: true, limit: '450mb' }));*/

  await app.listen(port, host, () => console.log(`Servindo em : ${host}: ${port}`));
}
bootstrap();
