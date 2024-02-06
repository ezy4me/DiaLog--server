import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto, UpdateFoodDto } from './_dto/food.dto';
import { Food } from '@prisma/client';
import { Public } from '@app/common/decorators';

@Controller('food')
@UseInterceptors(ClassSerializerInterceptor)
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Public()
  @Get()
  async findAll(): Promise<Food[]> {
    return this.foodService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Food> {
    return this.foodService.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateFoodDto): Promise<Food> {
    return this.foodService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateFoodDto,
  ): Promise<Food> {
    return this.foodService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Food> {
    return this.foodService.delete(id);
  }
}
