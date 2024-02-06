import { Test, TestingModule } from '@nestjs/testing';
import { FoodDishesService } from './food-dishes.service';

describe('FoodDishesService', () => {
  let service: FoodDishesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodDishesService],
    }).compile();

    service = module.get<FoodDishesService>(FoodDishesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
