// app.js
import Board from './Board.js';

const board = new Board();
board.fieldsList[1][2] = 'test';
console.log(board.getField('12'));
console.log(board);