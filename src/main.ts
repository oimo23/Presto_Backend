import { NestFactory } from '@nestjs/core';
import { TodoModule } from './todo.module';
import {PrestoPrismaClient} from "./presto.prisma.client";

async function bootstrap() {
  const app = await NestFactory.create(TodoModule);
  const prestoPrismaClient: PrestoPrismaClient = app.get(PrestoPrismaClient);
  prestoPrismaClient.enableShutdownHooks(app)
  await app.listen(8080);
}
bootstrap();
