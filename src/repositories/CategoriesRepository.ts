import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoryRepositories {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): Category {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
    return category;
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const foundCategory = this.categories.find(
      (category) => category.name === name
    );
    return foundCategory;
  }
}

export { CategoryRepositories };
