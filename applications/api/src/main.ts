import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { ApplicationModule } from './application.module';

async function bootstrap() {
  const application = await NestFactory.create(ApplicationModule, {
    cors: { origin: 'http://localhost:3000' },
  });
  application.setGlobalPrefix('api');
  application.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  await application.listen(8080);
}

bootstrap();
