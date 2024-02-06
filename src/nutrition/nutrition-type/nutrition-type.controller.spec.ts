import { Test, TestingModule } from '@nestjs/testing';
import { NutritionTypeController } from './nutrition-type.controller';

describe('NutritionTypeController', () => {
  let controller: NutritionTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NutritionTypeController],
    }).compile();

    controller = module.get<NutritionTypeController>(NutritionTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
