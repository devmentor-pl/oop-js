import Piece from './Piece.js';

export default class King extends Piece {
    get availableMoves() {
        return [
            Move.factory({ forwardLeft: 0 }),
            Move.factory({ forwardRight: 0 }),
            Move.factory({ backwardRight: 0 }),
            Move.factory({ backwardLeft: 0 }),
        ];
    }
}
