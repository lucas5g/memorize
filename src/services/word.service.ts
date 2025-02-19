import { prisma } from '@/libs/prisma';
import { z } from 'zod';

const createSchema = z.object({
  name: z.string(),
  translate: z.string(),
});

const updateSchema = createSchema.partial();
export class WordService {
  create(data: z.infer<typeof createSchema>) {
    return prisma.word.create({
      data: createSchema.parse(data),
    });
  }
  findAll() {
    return prisma.word.findMany();
  }
  findOne(id: number) {
    return prisma.word.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }
  update(id: number, data: z.infer<typeof updateSchema>) {
    return prisma.word.update({
      where: {
        id,
      },
      data: updateSchema.parse(data),
    });
  }
  delete(id: number) {
    return prisma.word.delete({
      where: {
        id,
      },
    });
  }
}

// create(createGameDto: CreateGameDto) {
//   return 'This action adds a new game';
// }

// findAll() {
//   return `This action returns all game`;
// }

// findOne(id: number) {
//   return `This action returns a #${id} game`;
// }

// update(id: number, updateGameDto: UpdateGameDto) {
//   return `This action updates a #${id} game`;
// }

// remove(id: number) {
//   return `This action removes a #${id} game`;
// }
