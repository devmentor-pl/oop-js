import Board from './classes/Board.js';
import Player from './classes/Player.js';
import Game, { CheckersGame, PokerGame } from './classes/Game.js';

const board = new Board();
const player1 = new Player('Mateusz');
const player2 = new Player('Anna');

// const game = new Game(board, player1, player2);
const checkers = new CheckersGame(board, player1, player1);
checkers.start();

const poker = new PokerGame(['as', 'król'], player2, player2);
poker.start();

console.log(checkers, poker);



