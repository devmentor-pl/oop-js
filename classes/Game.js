export default class Game {
    #playersList = []

    constructor() {
        // konstruktor nic nie robi
        // więc nie musielibyśmy go pisać
    }

    addPlayer(player) {
        this.#playersList.push(player);
    }

    get playersList() { // aby mieć dostęp do danych w dziecku
        return this.#playersList;
    }

    start() {
        console.log('Uruchamiam grę!');
    }
}
