import { Specification } from "../model/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "./ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {
    // table simulation db
    private specifications: Specification[];
    
    constructor() {
        this.specifications = [];
    }
    create({ description, name }: ICreateSpecificationDTO): void {
        const specification = new Specification();
        // throw new Error("Method not implemented.");
        
        Object.assign(specification, {
            name,
            description,
            create_at: new Date(),
        });
        
        // insert data in table
        this.specifications.push(specification)
        
    }
    // verify if name already exists
    findByName(name: string): Specification {
        const specification = this.specifications.find((specification) => specification.name === name);
        return specification;
    }
} 

export { SpecificationsRepository }