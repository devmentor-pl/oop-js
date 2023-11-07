function Checker(color, player) {
    // this = {};

    this.color = color;
    this.player = player;
    this.moves = [];

    this.compare = function (obj) {
        console.log(this === obj);
    }

    // return this;
}


const checker1 = new Checker('white', 'mateusz');
const checker2 = new Checker('black', 'marek');

console.log(checker1, checker2);

/* kontekst => */ checker1.compare(checker1); // => this === checker11
/* kontekst => */ checker2.compare(checker1); // => this === checker12