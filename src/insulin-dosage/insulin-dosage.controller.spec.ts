import { Test, TestingModule } from '@nestjs/testing';
import { InsulinDosageController } from './insulin-dosage.controller';

describe('InsulinDosageController', () => {
  let controller: InsulinDosageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsulinDosageController],
    }).compile();

    controller = module.get<InsulinDosageController>(InsulinDosageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
