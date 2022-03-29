import { NestFactory } from '@nestjs/core';
import { TodoModule } from './todo.module';
import {PrestoPrismaClient} from "./presto.prisma.client";

async function bootstrap() {
  const app = await NestFactory.create(TodoModule);

  //Todo originを環境変数で指定できるようにする
  app.enableCors({
    origin: '*',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  });

  const prestoPrismaClient: PrestoPrismaClient = app.get(PrestoPrismaClient);
  prestoPrismaClient.enableShutdownHooks(app)
  await app.listen(8080);
}
bootstrap();
