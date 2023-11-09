function Checker(color, player) {
    this.color = color;
    this.player = player;
    this.moves = [];
}

const checker = new Checker('white', 'Anna');

for (const propName in checker) {
    console.log(`${propName} => ${checker[propName]}`);
}

// for (const value of checker) {

// }