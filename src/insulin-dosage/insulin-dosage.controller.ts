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
import { InsulinDosageService } from './insulin-dosage.service';
import { ClassSerializerInterceptor } from '@nestjs/common';
import {
  CreateInsulinDosageDto,
  UpdateInsulinDosageDto,
} from './_dto/insulin-dosage.dto';
import { InsulinDosage } from '@prisma/client';

@Controller('insulin-dosage')
@UseInterceptors(ClassSerializerInterceptor)
export class InsulinDosageController {
  constructor(private readonly insulinDosageService: InsulinDosageService) {}

  @Get()
  async findAll(): Promise<InsulinDosage[]> {
    return this.insulinDosageService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<InsulinDosage> {
    return this.insulinDosageService.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateInsulinDosageDto): Promise<InsulinDosage> {
    return this.insulinDosageService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateInsulinDosageDto,
  ): Promise<InsulinDosage> {
    return this.insulinDosageService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<InsulinDosage> {
    return this.insulinDosageService.delete(id);
  }
}
