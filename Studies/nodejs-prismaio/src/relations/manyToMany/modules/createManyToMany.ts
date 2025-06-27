import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "358c61f9-114e-47e9-8f0e-d68235c06f9d",
      fk_id_module: "2e7efd04-0989-4ace-b034-ca60fabb7927",
    },
  });

  console.log(result);
}

main();
