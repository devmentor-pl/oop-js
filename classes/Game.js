import Board from "./Board.js";

export default class Game {
    #player1;
    #player2;

    constructor(player1, player2) {
        this.#player1 = player1;
        this.#player2 = player2;
    }
}

export class CheckersGame extends Game {
    #board;

    constructor(board, player1, player2) {
        super(player1, player2);

        this.board = board;
    }

    set board(value) {
        if (!(value instanceof Board)) {
            throw new Error('Invalid argument!');
        }

        this.#board = value;
    }
}

export class PokerGame extends Game {
    #cards;

    constructor(cards, player1, player2) {
        super(player1, player2);

        this.#cards = cards;
    }
}