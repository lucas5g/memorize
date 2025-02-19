import { WordService } from '@/services/word.service';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
describe('WordService', () => {
  const service = new WordService();
  let id: number;
  const properties = ['id', 'name', 'translate', 'createdAt', 'updatedAt'];

  beforeAll(async () => {
    const data = {
      name: 'café',
      translate: 'coffee',
    };

    const res = await service.create(data);

    expect(res).toMatchObject(data);
    id = res.id;
  });

  afterAll(async () => {
    await service.delete(id);
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
      name: 'café2',
    };

    const res = await service.update(id, data);
    expect(res).toMatchObject(data);
  });
});
