import { Module } from '@nestjs/common';
import { InsulinDosageController } from './insulin-dosage.controller';
import { InsulinDosageService } from './insulin-dosage.service';
import { DatabaseService } from 'src/database/database.service';
import { InsulinTypeModule } from 'src/insulin-type/insulin-type.module';

@Module({
  imports: [InsulinTypeModule],
  controllers: [InsulinDosageController],
  providers: [InsulinDosageService, DatabaseService],
})
export class InsulinDosageModule {}
