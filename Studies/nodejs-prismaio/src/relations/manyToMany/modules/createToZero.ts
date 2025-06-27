import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      courses: {
        create: {
          name: "Curso de NodeJS",
          description: "Curso completo de NodeJS",
          duration: 200,
        },
      },
      modules: {
        create: {
          name: "PrismaIO",
          description: "Modulo completo de PrismaIO",
        },
      },
    },
  });

  console.log(result);
}

main();
