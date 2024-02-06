import { Module } from '@nestjs/common';
import { InsulinTypeController } from './insulin-type.controller';
import { InsulinTypeService } from './insulin-type.service';

@Module({
  controllers: [InsulinTypeController],
  providers: [InsulinTypeService]
})
export class InsulinTypeModule {}
