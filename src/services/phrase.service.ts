import { elevenLabs } from '@/utils/eleven-labs';
import { prisma } from '@/utils/prisma';
import { translate } from '@/utils/translate';
import { z } from 'zod';

export const phraseCreateSchema = z.object({
  english: z.string().nonempty(),
  portuguese: z.string().optional(),
});

const phraseParamnSchema = z.object({
  take: z.number().optional(),
  skip: z.number().optional(),
})
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

  async findMany(paramns?: z.infer<typeof phraseParamnSchema>) {
    const { take, skip } = phraseParamnSchema.parse(paramns);

    const [data, count] = await Promise.all([
      prisma.phrase.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        take,
        skip
      }),
      prisma.phrase.count(),
    ])

    return { data, count };
  }

  async findManyCount() {
    return prisma.phrase.count();
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
