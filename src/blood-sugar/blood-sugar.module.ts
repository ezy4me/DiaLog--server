import { Module } from '@nestjs/common';
import { BloodSugarService } from './blood-sugar.service';
import { BloodSugarController } from './blood-sugar.controller';

@Module({
  providers: [BloodSugarService],
  controllers: [BloodSugarController]
})
export class BloodSugarModule {}
