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
@UseInterceptors(ClassSerializerInterceptor)
export class DiabetesTypeController {
  constructor(private readonly diabetesTypeService: DiabetesTypeService) {}

  @Get()
  async findAll() {
    return this.diabetesTypeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.diabetesTypeService.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateDiabetesTypeDto) {
    return this.diabetesTypeService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDiabetesTypeDto,
  ) {
    return this.diabetesTypeService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.diabetesTypeService.delete(id);
  }
}
