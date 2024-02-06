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
import { InsulinTypeService } from './insulin-type.service';
import { ClassSerializerInterceptor } from '@nestjs/common';
import {
  CreateInsulinTypeDto,
  UpdateInsulinTypeDto,
} from './_dto/insulin-type.dto';
import { InsulinType } from '@prisma/client';

@Controller('insulin-type')
@UseInterceptors(ClassSerializerInterceptor)
export class InsulinTypeController {
  constructor(private readonly insulinTypeService: InsulinTypeService) {}

  @Get()
  async findAll(): Promise<InsulinType[]> {
    return this.insulinTypeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<InsulinType> {
    return this.insulinTypeService.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateInsulinTypeDto): Promise<InsulinType> {
    return this.insulinTypeService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateInsulinTypeDto,
  ): Promise<InsulinType> {
    return this.insulinTypeService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<InsulinType> {
    return this.insulinTypeService.delete(id);
  }
}
