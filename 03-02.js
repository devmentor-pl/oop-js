function Checker(color, player) {
    this.color = color;
    this.player = player;
    this.moves = [];
}

const checker = new new Checker('white', 'Anna');

for (const key in checker) {
    console.log(key);
}

// for (const key in checker) {
//     const value = checker[key];
//     console.log(value);
// }

