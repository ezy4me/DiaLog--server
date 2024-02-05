import { Module } from '@nestjs/common';
import { NutritionService } from './nutrition.service';
import { NutritionController } from './nutrition.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  providers: [NutritionService, DatabaseService],
  controllers: [NutritionController],
})
export class NutritionModule {}
