import { Router } from 'express'
import { PostgresCategoriesRepository } from '../modules/cars/repositories/PostgresCategoriesRepository';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();
const categoriesRepository = new PostgresCategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    return CreateCategoryController.handle(request, response);
})

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();

    return response.json(all);
})

export { categoriesRoutes  }