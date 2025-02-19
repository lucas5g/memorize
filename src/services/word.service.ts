import { prisma } from "@/libs/prisma"
import { z } from "zod"

const createSchema = z.object({
  name: z.string(),
  translate: z.string()
})
export class WordService {
  create(data: z.infer<typeof createSchema>) {
    return prisma.word.create({
      data
    })
  }

  findAll(){
    return prisma.word.findMany()
  }

  delete(id: number){
    return prisma.word.delete({
      where: {
        id
      }
    })
  }
}