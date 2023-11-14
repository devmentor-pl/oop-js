function Piece(color, player) {
    this.color = color;
    this.player = player
    this.moves = [];
}

Piece.prototype.addMove = function (move) {
    this.moves.push(move);
}

function Checker(color, player) { }

Checker.prototype = Object.create(Piece.prototype);
// Checker.prototype = Object.create(Object.prototype);



const checker = new Checker('white', 'Mateusz');
console.log(checker);