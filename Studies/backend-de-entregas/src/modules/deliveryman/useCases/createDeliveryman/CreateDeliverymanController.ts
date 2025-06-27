import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";

export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { password, username } = request.body;

    const createDeliverymanUseCase = new CreateDeliverymanUseCase();

    const deliveryman = await createDeliverymanUseCase.execute({
      password,
      username,
    });

    return response.status(201).json(deliveryman);
  }
}
