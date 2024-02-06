import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { FoodDishesService } from './food-dishes.service';
import {
  CreateFoodDishesDto,
  UpdateFoodDishesDto,
} from './_dto/food-dishes.dto';
import { FoodDishes } from '@prisma/client';

@Controller('food-dishes')
@UseInterceptors(ClassSerializerInterceptor)
export class FoodDishesController {
  constructor(private readonly foodDishesService: FoodDishesService) {}

  @Get()
  async findAll(): Promise<FoodDishes[]> {
    return this.foodDishesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<FoodDishes> {
    return this.foodDishesService.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateFoodDishesDto): Promise<FoodDishes> {
    return this.foodDishesService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateFoodDishesDto,
  ): Promise<FoodDishes> {
    return this.foodDishesService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<FoodDishes> {
    return this.foodDishesService.delete(id);
  }
}
