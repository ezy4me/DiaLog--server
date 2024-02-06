import { Module } from '@nestjs/common';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [FoodController],
  providers: [FoodService, DatabaseService],
})
export class FoodModule {}
