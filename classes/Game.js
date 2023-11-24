export default class Game {
    #player1;
    #player2;

    constructor(player1, player2) {
        this.#player1 = player1;
        this.#player2 = player2;
    }

    start() {
        console.log('Uruchamiam grę!');
    }
}
