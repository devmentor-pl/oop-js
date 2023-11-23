import Board from './classes/Board.js';
import Player from './classes/Player.js';
import Game, { CheckersGame, PokerGame } from './classes/Game.js';

const board = new Board();
const player1 = new Player('Mateusz');
const player2 = new Player('Anna');

// const game = new Game(board, player1, player2);
const checkers = new CheckersGame(board, player1, player2);
const poker = new PokerGame(board, player1, player2, ['as', 'król']);
console.log(checkers, poker);