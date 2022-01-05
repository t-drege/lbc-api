import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/infrastructure/module/app.module';
import * as express from 'express'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1')
  app.use('/images', express.static('public/upload/image'))
  app.enableCors({
    origin: "http://localhost:3000",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  })
  await app.listen(3001);
}
bootstrap();
