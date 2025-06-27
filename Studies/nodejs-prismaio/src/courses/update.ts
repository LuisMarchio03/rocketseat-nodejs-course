import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface IRequest {
  id: string;
  name: string;
  description: string;
  duration: number;
}

async function main({ id, name, description, duration }: IRequest) {
  const result = await prisma.courses.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      description: description,
      duration: duration,
    },
  });

  console.log(result);
}

main({
  id: "95dbc670-cffd-409f-9082-ba27661d815a",
  name: "Curso de ReactJS",
  description: "Curso De ReacJS Execelente",
  duration: 140,
});
