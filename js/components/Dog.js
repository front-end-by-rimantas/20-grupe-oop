import { Pet } from './Pet.js';

class Dog extends Pet {
    constructor(vardas, spalva) {
        super(vardas, spalva);
        this.sound = 'Au au 🐕🐕';
    }
}

export { Dog }