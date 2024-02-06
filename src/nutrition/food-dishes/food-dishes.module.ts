import { Module } from '@nestjs/common';
import { FoodDishesController } from './food-dishes.controller';
import { FoodDishesService } from './food-dishes.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [FoodDishesController],
  providers: [FoodDishesService, DatabaseService],
})
export class FoodDishesModule {}
