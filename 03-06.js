function Checker(color, player) {
    this.color = color;
    this.player = player;
    this.moves = [];
}

const checker = new Checker('white', 'Anna');
checker.moves.push('61-52');

const {
    moves: [firstMove, ...nextMoves]
} = checker;

console.log(firstMove);
console.log(nextMoves);




