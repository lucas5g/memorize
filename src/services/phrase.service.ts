import { elevenLabs } from '@/utils/eleven-labs';
import { prisma } from '@/utils/prisma';
import { translate } from '@/utils/translate';
import { z } from 'zod';

export const phraseCreateSchema = z.object({
  english: z.string().nonempty(),
  portuguese: z.string().optional(),
});

export class PhraseService {
  async create(create: z.infer<typeof phraseCreateSchema>) {
    const { english } = phraseCreateSchema.parse(create);

    const [portuguese, audio] = await Promise.all([
      translate(english),
      elevenLabs(english),
    ]);

    return prisma.phrase.create({
      data: {
        english,
        portuguese,
        audio,
      },
    });
  }

  findMany() {
    return prisma.phrase.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: number) {
    return prisma.phrase.findFirstOrThrow({
      where: {
        id,
      },
    });
  }

  delete(id: number) {
    return prisma.phrase.delete({
      where: {
        id,
      },
    });
  }
}
