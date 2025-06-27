import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.findMany({
    include: {
      courses: true,
      modules: true,
    },
  });

  console.log(result);
}

main();
