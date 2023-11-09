const checker = {
    color: 'white',
    player: 'Anna',
    moves: [],
}

// function Checker(color, player) {   
//     this.color = color;
//     this.player = player;
//     this.moves = [];
// }

// const checker = new Checker('white', 'Anna');

const prototype = Object.getPrototypeOf(checker);
console.log(prototype);
console.log(prototype === checker.__proto__);


