import { Module } from '@nestjs/common';
import { DishController } from './dish.controller';
import { DishService } from './dish.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [DishController],
  providers: [DishService, DatabaseService],
})
export class DishModule {}
