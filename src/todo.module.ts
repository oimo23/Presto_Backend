import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import {TodoRepository} from "./todo.repository";
import {PrestoPrismaClient} from "./presto.prisma.client";
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [AuthzModule],
  controllers: [TodoController],
  providers: [PrestoPrismaClient, TodoService, TodoRepository],
})
export class TodoModule {}
