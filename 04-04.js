function Checker(color, player) {
    this.color = color;
    this.player = player;
    this.moves = [];
}

const checker = new Checker('white', 'Anna');
console.log(checker.toString());

const prototype = Object.getPrototypeOf(checker);
console.log(checker);
console.log('toString' in checker, 'in checker');
console.log('toString' in prototype, 'in prototype');

console.log(Object.getOwnPropertyNames(checker), 'checker own property names');
console.log(Object.getOwnPropertyNames(prototype), 'prototype own property names')
