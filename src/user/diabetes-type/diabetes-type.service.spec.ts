import { Test, TestingModule } from '@nestjs/testing';
import { DiabetesTypeService } from './diabetes-type.service';

describe('DiabetesTypeService', () => {
  let service: DiabetesTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiabetesTypeService],
    }).compile();

    service = module.get<DiabetesTypeService>(DiabetesTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
