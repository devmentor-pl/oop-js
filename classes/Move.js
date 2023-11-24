export default class Move {
    #forwardRight;    // ↗
    #forwardLeft;     // ↖
    #backwardRight;  // ↘
    #backwardLeft;   // ↙

    static factory(settings) { // YAGNI
        return new Move(settings)
    }

    static calculateMove(coordFrom, coordTo, inverse = 0) {
        const [rowFrom, colFrom] = coordFrom;
        const [rowTo, colTo] = coordTo;

        const row = inverse ? rowFrom - rowTo : rowTo - rowFrom;
        const col = inverse ? colFrom - colTo : colTo - colFrom;

        if (Math.abs(row) !== Math.abs(col)) {
            throw new Error('Invalid move');
        }

        const distance = {};

        if (row > 0) {
            if (col > 0) {
                distance.backwardRight = Math.abs(row);
            } else {
                distance.backwardLeft = Math.abs(row);
            }
        } else {
            if (col > 0) {
                distance.forwardRight = Math.abs(row);
            } else {
                distance.forwardLeft = Math.abs(row);
            }
        }

        return new Move(distance)
    }

    static isMatch(origin, move) {
        // Object.keys(origin) // => nie zwróci prywatnych pól
        const originKeys = Object.keys(origin.get());
        return originKeys.every(key => {
            const item = origin[key];

            if (item === move[key]) {
                return true;
            }

            return false;
        });
    }

    constructor({ forwardRight, forwardLeft, backwardRight, backwardLeft }) {
        this.#forwardRight = forwardRight;
        this.#forwardLeft = forwardLeft;
        this.#backwardRight = backwardRight;
        this.#backwardLeft = backwardLeft;
    }

    get forwardRight() {
        return this.#forwardRight;
    }

    get forwardLeft() {
        return this.#forwardLeft;
    }

    get backwardRight() {
        return this.#backwardRight;
    }

    get backwardLeft() {
        return this.#backwardLeft;
    }

    get() {
        const keys = ['forwardRight', 'forwardLeft', 'backwardLeft', 'backwardRight']
        const distance = {};
        keys.forEach(key => {
            if (typeof this[key] !== 'undefined') { // na polach prywatnych to nie zadziała!
                distance[key] = this[key];
            }
        });


        return distance;
    }
}