import { Router } from 'express'
import { v4 as uuidV4, v1 as uuidV1 } from 'uuid';
import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", ( request, response) => {
    const { name, description } = request.body;

    categoriesRepository.create({name, description})

    console.log(categoriesRepository)

    return response.status(201).send();
})

export { categoriesRoutes  }