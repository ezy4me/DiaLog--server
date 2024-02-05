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
import { DiabetesTypeService } from './diabetes-type.service';
import {
  CreateDiabetesTypeDto,
  UpdateDiabetesTypeDto,
} from './_dto/diabetes-type.dto';

@Controller('diabetes-type')
export class DiabetesTypeController {
  constructor(private readonly diabetesTypeService: DiabetesTypeService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async findAll() {
    return this.diabetesTypeService.findAll();
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.diabetesTypeService.findOne(id);
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  async create(@Body() dto: CreateDiabetesTypeDto) {
    return this.diabetesTypeService.create(dto);
  }

  @Patch(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDiabetesTypeDto,
  ) {
    return this.diabetesTypeService.update(id, dto);
  }

  @Delete(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.diabetesTypeService.delete(id);
  }
}
