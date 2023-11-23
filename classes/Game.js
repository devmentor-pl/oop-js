import Board from "./Board.js";

export default class Game {
    #player1;
    #player2;

    constructor(player1, player2) {
        this.#player1 = player1;
        this.#player2 = player2;
    }

    start() {
        console.log('Uruchamiam grę!');
    }

    // get player1() {
    //     return this.#player1;
    // }
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

    start() {
        super.start();
        console.log('Warcaby');

        // console.log(this.#player1, this.#player2); 
        // console.log(this.player1);
    }
}

export class PokerGame extends Game {
    #cards;

    constructor(cards, player1, player2) {
        super(player1, player2);

        this.#cards = cards;
    }

    start() {
        super.start();
        console.log('Poker');
        // console.log(this.player1);
    }
}