import { Test, TestingModule } from '@nestjs/testing';
import { NutritionTypeService } from './nutrition-type.service';

describe('NutritionTypeService', () => {
  let service: NutritionTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NutritionTypeService],
    }).compile();

    service = module.get<NutritionTypeService>(NutritionTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
