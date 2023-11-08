function Checker(color, player) {
    this.color = color;
    this.player = player;
    this.moves = [];
}

const checker = new Checker('white', 'Anna');

const { moves, ...others } = checker;
moves.push('61-52');

console.log(others);
// {color: 'white', player: 'Anna'}