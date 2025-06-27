import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      id: "358c61f9-114e-47e9-8f0e-d68235c06f9d",
    },
    include: {
      CoursesModules: true,
    },
  });

  console.log(JSON.stringify(result));
}

main();
