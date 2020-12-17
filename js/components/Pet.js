class Pet {
    constructor(vardas, spalva) {
        this.name = vardas;
        this.color = spalva;
        this.sound = 'Miau au ham 🐱🐕🐹';
    }

    voice() {
        console.log(`${this.name}: ${this.sound}!`);
    }

    introduce() {
        console.log(`Hi, I am ${this.name}! I am ${this.color} and I make this sound: ${this.sound}!`);
    }
}

export { Pet }