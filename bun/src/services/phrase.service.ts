import type { Prisma } from "@prisma/client"
import { elevenLabs } from "../utils/eleven-labs"
import { prisma } from "../utils/prisma"
import { translate } from "../utils/translate"

export class PhraseService {
  async create({ english, tag }: any) {
    const [portuguese, audio] = await Promise.all([
      translate(english),
      elevenLabs(english)

    ])


    const tagCreated = await prisma.tag.upsert({
      create: {
        name: tag
      },
      update: {
        name: tag
      },
      where: {
        name: tag
      }
    })

    const data: Prisma.PhraseCreateInput = {
      english,
      audio,
      portuguese,
    }

    const phrase = await prisma.phrase.upsert({
      create: data,
      update: data,
      where: {
        english,
      },
      include: {
        tags: true
      }
    });

    if (!phrase.tags.some(row => row.tagId === tagCreated.id)) {
      await prisma.phraseTag.create({
        data: {
          phraseId: phrase.id,
          tagId: tagCreated.id
        }
      })
    }

    return phrase;

  }

  findAll(){
    return prisma.phrase.findMany()
  }

}