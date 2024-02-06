import { Module } from '@nestjs/common';
import { InsulinTypeController } from './insulin-type.controller';
import { InsulinTypeService } from './insulin-type.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [InsulinTypeController],
  providers: [InsulinTypeService, DatabaseService],
})
export class InsulinTypeModule {}
