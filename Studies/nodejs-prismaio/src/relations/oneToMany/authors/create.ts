import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Mayk Brito",
      books: {
        createMany: {
          data: [
            {
              name: "Teoria JS",
            },
            {
              name: "Teoria NodeJS",
            },
          ],
        },
      },
    },
  });
  console.log(result);
}

main();
