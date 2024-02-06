import { Module } from '@nestjs/common';
import { NutritionTypeController } from './nutrition-type.controller';
import { NutritionTypeService } from './nutrition-type.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [NutritionTypeController],
  providers: [NutritionTypeService, DatabaseService],
})
export class NutritionTypeModule {}
