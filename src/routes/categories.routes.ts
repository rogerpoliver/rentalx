import { Router } from "express";
import { CategoryRepositories } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../service/CreateCategoryService";

const categoriesRoutes = Router();
const CategoriesRepository = new CategoryRepositories();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateCategoryService(CategoriesRepository);
  const categoryCreated = createCategoryService.execute({name, description});
  return response.status(201).json(categoryCreated);
});

categoriesRoutes.get("/", (_request, response) => {
  const categories = CategoriesRepository.list();
  return response.status(200).json(categories);
});

export { categoriesRoutes };
