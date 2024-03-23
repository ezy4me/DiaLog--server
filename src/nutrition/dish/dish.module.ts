import { Module } from '@nestjs/common';
import { DishController } from './dish.controller';
import { DishService } from './dish.service';
import { DatabaseService } from 'src/database/database.service';
import { FoodDishesService } from '../food-dishes/food-dishes.service';

@Module({
  controllers: [DishController],
  providers: [DishService, DatabaseService, FoodDishesService],
})
export class DishModule {}
