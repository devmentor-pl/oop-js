import Game from './Game.js';
import Board from './Board.js';

export default class CheckersGame extends Game {
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

    start() {
        super.start();
        this.#board.print();
        console.log('Uruchamianie zakończone!');
    }
}