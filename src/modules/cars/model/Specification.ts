import { v4 as uuidV4, v1 as uuidV1 } from 'uuid';


class Specification {
    
    id?: string;
    name: string;
    description: string;
    created_at: Date;

    // check if id exists
    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Specification }