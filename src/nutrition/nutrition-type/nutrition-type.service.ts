// nutrition-type.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { NutritionType } from '@prisma/client';
import {
  CreateNutritionTypeDto,
  UpdateNutritionTypeDto,
} from './_dto/nutrition-type.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class NutritionTypeService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(): Promise<NutritionType[]> {
    return this.databaseService.nutritionType.findMany();
  }

  async findOne(id: number): Promise<NutritionType> {
    const nutritionType = await this.databaseService.nutritionType.findUnique({
      where: { id },
    });

    if (!nutritionType) {
      throw new NotFoundException(`Nutrition type with id ${id} not found`);
    }

    return nutritionType;
  }

  async create(dto: CreateNutritionTypeDto): Promise<NutritionType> {
    return this.databaseService.nutritionType.create({
      data: { ...dto },
    });
  }

  async update(
    id: number,
    dto: UpdateNutritionTypeDto,
  ): Promise<NutritionType> {
    await this.findOne(id);

    return this.databaseService.nutritionType.update({
      where: { id },
      data: { ...dto },
    });
  }

  async delete(id: number): Promise<NutritionType> {
    await this.findOne(id);

    return this.databaseService.nutritionType.delete({
      where: { id },
    });
  }
}
