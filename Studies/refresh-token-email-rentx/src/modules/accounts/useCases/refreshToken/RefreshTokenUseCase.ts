import auth from "@config/auth";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";
import { sign, verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

interface IPayload {
  sub: string;
  email: string;
}

@injectable()
export class RefreshTokenUseCase {
  constructor(
    @inject("UsersTokensRepository")
    private UsersTokensRepository: IUsersTokensRepository,
    @inject("dayjsDateProvider")
    private dataProvider: IDateProvider
  ) {}

  async execute(token: string) {
    const decode = verify(token, auth.secret_refresh_token) as IPayload;
    const user_id = decode.sub;

    decode.email;

    const userToken =
      await this.UsersTokensRepository.findByUserIdAndRefreshToken(
        user_id,
        token
      );

    if (!userToken) {
      throw new AppError("Refresh Token does not exists!");
    }

    await this.UsersTokensRepository.deleteById(userToken.id);

    const refresh_token_expires_date = this.dataProvider.addDays(
      auth.expiresIn_refresh_token_days
    );

    const refresh_token = sign(
      {
        email: decode.email,
      },
      auth.secret_refresh_token,
      {
        subject: user_id,
        expiresIn: auth.expiresIn_refresh_token,
      }
    );

    await this.UsersTokensRepository.create({
      expires_date: refresh_token_expires_date,
      refresh_token,
      user_id,
    });

    return refresh_token;
  }
}
