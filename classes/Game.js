import Board from "./Board.js";

export default class Game {
    #player1;
    #player2;

    #board; // dla warcabów
    #cards; // dla pokera

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


export class CheckerGame extends Game {

}

export class PokerGame extends Game {

}