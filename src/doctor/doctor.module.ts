import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { DatabaseService } from 'src/database/database.service';
import { BloodSugarService } from 'src/blood-sugar/blood-sugar.service';
import { InsulinDosageService } from 'src/insulin-dosage/insulin-dosage.service';
import { NutritionService } from 'src/nutrition/nutrition.service';

@Module({
  controllers: [DoctorController],
  providers: [
    DoctorService,
    DatabaseService,
    BloodSugarService,
    InsulinDosageService,
    NutritionService,
  ],
})
export class DoctorModule {}
