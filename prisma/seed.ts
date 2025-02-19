import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  await prisma.word.create({
    data: {
      name: "coffee",
      translate: "café"
    }
  })
}

main()