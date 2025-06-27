import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function main() {
//   // SELECT * FROM COURSES LIMIT 1
//   // Retorna o primeiro registro que a pesquisa encontrar!
//   const course = await prisma.courses.findFirst();
//   console.log(course);
// }

async function main() {
  // Retorna o ultimo registro criado!
  // SELECT * FROM COURSES ORDER BY ID DESC LIMIT 1
  const course = await prisma.courses.findFirst({
    take: -1,
  });
  console.log(course);
}

main();
