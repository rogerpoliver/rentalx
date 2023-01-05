import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/service/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(specificationsRepository);
  const specificationCreated = createSpecificationService.execute({ name, description });
  return response.status(201).json(specificationCreated);
});

specificationsRoutes.get("/", (_request, response) => {
  const specifications = specificationsRepository.list();
  return response.status(200).json(specifications);
});

export { specificationsRoutes };
