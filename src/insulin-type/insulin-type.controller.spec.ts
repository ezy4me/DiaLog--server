import { Test, TestingModule } from '@nestjs/testing';
import { InsulinTypeController } from './insulin-type.controller';

describe('InsulinTypeController', () => {
  let controller: InsulinTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsulinTypeController],
    }).compile();

    controller = module.get<InsulinTypeController>(InsulinTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
