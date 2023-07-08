import * as process from 'process';

if (!process.env.IS_TS_NODE) {
  require('module-alias/register');
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';

const port = 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    console.log(`🚀 Server ready at: http://localhost:${port}`);
  });
}
bootstrap();
