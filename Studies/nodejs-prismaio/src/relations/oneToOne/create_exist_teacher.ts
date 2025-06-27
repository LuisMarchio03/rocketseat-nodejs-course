import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "curso de ReactJS",
      duration: 500,
      description: "Curso de ReactJS - execelente",
      teacher: {
        connect: {
          id: "8ed00a5c-4e98-4ccd-9790-b03058d6e2c4",
        },
      },
    },
  });
  console.log(result);
}

main();
