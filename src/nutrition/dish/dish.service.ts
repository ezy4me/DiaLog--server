import { Injectable, NotFoundException } from '@nestjs/common';
import { Dish } from '@prisma/client';
import { CreateDishDto, UpdateDishDto } from './_dto/dish.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DishService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(): Promise<Dish[]> {
    return this.databaseService.dish.findMany();
  }

  async findOne(id: number): Promise<Dish> {
    const dish = await this.databaseService.dish.findUnique({
      where: { id },
    });

    if (!dish) {
      throw new NotFoundException(`Dish with id ${id} not found`);
    }

    return dish;
  }

  async create(dto: CreateDishDto): Promise<Dish> {
    return this.databaseService.dish.create({
      data: { ...dto },
    });
  }

  async update(id: number, dto: UpdateDishDto): Promise<Dish> {
    await this.findOne(id);

    return this.databaseService.dish.update({
      where: { id },
      data: { ...dto },
    });
  }

  async delete(id: number): Promise<Dish> {
    await this.findOne(id);

    return this.databaseService.dish.delete({
      where: { id },
    });
  }
}
