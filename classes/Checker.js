import Piece from './Piece.js';
import Move from './Move.js';

export default class Checker extends Piece {
    get availableMoves() {
        return [
            Move.factory({ forwardLeft: 1 }),
            Move.factory({ forwardRight: 1 }),
        ];
    }
}

