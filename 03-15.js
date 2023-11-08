const checker = {
    // color: 'white',
    player: 'Anna',
    moves: [],
}

Object.defineProperty(checker, 'color',
    {
        value: 'white',
        writable: false,
        enumerable: true,
        configurable: true,
    },
);

checker.color = 'black';
console.log(checker);