const checker = {
    // color: 'white',
    player: 'Anna',
    moves: [],
}

Object.defineProperty(checker, 'color',
    {
        value: 'white',
        writable: true,
        enumerable: false,
        configurable: true,
    },
);


console.log(Object.keys(checker));