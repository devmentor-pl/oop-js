class GameAbstract { /* klasa abstrakcyjna */
    _name;

    constructor(name) {
        this._name = name;
        console.log(`Init ${this._name} game`);
    }

    start() {
        throw new Error('Implement start() method!');
    }
}

class CheckersGame extends GameAbstract {
    constructor() {
        super('Checkers');
    }

    start() {
        // super.start();
        /* przygotuj bierki */
    }
}

class PokerGame extends GameAbstract {
    constructor() {
        super('Poker');
    }

    start() {
        // super.start();
        /* rozdaj karty */
    }
}

const checkers = new CheckersGame();
checkers.start();