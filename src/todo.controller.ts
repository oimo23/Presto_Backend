import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/todos')
  async getTodos() {
    return await this.todoService.getTodos()
  }

  @Get('/todos/:id')
  async getTodo(@Param('id') id: string) {
    return await  this.todoService.getTodo(id)
  }

  @Post('/todos')
  @HttpCode(HttpStatus.CREATED)
  async postTodos(
      @Body() postData: { title: string; content: string; },
  ) {
    const { title, content } = postData;
    const todo = await this.todoService.createTodo(title, content);
    return {id: todo.id}
  }

  @Put('/todos/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async putTodos(
      @Param('id') id: string,
      @Body() postData: { title?: string; content?: string; },
  ) {
    const { title, content } = postData;
    await this.todoService.updateTodo(id, title, content)
  }

  @Delete('/todos/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteTodos(
      @Param('id') id: string,
  ) {
    await this.todoService.deleteTodo(id)
  }

}
