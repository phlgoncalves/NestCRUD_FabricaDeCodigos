import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './shared/task.service/task.service';
import { Task } from './shared/task/task';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TaskService) { }

  @Get()
  async getAll(): Promise<Task[]> {
    return this.taskService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Task | undefined> {
    return this.taskService.getById(id);
  }

  @Post()
  async create(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task)
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() task: Task): Promise<Task | undefined> {
    task.id = id;
    return this.taskService.update(task);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.taskService.delete(id);
  }
}
