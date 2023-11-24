import Board from './classes/Board.js';
import Field from './classes/Field.js';
import Player from './classes/Player.js';
import Checker from './classes/Checker.js';
import CheckersGame from './classes/CheckersGame.js';


const board = new Board();
const player1 = new Player('Mateusz');
const player2 = new Player('Anna');

board.setField('12', Field.factory(new Checker(player1)));
board.setField('45', Field.factory(new Checker(player1)));
board.setField('52', Field.factory(new Checker(player2)));
board.setField('61', Field.factory(new Checker(player2)));

const game = new CheckersGame(board, player1, player2);
game.start();
