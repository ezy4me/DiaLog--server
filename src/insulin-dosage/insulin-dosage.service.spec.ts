import { Test, TestingModule } from '@nestjs/testing';
import { InsulinDosageService } from './insulin-dosage.service';

describe('InsulinDosageService', () => {
  let service: InsulinDosageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsulinDosageService],
    }).compile();

    service = module.get<InsulinDosageService>(InsulinDosageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
