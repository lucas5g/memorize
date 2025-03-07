import { PhraseService } from '@/phrase/phrase.service';
import { PrismaService } from '@/prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('PhraseService', () => {
  let service: PhraseService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhraseService, PrismaService],
    }).compile();

    service = module.get<PhraseService>(PhraseService);



  });

  it('create', async () => {
    const payload = {
      english: 'I want to drink water',
    }
    const res = await service.create(payload)

    console.log(res);
  });
});
