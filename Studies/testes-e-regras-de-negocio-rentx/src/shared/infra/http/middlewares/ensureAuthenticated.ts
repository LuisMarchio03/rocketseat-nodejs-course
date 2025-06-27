import { AppError } from "@shared/errors/AppError";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  //Bearer 43g4jhu3ghjghjgad54sdadfdvbvcb
  //[0] Bearer
  //[1] 43g4jhu3ghjghjgad54sdadfdvbvcb
  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "4537944749aa8d900ac3d1cdb625fff7"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exists!", 401);
    }

    // Necessário para o update do user avatar
    request.user = {
      id: user_id,
    };
    // End update user avatar

    next();
  } catch {
    throw new AppError("Invalid token", 401);
  }
}
