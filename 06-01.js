import Board from './Board.js';

try {
    const board = new Board();
    console.log(board.getField('12'));
} catch (e) {
    console.error(e.message);
}