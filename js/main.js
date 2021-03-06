// OBJEKTAS:
// - parametru rinkinys
// - funkcionalumo rinkinys

/*

Animal.js (params: name, color, sound; methods: voice(), introduce();)
    Pet.js (viska paveldi is Animal.js)
        Dog.js (viska paveldi is Pet.js)
        Cat.js (viska paveldi is Pet.js)
        Hamster.js (viska paveldi is Pet.js; params: canEatTillDeath)

    Bird.js (viska paveldi is Animal.js; params: wingsCount, canFly; methods: flyAway();)
        Chicken.js (viska paveldi is Bird.js)
        Parrot.js (viska paveldi is Bird.js)
        Eagle.js (viska paveldi is Bird.js)
        Dragonfly.js (viska paveldi is Bird.js; params: imposter=true;)

    Fish.js (viska paveldi is Animal.js; params: canSwim; methods: swimAway();)
        Goldfish.js (viska paveldi is Fish.js; params: grantsWishes; methods: makeWish();)
        Nemo.js (viska paveldi is Fish.js)

*/



import { Dog } from './components/Dog.js';
import { Cat } from './components/Cat.js';
import { Hamster } from './components/Hamster.js';

const rexas = new Dog('Rexas', 'brown');
rexas.introduce();

const rainis = new Cat('Rainis', 'brown');
rainis.introduce();

const cipsas = new Hamster('Cipsas', 'golden');
cipsas.introduce();