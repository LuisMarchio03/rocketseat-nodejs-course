import { prisma } from "../../../../database/prismaClient";
import * as bcryptjs from "bcryptjs";

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ password, username }: ICreateClient) {
    const clientAlreadyExists = await prisma.clients.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (clientAlreadyExists) {
      throw new Error("Client already exists");
    }

    const passwordHash = await bcryptjs.hash(password, 10);

    const client = await prisma.clients.create({
      data: {
        username,
        password: passwordHash,
      },
    });

    return client;
  }
}
