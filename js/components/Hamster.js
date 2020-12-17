import { Pet } from './Pet.js';

class Hamster extends Pet {
    constructor(vardas, spalva) {
        super(vardas, spalva);
        this.sound = 'Ham ham 🐹🐹';
    }

    introduce() {
        console.log('Looks like hamster is too busy to introce himself...');
    }
}

export { Hamster }