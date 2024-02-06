import { Module } from '@nestjs/common';
import { BloodSugarService } from './blood-sugar.service';
import { BloodSugarController } from './blood-sugar.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  providers: [BloodSugarService, DatabaseService],
  controllers: [BloodSugarController],
})
export class BloodSugarModule {}
