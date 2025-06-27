import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "9be10170-5833-4e26-b8fd-dce233914e76",
    },
  });

  console.log(result);
}

main();
