import generateName from "sillyName";

import superheroes from "superheroes";

// var generateName = require("sillyname");
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

var randomHero = superheroes.random();

console.log(`I am ${randomHero}`);