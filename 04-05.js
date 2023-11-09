function Checker(color, player) {
    this.color = color;
    this.player = player;
    this.moves = [];
}

const checker1 = new Checker('white', 'Anna');
const checker2 = new Checker('white', 'Anna');

const prototype1 = Object.getPrototypeOf(checker1);
const prototype2 = Object.getPrototypeOf(checker2);

console.log(checker1 === checker2, 'checkers');
console.log(prototype1 === prototype2, 'prototypes');
