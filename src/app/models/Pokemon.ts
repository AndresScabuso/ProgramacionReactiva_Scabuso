import { Move } from "./Move";

export class Pokemon {
    constructor(
        public id: number,
        public name: string,
        public height: number,
        public weight: number,
        public imageUrl: string
    ) 
    {}
    /*name:                     string;
    base_experience:          number;
    height:                   number;
    weight:                   number;
    moves:                    Move[];
    order:                    number;*/
}