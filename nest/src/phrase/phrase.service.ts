import { CreatePhraseDto } from '@/phrase/dto/create-phrase.dto';
import { UpdatePhraseDto } from '@/phrase/dto/update-phrase.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { elevenLabs } from '@/utils/eleven-labs';
import { translate } from '@/utils/translate';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class PhraseService {
  constructor(private readonly prisma: PrismaService) { }
  async create({ english, tag }: CreatePhraseDto) {
    const [audio, portuguese] = await Promise.all([
      elevenLabs(english),
      translate(english),
    ]);

    const tagCreated = await this.prisma.tag.upsert({
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

    const phrase = await this.prisma.phrase.upsert({
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
      await this.prisma.phraseTag.create({
        data: {
          phraseId: phrase.id,
          tagId: tagCreated.id
        }
      })
    }
    
    return phrase;
  }

  findAll() {
    return this.prisma.phrase.findMany({
      include: {
        tags: true
      }
    });
  }

  findOne(id: number) {
    return this.prisma.phrase.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updatePhraseDto: UpdatePhraseDto) {
    return `This action updates a #${id} phrase`;
  }

  async remove(id: number) {
    await this.prisma.phraseTag.deleteMany({
      where: {
        phraseId: id
      }
    })
    return this.prisma.phrase.delete({
      where: {
        id,
      },
    });
  }
}
