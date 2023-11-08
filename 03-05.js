function Checker(color, player) {
    this.color = color;
    this.player = player;
    this.moves = [];
}

const checker = new Checker('white', 'Anna');

const { moves } = checker;
moves.push('61-52');

const [firstMove, ...nextMoves] = moves;
console.log(firstMove);
console.log(nextMoves);





