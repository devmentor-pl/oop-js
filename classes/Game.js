export default class Game {
    #playersList = []

    addPlayer(player) {
        this.#playersList.push(player);
    }

    get playersList() { 
        return this.#playersList;
    }

    start() {
        console.log('Uruchamiam grę!');
    }
}
