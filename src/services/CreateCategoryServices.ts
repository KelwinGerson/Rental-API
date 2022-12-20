import { CategoriesRepository } from "../repositories/CategoriesRepository";


// interface with informations which i need without a service know a request/response
interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {

    constructor(private categoriesRepository: CategoriesRepository) {}
        
    // destructuring assignment
    execute ({ name, description }: IRequest) {
    
        // check if category already exists
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        // if default true
        if (categoryAlreadyExists) {
            throw new Error("Category Already exists! Try with another name of category")
        }

        this.categoriesRepository.create({name, description})
        }
}

export { CreateCategoryService }