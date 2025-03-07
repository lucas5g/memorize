import { CreatePhraseDto } from '@/phrase/dto/create-phrase.dto';
import { UpdatePhraseDto } from '@/phrase/dto/update-phrase.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { elevenLabs } from '@/utils/eleven-labs';
import { translate } from '@/utils/translate';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PhraseService {
  constructor(private readonly prisma: PrismaService) { }
  async create({ english }: CreatePhraseDto) {

    const [audio, portuguese] = await Promise.all([
      elevenLabs(english),
      translate(english),
    ]);

    return this.prisma.phrase.create({
      data: {
        english,
        audio,
        portuguese

      },
    });
  }

  findAll() {
    return this.prisma.phrase.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} phrase`;
  }

  update(id: number, updatePhraseDto: UpdatePhraseDto) {
    return `This action updates a #${id} phrase`;
  }

  remove(id: number) {
    return this.prisma.phrase.delete({
      where: {
        id,
      },
    });
  }
}
