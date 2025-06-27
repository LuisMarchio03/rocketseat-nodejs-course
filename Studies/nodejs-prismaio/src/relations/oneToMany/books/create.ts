import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Arquitetura Limpa",
      author_id: "76437c5a-3668-4a3a-9e32-b8af69eff7ce",
    },
  });
  console.log(result);
}

main();
