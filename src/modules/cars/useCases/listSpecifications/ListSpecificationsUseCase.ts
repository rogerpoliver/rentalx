import { ISpecificationsRepository } from "../../interfaces/ISpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute() {
    const specifications = this.specificationsRepository.list();

    return specifications;
  }
}

export { ListSpecificationsUseCase }