import { prisma } from "../../../../database/prismaClient";
import * as bcryptjs from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error("Username or password invalid!");
    }

    const passwordMatch = await bcryptjs.compare(
      password,
      deliveryman.password
    );

    if (!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    const token = await sign({ username }, process.env.JWT_SECRET, {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return { token };
  }
}
