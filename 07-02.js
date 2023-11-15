import Board from './Board.js';

const board = new Board();
// board.#fieldsList[1][2] = 'test';
board.setField('12', 'ok')
console.log(board.getField('12'));
console.log(board);