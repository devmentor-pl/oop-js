import Printer from './Printer.js';

export default class Board {
    #fieldsList = [
        ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
        ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
        ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
        ['30', '31', '32', '33', '34', '35', '36', '37', '38', '39'],
        ['40', '41', '42', '43', '44', '45', '46', '47', '48', '49'],
        ['50', '51', '52', '53', '54', '55', '56', '57', '58', '59'],
        ['60', '61', '62', '63', '64', '65', '66', '67', '68', '69'],
        ['70', '71', '72', '73', '74', '75', '76', '77', '78', '79'],
        ['80', '81', '82', '83', '84', '85', '86', '87', '88', '89'],
        ['90', '91', '92', '93', '94', '95', '96', '97', '98', '99'],
    ];


    getField = function (coords) {
        if (!this.isCorrectCoords(coords)) {
            throw new Error('Incorrect coords!');
        }

        const [rowIndex, colIndex] = coords;

        return this.#fieldsList[rowIndex][colIndex];
    }

    setField = function (coords, value) {
        if (!this.isCorrectCoords(coords)) {
            throw new Error('Incorrect coords!');
        }

        // const [rowIndex, colIndex] = coords; 
        const rowIndex = this.#getRowIndex(coords);
        const colIndex = this.#getColIndex(coords);

        this.#fieldsList[rowIndex][colIndex] = value;
    }

    isCorrectCoords = function (coords) {
        return /^[0-9]{2}$/i.test(coords);
    }

    move(notation, player) {
        const [from, to] = notation.split('-'); // 61-52 => from=61, to=52
        if (!this.isCorrectCoords(from)) {
            throw new Error('Incorrect coords (from)');
        }

        if (!this.isCorrectCoords(to)) {
            throw new Error('Incorrect coords (to)');
        }

        const fieldFrom = this.getField(from);
        const fieldTo = this.getField(to);

        if (fieldFrom.isEmpty()) {
            throw new Error('This field is empty!');
        }

        if (!fieldFrom.isPieceOwner(player)) {
            throw new Error('You can\'t move this piece!');
        }

        const piece = fieldFrom.piece;
        if (!piece.isCorrectMove(
            from,
            to,
            player
        )
        ) {
            throw new Error('This move is not correct!');
        }

        fieldTo.piece = fieldFrom.piece; // zamierzona referencja
        fieldFrom.setEmpty(); // "niszczymy" referencje
    }

    print() {
        const printer = new Printer();
        printer.run(this.#fieldsList);
    }

    #getRowIndex(coords) {
        const [rowIndex] = coords;

        return rowIndex;
    }

    #getColIndex(coords) {
        const [, colIndex] = coords;

        return colIndex;
    }
}