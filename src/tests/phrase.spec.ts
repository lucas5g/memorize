import { PhraseService } from "@/services/phrase.service";

import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe('PhraseService', () => {
  const service = new PhraseService();
  let id: number;
  beforeAll(async () => {
    const res = await service.create({ english: 'I want drink water' });

    expect(res).toMatchObject({
      english: 'I want drink water.',
      portuguese: 'Quero beber água.'
    });

    console.log(res)
    id = res.id
  });

  afterAll(async () => {
    await service.delete(id);
  });

  it('findOne', async () => {
    const res = await service.findOne(id);
    expect(res).toBeDefined();
  });
});