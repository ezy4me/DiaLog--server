import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { DishService } from './dish.service';
import { CreateDishDto, UpdateDishDto } from './_dto/dish.dto';
import { Dish } from '@prisma/client';

@Controller('dish')
@UseInterceptors(ClassSerializerInterceptor)
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Get()
  async findAll(): Promise<Dish[]> {
    return this.dishService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Dish> {
    return this.dishService.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateDishDto): Promise<Dish> {
    return this.dishService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDishDto,
  ): Promise<Dish> {
    return this.dishService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Dish> {
    return this.dishService.delete(id);
  }
}
