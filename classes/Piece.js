import Move from './Move.js';

export default class Piece {
    _player;

    constructor(player) {
        this.player = player;
    }

    get name() {
        return this.constructor.name;
    }

    set player(value) {
        this._player = value;
    }

    get player() {
        return this._player;
    }

    isCorrectMove() {
        return true;
    }

    get availableMoves() {
        throw new Error('Implement this method!');
    }

    getMove(from, to, inverse) {
        const move = Move.calculateMove(from, to, inverse);
        console.log(from, to, inverse);
        console.log('wykonanych ruch:', move);
        return this.availableMoves.find(avMove => {
            console.log('porównuję z:', avMove);
            const isMatch = Move.isMatch(avMove, move);
            console.log('wynik:', isMatch);
            return isMatch;
        });
    }
}