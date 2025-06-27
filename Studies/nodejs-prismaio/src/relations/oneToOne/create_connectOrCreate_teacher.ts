import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "curso de Elixir",
      duration: 500,
      description: "Curso de elixir - execelente",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Luís Gabriel",
          },
          create: { name: "Luís Gabriel" },
        },
      },
    },
  });
  const resultTwo = await prisma.courses.create({
    data: {
      name: "curso de NodeJS",
      duration: 500,
      description: "Curso de NodeJS - execelente",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Luís Gabriel Marchió",
          },
          create: { name: "Luís Gabriel Marchió" },
        },
      },
    },
  });
  console.log(result);
  console.log(resultTwo);
}

// async function teste() {
//   const result = await prisma.courses.findMany({
//     where: {
//       name: {
//         contains: "elixir",
//         mode: "insensitive",
//       },
//     },
//   });

//   console.log("result => ", result);
// }

main();
// teste();
