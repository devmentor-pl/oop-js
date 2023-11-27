export default class Game {
    // _playersList = [];

    // addPlayer(player) {
    //     this._playersList.push(player);
    // }
}

export class CheckersGame extends Game {
    // _board = null;
    // _playersList = [];
}

const playersImpl = {
    addPlayer(player) {
        if (typeof this._playersList === 'undefined') {
            this._playersList = [];
        }

        this._playersList.push(player);
    }
}

const boardImpl = {
    setBoard(value) {
        if (!(value instanceof Board)) {
            throw new Error('Invalid argument!');
        }

        this._board = value;
    }
}

Object.assign(CheckersGame.prototype, playersImpl);
Object.assign(CheckersGame.prototype, boardImpl);


import Board from './classes/Board.js';
import Player from './classes/Player.js';

const board = new Board();
const player1 = new Player('Mateusz');
const player2 = new Player('Anna');

const game = new CheckersGame();
game.setBoard(board);
game.addPlayer(player1);
game.addPlayer(player2);

console.log(game);