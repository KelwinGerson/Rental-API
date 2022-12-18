import { Router } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    // check if category already exists
    const categoryAlreadyExists = categoriesRepository.findByName(name);
    // if default true
    if (categoryAlreadyExists) {
        return response.status(400).json({ error: "Category Already exists! Try with another name of category "})
    }

    categoriesRepository.create({name, description})

    console.log(categoriesRepository)

    return response.status(201).send();
})

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();

    return response.json(all);
})

export { categoriesRoutes  }