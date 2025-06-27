import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "curso de C#",
      duration: 500,
      description: "Curso de C# - execelente",
      // teacher: {
      //   connectOrCreate: {
      //     where: {
      //       name: "Luís Gabriel",
      //     },
      //     create: { name: "Luís Gabriel" },
      //   },
      // },
    },
  });
  console.log(result);
}

main();

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

// teste();
