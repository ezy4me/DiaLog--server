import { Module } from '@nestjs/common';
import { DiabetesTypeController } from './diabetes-type.controller';
import { DiabetesTypeService } from './diabetes-type.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [DiabetesTypeController],
  providers: [DiabetesTypeService, DatabaseService],
})
export class DiabetesTypeModule {}
