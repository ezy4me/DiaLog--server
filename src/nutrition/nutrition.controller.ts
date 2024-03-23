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
import { NutritionService } from './nutrition.service';
import { CreateNutritionDto, UpdateNutritionDto } from './_dto/nutrition.dto';

@Controller('nutrition')
@UseInterceptors(ClassSerializerInterceptor)
export class NutritionController {
  constructor(private readonly nutritionService: NutritionService) {}

  @Get()
  async findAll() {
    return this.nutritionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.nutritionService.findOne(id);
  }

  @Get('/user/:id')
  async findAllByUserId(@Param('id', ParseIntPipe) id: number) {
    return this.nutritionService.findAllByUserId(id);
  }

  @Post()
  async create(@Body() dto: CreateNutritionDto) {
    return this.nutritionService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateNutritionDto,
  ) {
    return this.nutritionService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.nutritionService.delete(id);
  }
}
