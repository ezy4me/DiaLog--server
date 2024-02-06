import { Module } from '@nestjs/common';
import { InsulinDosageController } from './insulin-dosage.controller';
import { InsulinDosageService } from './insulin-dosage.service';

@Module({
  controllers: [InsulinDosageController],
  providers: [InsulinDosageService]
})
export class InsulinDosageModule {}
