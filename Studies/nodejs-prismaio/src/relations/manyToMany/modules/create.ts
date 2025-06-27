import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      description: "Aprendendo firebase do zero",
      name: "Aprendendo Firebase",
      CoursesModules: {
        create: {
          courses: {
            connect: {
              id: "358c61f9-114e-47e9-8f0e-d68235c06f9d",
            },
          },
        },
      },
    },
  });
}

main();
