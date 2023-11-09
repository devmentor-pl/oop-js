function Checker(color, player) {
    this.color = color;
    this.player = player;
    this.moves = [];
}

Checker.prototype.addMove = function (move) {
    this.moves.push(move);
}

const checker = new Checker('white', 'Anna');

for (const key in checker) {
    console.log(key, checker[key]);
}
// color, player, moves, addMove

console.log(Object.keys(checker));
// color, player, moves
