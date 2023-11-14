function Piece(color, player) {
    // Checker => Piece.call(...) => this = checker
    this.color = color;
    this.player = player
    this.moves = [];
}

Piece.prototype.addMove = function (move) {
    this.moves.push(move);
}

function Checker(color, player) {
    // this = {}
    Piece.call(this, color, player);

    // return this;
}

Checker.prototype = Object.create(Piece.prototype);
Checker.prototype.constructor = Checker;


const checker = new Checker('white', 'Mateusz');
checker.addMove('61-52');
console.log(checker);