import { IDateProvider } from "./../../../../shared/container/providers/DateProvider/IDateProvider";
import { IRentalsRepository } from "./../../repositories/IRentalsRepository";
import { AppError } from "@shared/errors/AppError";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { inject, injectable } from "tsyringe";

interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}

@injectable()
class CreateRentalUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository,
    @inject("DayjsDateProvider")
    private dataProvider: IDateProvider
  ) {}

  async execute({
    car_id,
    user_id,
    expected_return_date,
  }: IRequest): Promise<Rental> {
    const minimumHour = 24;

    const carAvailable = await this.rentalsRepository.findOpenRentalByCar(
      car_id
    );

    if (carAvailable) {
      throw new AppError("Car is unavailable");
    }

    const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(
      user_id
    );

    if (rentalOpenToUser) {
      throw new AppError("There's a rental in progress for user!");
    }

    const dateNow = this.dataProvider.dateNow();

    const compare = this.dataProvider.compareInHours(
      dateNow,
      expected_return_date
    );

    if (compare < minimumHour) throw new AppError("Invalid return time!");

    const rental = await this.rentalsRepository.create({
      user_id,
      car_id,
      expected_return_date,
    });

    return rental;
  }
}

export { CreateRentalUseCase };
