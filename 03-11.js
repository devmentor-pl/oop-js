function Checker(color, player) {
    this.color = color;
    this.player = player;
    this.moves = [];
}


const checker = new Checker('white', 'Anna');

// for(const value of Object.values(checker)) {
//     console.log(value);
// }

// for(const key of Object.keys(checker)) {
//     console.log(key);
// }

for (const entry of Object.entries(checker)) {
    const [key, value] = entry;
    console.log(key, value);
}