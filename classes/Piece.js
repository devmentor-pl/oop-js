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
}