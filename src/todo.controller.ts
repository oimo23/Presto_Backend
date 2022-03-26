import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards, Request} from '@nestjs/common';
import { TodoService } from './todo.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/todos')
  async getTodos(@Request() req) {
    console.log("sub=", req.user.sub);
    return await this.todoService.getTodos()
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/todos/:id')
  async getTodo(
      @Request() req,
      @Param('id') id: string
  ) {
    console.log("sub=", req.user.sub);
    return await  this.todoService.getTodo(id)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/todos')
  @HttpCode(HttpStatus.CREATED)
  async postTodos(
      @Request() req,
      @Body() postData: { title: string; content: string; },
  ) {
    console.log("sub=", req.user.sub);
    const { title, content } = postData;
    const todo = await this.todoService.createTodo(title, content);
    return {id: todo.id}
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/todos/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async putTodos(
      @Request() req,
      @Param('id') id: string,
      @Body() postData: { title?: string; content?: string; },
  ) {
    console.log("sub=", req.user.sub);
    const { title, content } = postData;
    await this.todoService.updateTodo(id, title, content)
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/todos/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteTodos(
      @Request() req,
      @Param('id') id: string,
  ) {
    console.log("sub=", req.user.sub);
    await this.todoService.deleteTodo(id)
  }

}
