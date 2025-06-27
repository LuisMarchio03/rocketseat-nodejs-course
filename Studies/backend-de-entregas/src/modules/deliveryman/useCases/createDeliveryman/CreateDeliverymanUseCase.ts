import { prisma } from "../../../../database/prismaClient";
import * as bcryptjs from "bcryptjs";

interface CreateDeliverymanInput {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  async execute({ password, username }: CreateDeliverymanInput) {
    const deliverymanAlreadyExists = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (!deliverymanAlreadyExists) {
      throw new Error("Deliveryman already exists");
    }

    const passwordHash = await bcryptjs.hash(password, 10);

    const deliveryman = await prisma.deliveryman.create({
      password: passwordHash,
      username,
    });

    return deliveryman;
  }
}
