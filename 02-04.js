function Checker(color, player) {
    // this = {};

    this.color = color;
    this.player = player;
    this.moves = [];

    // return this;
}


const checker1 = new Checker('white', 'mateusz');
const checker2 = new Checker('black', 'marek');

console.log(checker1, checker2);