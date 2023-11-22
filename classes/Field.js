import Piece from './Piece.js';

export default class Field {
    #piece;

    // static factory(...params) {
    //     return new Field(...params);
    // }

    constructor(piece = null) {
        this.piece = piece;
    }


    set piece(obj) {
        if (!obj instanceof Piece) {
            throw new Error(`Incorrect argument`)
        }

        this.#piece = obj;
    }

    get piece() {
        return this.#piece;
    }

    isEmpty() {
        return !this.piece;
    }

    setEmpty() {
        this.piece = null;
    }

    isPieceOwner(player) {
        if (this.piece) {
            return this.piece.player === player;
        }

        return false;
    }
} 