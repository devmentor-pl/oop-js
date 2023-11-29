import Move from './Move.js';

export default class Piece { // klasa abstrakcyjna
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

    get availableMoves() {
        throw new Error('Implement this method!');
    }

    getMove(from, to, inverse) {
        const move = Move.calculateMove(from, to, inverse);
        return this.availableMoves.find(avMove => {
            return Move.isMatch(avMove, move);;
        });
    }
}