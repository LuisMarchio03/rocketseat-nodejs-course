import { PrismaClient, Prisma, Modules } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.$queryRaw<Modules[]>(
    Prisma.sql`SELECT * FROM modules`
  );

  console.log(result);
  console.log("---------");
  result.map((item) => console.log(item.name));
}

main();
