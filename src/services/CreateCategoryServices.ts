import { CategoriesRepository } from "../repositories/CategoriesRepository";


// interface with informations which i need without a service know a request/response
interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    // destructuring assignment
    execute ({ name, description }: IRequest) {
    const categoriesRepository = new CategoriesRepository();
    
    // check if category already exists
    const categoryAlreadyExists = categoriesRepository.findByName(name);
    // if default true
    if (categoryAlreadyExists) {
        throw new Error("Category Already exists! Try with another name of category")
    }

    categoriesRepository.create({name, description})
    }
}

export { CreateCategoryService }