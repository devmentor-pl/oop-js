function Checker(color, player) {
    // instance members

    this.color = color;
    this.player = player;
    this.moves = [];

    // this.addMove = function(move) {
    //     this.moves.push(move);
    // }
}

// prototype members
Checker.prototype.addMove = function (move) {
    this.moves.push(move);
}

const checker = new Checker('white', 'Anna');
checker.addMove('a2-a4');

console.log(checker);
