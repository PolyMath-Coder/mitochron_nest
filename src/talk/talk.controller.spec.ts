import { Test, TestingModule } from '@nestjs/testing';
import { TalkController } from './talk.controller';
import { TalkService } from './talk.service';
import * as httpMocks from 'node-mocks-http';

describe('TalkController', () => {
  let controller: TalkController;
  let service: TalkService;

  const mockReques = httpMocks.createRequest<any>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TalkController],
      providers: [TalkService],
    }).compile();

    controller = module.get<TalkController>(TalkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
