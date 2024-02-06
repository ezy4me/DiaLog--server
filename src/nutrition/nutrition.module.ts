import { Module } from '@nestjs/common';
import { NutritionService } from './nutrition.service';
import { NutritionController } from './nutrition.controller';
import { DatabaseService } from 'src/database/database.service';
import { DishModule } from './dish/dish.module';
import { FoodModule } from './food/food.module';
import { FoodDishesModule } from './food-dishes/food-dishes.module';

@Module({
  providers: [NutritionService, DatabaseService],
  controllers: [NutritionController],
  imports: [DishModule, FoodModule, FoodDishesModule],
})
export class NutritionModule {}
