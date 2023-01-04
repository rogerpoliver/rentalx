import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
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

export { CreateCategoryService };
