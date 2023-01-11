import { Request, Response } from "express"; 
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const specificationCreated = this.createSpecificationUseCase.execute({
      name,
      description,
    });

    return response.status(201).json(specificationCreated);
  }
}

export { CreateSpecificationController };
