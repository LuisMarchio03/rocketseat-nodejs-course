import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExits = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExits) {
      throw new AppError("Category already exists!");
    }

    return this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
