import Board from './Board.js';
import Player from './Player.js';
import Game from './Game.js';

const board = new Board();
const player1 = new Player('Mateusz');
const player2 = new Player('Anna');

const game = new Game({ type: 'board' }, player1, player2);
console.log(game);