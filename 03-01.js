function Checker(color, player) {
    this.color = color;
    this.player = player;
    this.moves = [];
}


const checker = new Checker('white', 'Anna');

console.log(checker.color);
console.log(checker['color']);

// const propName = 'color';
// console.log(checker.propName);
// console.log(checker[propName]);

