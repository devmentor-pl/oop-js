function Checker(color, player) {
    this.color = color;
    this.player = player;
    this.moves = [];
}

const checker = new Checker('white', 'Anna');
const result = delete checker.moves;

console.log(result);
console.log(checker);