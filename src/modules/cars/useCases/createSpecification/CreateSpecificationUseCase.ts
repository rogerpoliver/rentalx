import { ISpecificationsRepository } from "../../interfaces/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("This specification already exists.");
    }

    const specificationCreated = this.specificationsRepository.create({
      name,
      description,
    });

    return specificationCreated;
  }
}

export { CreateSpecificationUseCase };
