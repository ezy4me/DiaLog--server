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
  Query,
} from '@nestjs/common';
import { BloodSugarService } from './blood-sugar.service';
import {
  CreateBloodSugarDto,
  UpdateBloodSugarDto,
} from './_dto/blood-sugar.dto';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { BloodSugar } from '@prisma/client';

@Controller('blood-sugar')
@UseInterceptors(ClassSerializerInterceptor)
export class BloodSugarController {
  constructor(private readonly bloodSugarService: BloodSugarService) {}

  @Get()
  async findAll(): Promise<BloodSugar[]> {
    return this.bloodSugarService.findAll();
  }

  @Get(':userId')
  async findOne(
    @Param('userId', ParseIntPipe) userId: number,
    @Query('date') dateString: string,
  ): Promise<BloodSugar[]> {
    const targetDate = dateString ? new Date(dateString) : undefined;
    return this.bloodSugarService.findOne(userId, targetDate);
  }

  @Post()
  async create(@Body() dto: CreateBloodSugarDto): Promise<BloodSugar> {
    return this.bloodSugarService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateBloodSugarDto,
  ): Promise<BloodSugar> {
    return this.bloodSugarService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<BloodSugar> {
    return this.bloodSugarService.delete(id);
  }
}
