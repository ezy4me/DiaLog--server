import { Injectable, NotFoundException } from '@nestjs/common';
import { FoodDishes } from '@prisma/client';
import {
  CreateFoodDishesDto,
  UpdateFoodDishesDto,
} from './_dto/food-dishes.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class FoodDishesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(): Promise<FoodDishes[]> {
    return this.databaseService.foodDishes.findMany();
  }

  async findOne(id: number): Promise<FoodDishes> {
    const foodDishes = await this.databaseService.foodDishes.findUnique({
      where: { id },
    });

    if (!foodDishes) {
      throw new NotFoundException(`FoodDishes with id ${id} not found`);
    }

    return foodDishes;
  }

  async create(dto: CreateFoodDishesDto): Promise<FoodDishes> {
    return this.databaseService.foodDishes.create({
      data: { ...dto },
    });
  }

  async update(id: number, dto: UpdateFoodDishesDto): Promise<FoodDishes> {
    await this.findOne(id);

    return this.databaseService.foodDishes.update({
      where: { id },
      data: { ...dto },
    });
  }

  async delete(id: number): Promise<FoodDishes> {
    await this.findOne(id);

    return this.databaseService.foodDishes.delete({
      where: { id },
    });
  }
}
