import { Router } from "express";
import { CategoryRepositories } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const CategoriesRepository = new CategoryRepositories();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const categoryExists = CategoriesRepository.findByName(name);

  if (categoryExists) {
    return response
      .status(409)
      .json({ error: `The ${name} category already exists.` });
  }

  const categoryCreated = CategoriesRepository.create({ name, description });
  return response.status(201).json(categoryCreated);
});

categoriesRoutes.get("/", (_request, response) => {
  const categories = CategoriesRepository.list();
  return response.status(200).json(categories);
});

export { categoriesRoutes };
