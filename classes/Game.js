import Board from "./Board.js";

export default class Game {
    #board;
    #player1;
    #player2;

    constructor(board, player1, player2) {
        this.board = board;
        this.#player1 = player1;
        this.#player2 = player2;
    }

    set board(value) {
        if (!(value instanceof Board)) {
            throw new Error('Invalid argument!');
        }

        this.#board = value;
    }
}