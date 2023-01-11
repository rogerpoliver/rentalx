import { ICategoriesRepository } from "../../interfaces/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("This category already exists.");
    }

    const categoryCreated = this.categoriesRepository.create({
      name,
      description,
    });

    return categoryCreated;
  }
}

export { CreateCategoryUseCase };
