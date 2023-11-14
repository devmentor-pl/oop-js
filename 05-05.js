function Checher(color, player) {
    this.color = color;
    this.player = player;
    this.moves = [];
}

Checher.prototype.addMove = function (move) {
    this.moves.push(move)
}

function King(color, player) {
    this.color = color;
    this.player = player;
    this.moves = [];
}

King.prototype.addMove = function (move) {
    this.moves.push(move)
}

const checker = new Checher('white', 'Mateusz');
const king = new King('black', 'Anna');