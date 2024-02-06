import { Module } from '@nestjs/common';
import { NutritionTypeController } from './nutrition-type.controller';
import { NutritionTypeService } from './nutrition-type.service';

@Module({
  controllers: [NutritionTypeController],
  providers: [NutritionTypeService]
})
export class NutritionTypeModule {}
