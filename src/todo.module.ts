import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import {TodoRepository} from "./todo.repository";
import {PrestoPrismaClient} from "./presto.prisma.client";

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [PrestoPrismaClient, TodoService, TodoRepository],
})
export class TodoModule {}
