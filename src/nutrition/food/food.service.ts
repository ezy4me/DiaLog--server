import { Injectable, NotFoundException } from '@nestjs/common';
import { Food } from '@prisma/client';
import { CreateFoodDto, UpdateFoodDto } from './_dto/food.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class FoodService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(): Promise<Food[]> {
    return this.databaseService.food.findMany();
  }

  async findOne(id: number): Promise<Food> {
    const food = await this.databaseService.food.findUnique({
      where: { id },
    });

    if (!food) {
      throw new NotFoundException(`Food with id ${id} not found`);
    }

    return food;
  }

  async create(dto: CreateFoodDto): Promise<Food> {
    return this.databaseService.food.create({
      data: { ...dto },
    });
  }

  async update(id: number, dto: UpdateFoodDto): Promise<Food> {
    await this.findOne(id);

    return this.databaseService.food.update({
      where: { id },
      data: { ...dto },
    });
  }

  async delete(id: number): Promise<Food> {
    await this.findOne(id);

    return this.databaseService.food.delete({
      where: { id },
    });
  }
}
