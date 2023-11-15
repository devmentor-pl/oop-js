// import Piece from './Piece.js';

function Piece(player) {
    Object.defineProperty(this, 'player', {
        get() {
            return this._player;
        },
        set(value) {
            this._player = value;
        }
    });

    Object.defineProperty(this, 'name', {
        get() {
            return this.constructor.name;
        }
    });

    this.player = player;
}

// export default class Checker extends Piece { }

export default function Checker(player) {
    Piece.call(this, player); // => this.player = player
}

Checker.prototype = Object.create(Piece.prototype);
Checker.prototype.constructor = Checker;
