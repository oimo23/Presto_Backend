import { Injectable } from '@nestjs/common';
import {TodoRepository} from "./todo.repository";
import {Todo} from "@prisma/client";

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  getTodos(): Promise<Todo[]> {
    return this.todoRepository.todos({orderBy: {id: 'desc'}})
  }

  getTodo(id: string): Promise<Todo> {
    return this.todoRepository.todo({id: Number(id)})
  }

  createTodo(title: string, content: string): Promise<Todo> {
    return this.todoRepository.createTodo({
      title: title,
      content: content
    })
  }

  updateTodo(id: string, title?: string, content?: string): Promise<Todo> {
    return this.todoRepository.updateTodo({
      where: { id: Number(id) },
      data: {
        title: title,
        content: content,
      }
    })
  }

  deleteTodo(id: string): Promise<Todo> {
    return this.todoRepository.deletePost({
      id: Number(id)
    })
  }
}
