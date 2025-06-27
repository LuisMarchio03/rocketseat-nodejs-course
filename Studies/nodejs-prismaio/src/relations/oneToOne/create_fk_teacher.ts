import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "curso de Java",
      duration: 800,
      description: "Curso de Java - execelente",
      teacherId: "6018bcd2-7011-40d5-9b1a-ef2c2eb2868f",
    },
  });
  console.log(result);
}

main();
