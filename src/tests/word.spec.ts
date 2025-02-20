import { WordService } from '@/services/word.service';
import { play } from 'elevenlabs';
import { read } from 'fs';
import { Readable } from 'stream';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
describe('WordService', () => {
  const service = new WordService();
  let id: number;
  const properties = ['id', 'name', 'translate', 'audio', 'createdAt', 'updatedAt'];

  beforeAll(async () => {
    const data = {
      name: 'feriado',
      translate: 'holiday',
    };

    const res = await service.create(data);

    expect(res).toMatchObject(data);
    id = res.id;
  });


  it('findAll', async () => {
    const res = await service.findAll();
    expect(Object.keys(res[0])).toEqual(properties);
  });

  it('findOne', async () => {
    const res = await service.findOne(id);
    expect(Object.keys(res)).toEqual(properties);

  });

  it('update', async () => {
    const data = {
    };

    const res = await service.update(id, data);
    expect(res).toMatchObject(data);
  });
});
