import Board from './classes/Board.js';
import Field from './classes/Field.js';
import Player from './classes/Player.js';
import Checker from './classes/Checker.js';
import CheckersGame from './classes/CheckersGame.js';

const player1 = new Player('Mateusz');
const player2 = new Player('Anna');

const board = new Board();
board.setField('12', Field.factory(new Checker(player1)));
board.setField('45', Field.factory(new Checker(player1)));
board.setField('52', Field.factory());
board.setField('61', Field.factory(new Checker(player2)));
board.move('61-52', player2, 0);

const game = new CheckersGame(board);
game.addPlayer(player1);
game.addPlayer(player2);
game.start();

console.log(game.playersList);
