import Board from './classes/Board.js';
import Player from './classes/Player.js';
import Game from './classes/Game.js';
import Field from './classes/Field.js';
import Checker from './classes/Checker.js';

const board = new Board();
const player1 = new Player('Mateusz');
const player2 = new Player('Anna');

board.setField('12', Field.factory(new Checker(player1)));

const game = new Game(board, player1, player2);

console.log(board.getField('12'));
