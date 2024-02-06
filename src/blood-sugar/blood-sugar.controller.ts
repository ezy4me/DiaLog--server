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
} from '@nestjs/common';
import { BloodSugarService } from './blood-sugar.service';
import {
  CreateBloodSugarDto,
  UpdateBloodSugarDto,
} from './_dto/blood-sugar.dto';
import { ClassSerializerInterceptor } from '@nestjs/common';

@Controller('blood-sugar')
@UseInterceptors(ClassSerializerInterceptor)
export class BloodSugarController {
  constructor(private readonly bloodSugarService: BloodSugarService) {}

  @Get()
  async findAll() {
    return this.bloodSugarService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.bloodSugarService.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateBloodSugarDto) {
    return this.bloodSugarService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateBloodSugarDto,
  ) {
    return this.bloodSugarService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.bloodSugarService.delete(id);
  }
}
