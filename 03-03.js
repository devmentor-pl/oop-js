function Checker(color, player) {
    this.color = color;
    this.player = player;
    this.moves = [];
}

const checker = new Checker('white', 'Anna');

const { moves, player: pName } = checker;
moves.push('61-52');


console.log(moves, pName); //['61-52'] 'Anna'