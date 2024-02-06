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
import { NutritionTypeService } from './nutrition-type.service';
import {
  CreateNutritionTypeDto,
  UpdateNutritionTypeDto,
} from './_dto/nutrition-type.dto';
import { NutritionType } from '@prisma/client';

@Controller('nutrition-type')
@UseInterceptors(ClassSerializerInterceptor)
export class NutritionTypeController {
  constructor(private readonly nutritionTypeService: NutritionTypeService) {}

  @Get()
  async findAll(): Promise<NutritionType[]> {
    return this.nutritionTypeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<NutritionType> {
    return this.nutritionTypeService.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateNutritionTypeDto): Promise<NutritionType> {
    return this.nutritionTypeService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateNutritionTypeDto,
  ): Promise<NutritionType> {
    return this.nutritionTypeService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<NutritionType> {
    return this.nutritionTypeService.delete(id);
  }
}
