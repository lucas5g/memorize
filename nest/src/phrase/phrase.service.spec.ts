import { CreatePhraseDto } from '@/phrase/dto/create-phrase.dto';
import { PhraseService } from '@/phrase/phrase.service';
import { PrismaService } from '@/prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('PhraseService', () => {
  let service: PhraseService;

  let id: number;
  const properties = [
    'id',
    'english',
    'portuguese',
    'audio',
  ]

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhraseService, PrismaService],
    }).compile();

    service = module.get<PhraseService>(PhraseService);

    const payload = {
      english: 'test',
      tag: 'test'
    } as CreatePhraseDto

    const res = await service.create(payload)

    expect(payload).toMatchObject({
      english: res.english,
    });

    id = res.id
  });

  // afterAll(async () => {
  //   await service.remove(id);
  // });

  it('create test tag 2', async () => {
    const payload = {
      english: 'test',
      tag: 'test2'
    }

    const res = await service.create(payload)

    expect(res).toHaveProperty('english', 'test')
  })

  it.only('findAll', async () => {

    const res = await service.findAll();
    console.log(res[0])

    for (const property of properties) {
      expect(res[0]).toHaveProperty(property);
    }

  });
});
