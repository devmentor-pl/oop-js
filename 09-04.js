import Board from './classes/Board.js';
import Player from './classes/Player.js';
import Game from './classes/Game.js';
import Field from './classes/Field.js';
import Checker from './classes/Checker.js';

const board = new Board();
const player1 = new Player('Mateusz');
// const player2 = new Player('Anna');
// const game = new Game(board, player1, player2);

board.setField('61', Field.factory(new Checker(player1)));
board.setField('52', Field.factory());

board.move('61-52', player1);
console.log(board.getField('61'));
console.log(board.getField('52'));
