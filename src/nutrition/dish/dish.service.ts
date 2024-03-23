import { Injectable, NotFoundException } from '@nestjs/common';
import { Dish } from '@prisma/client';
import { CreateDishDto, UpdateDishDto } from './_dto/dish.dto';
import { DatabaseService } from 'src/database/database.service';
import { FoodDishesService } from '../food-dishes/food-dishes.service';

@Injectable()
export class DishService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly foodDishesService: FoodDishesService,
  ) {}

  async findAll(): Promise<Dish[]> {
    return this.databaseService.dish.findMany({
      include: { foodDishes: { include: { food: true } } },
    });
  }

  async findOne(id: number): Promise<Dish> {
    const dish = await this.databaseService.dish.findUnique({
      where: { id },
      include: { foodDishes: { include: { food: true } } },
    });

    if (!dish) {
      throw new NotFoundException(`Dish with id ${id} not found`);
    }

    return dish;
  }

  async create(dto: CreateDishDto): Promise<Dish> {
    const dish = await this.databaseService.dish.create({
      data: {
        name: dto.name,
        status: false,
        userId: dto.userId,
      },
    });

    await Promise.all(
      dto.foodDishes.map(async (foodDish) => {
        await this.foodDishesService.create({
          dishId: dish.id,
          foodId: foodDish.food.id,
          weight: parseInt(foodDish.weight),
        });
      }),
    );

    return dish;
  }

  async update(id: number, dto: UpdateDishDto): Promise<Dish> {
    await this.findOne(id);

    const updatedDish = await this.databaseService.dish.update({
      where: { id },
      data: {
        name: dto.name,
      },
      include: {
        foodDishes: true,
      },
    });

    for (const foodDish of updatedDish.foodDishes) {
      const updatedWeight = dto.foodDishes.find(
        (fd) => fd.id === foodDish.id,
      )?.weight;
      if (updatedWeight !== undefined) {
        await this.foodDishesService.update(foodDish.id, {
          weight: parseInt(updatedWeight),
          dishId: foodDish.dishId,
          foodId: foodDish.foodId,
        });
      }
    }

    const newFoodDishes = dto.foodDishes.filter(
      (fd) => !updatedDish.foodDishes.some((f) => f.id === fd.id),
    );

    await Promise.all(
      newFoodDishes.map(async (fd) => {
        await this.foodDishesService.create({
          dishId: id,
          foodId: fd.food.id,
          weight: parseInt(fd.weight),
        });
      }),
    );

    return updatedDish;
  }

  async delete(id: number): Promise<Dish> {
    await this.findOne(id);

    return this.databaseService.dish.delete({
      where: { id },
    });
  }
}
