import { prisma } from "../../../../database/prismaClient";
import * as bcryptjs from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error("Username or password invalid!");
    }

    const passwordMatch = await bcryptjs.compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    const token = await sign({ username }, process.env.JWT_SECRET, {
      subject: client.id,
      expiresIn: "1d",
    });

    return { token };
  }
}
