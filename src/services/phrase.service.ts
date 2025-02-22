import { elevenLabs } from "@/utils/eleven-labs";
import { prisma } from "@/utils/prisma";
import { translate } from "@/utils/translate";
import { z } from "zod";

export const phraseCreateSchema = z.object({
  english: z.string().nonempty(),
  portuguese: z.string().optional(),
})


export class PhraseService {

  async create(create: z.infer<typeof phraseCreateSchema>) {
    const { english } = phraseCreateSchema.parse(create)

    return prisma.phrase.create({
      data: {
        english,
        portuguese: await translate(english),
        audio: await elevenLabs(english)
      }
    })
  }

  findMany() {
    return prisma.phrase.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  findOne(id: number) {
    return prisma.phrase.findFirstOrThrow()
  }

  delete(id: number) {
    return prisma.phrase.delete({
      where: {
        id,
      },
    });
  }

}