import Board from './Board.js';
import Player from './Player.js';
import Game from './Game.js';

import Checker from './Checker.js';

const board = new Board();
const player1 = new Player('Mateusz');
const player2 = new Player('Anna');

const checker1 = new Checker(player1);
console.log(checker1, checker1.name);

const game = new Game(board, player1, player2);
