import { Test, TestingModule } from '@nestjs/testing';
import { InsulinTypeService } from './insulin-type.service';

describe('InsulinTypeService', () => {
  let service: InsulinTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsulinTypeService],
    }).compile();

    service = module.get<InsulinTypeService>(InsulinTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
