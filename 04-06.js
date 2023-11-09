function Checker(color, player) {
    this.color = color;
    this.player = player;
    this.moves = [];
}

const checker1 = new Checker('white', 'Anna');
const checker2 = new Checker('white', 'Anna');

console.log(Checker.prototype === Object.getPrototypeOf(checker1));
console.log(Checker.prototype === Object.getPrototypeOf(checker2));
