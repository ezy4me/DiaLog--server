import { Injectable, NotFoundException } from '@nestjs/common';
import { Nutrition } from '@prisma/client';
import { CreateNutritionDto, UpdateNutritionDto } from './_dto/nutrition.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class NutritionService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(): Promise<Nutrition[]> {
    return this.databaseService.nutrition.findMany();
  }

  async findOne(id: number): Promise<Nutrition> {
    const nutrition = await this.databaseService.nutrition.findUnique({
      where: { id },
    });

    if (!nutrition) {
      throw new NotFoundException(`Nutrition with id ${id} not found`);
    }

    return nutrition;
  }

  async findAllByUserId(id: number): Promise<Nutrition[]> {
    const nutrition = await this.databaseService.nutrition.findMany({
      where: { dish: { userId: id } },
      include: {
        nutritionType: true,
        dish: {
          include: {
            foodDishes: {
              include: {
                food: true,
              },
            },
          },
        },
      },
    });

    if (!nutrition) {
      throw new NotFoundException(`Nutrition with id ${id} not found`);
    }

    return nutrition;
  }

  async create(dto: CreateNutritionDto): Promise<Nutrition> {
    return this.databaseService.nutrition.create({
      data: { ...dto },
    });
  }

  async update(id: number, dto: UpdateNutritionDto): Promise<Nutrition> {
    await this.findOne(id);

    return this.databaseService.nutrition.update({
      where: { id },
      data: { ...dto },
    });
  }

  async delete(id: number): Promise<Nutrition> {
    await this.findOne(id);

    return this.databaseService.nutrition.delete({
      where: { id },
    });
  }
}
