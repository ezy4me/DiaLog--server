import { Test, TestingModule } from '@nestjs/testing';
import { FoodDishesController } from './food-dishes.controller';

describe('FoodDishesController', () => {
  let controller: FoodDishesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodDishesController],
    }).compile();

    controller = module.get<FoodDishesController>(FoodDishesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
