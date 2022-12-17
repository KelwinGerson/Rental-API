import { Router } from 'express'
import { v4 as uuidV4, v1 as uuidV1 } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/", ( request, response) => {
    const { name, description } = request.body;

    const category = {
        id: uuidV4(),
        name,
        description
    }

    categories.push(category);

    console.log(categories)

    return response.status(201).send()
})


export { categoriesRoutes  }