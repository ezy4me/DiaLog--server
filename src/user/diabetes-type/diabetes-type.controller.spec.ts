import { Test, TestingModule } from '@nestjs/testing';
import { DiabetesTypeController } from './diabetes-type.controller';

describe('DiabetesTypeController', () => {
  let controller: DiabetesTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiabetesTypeController],
    }).compile();

    controller = module.get<DiabetesTypeController>(DiabetesTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
