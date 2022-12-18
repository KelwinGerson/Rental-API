import { Category } from "../model/Category";

//DTO -> Data transfer object
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class CategoriesRepository {
    private categories: Category[];
    
    // this é utilizado para mexer com atributos dentro da classe
    constructor() {
        this.categories = [];
    }

    create({name, description }: ICreateCategoryDTO): void {

    const category = new Category(); 

    Object.assign(category, {
        name,
        description,
        created_at: new Date()
    })

    this.categories.push(category);
    }
    
    // retorno da lista de categorias
    list(): Category[] {
        return this.categories;
    }
}

export { CategoriesRepository}