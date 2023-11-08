const checker = {
    // color: 'white',
    player: 'Anna',
    moves: [],
}

Object.defineProperty(checker, 'color', {
    get() {
        return this._color;
    },
    set(value) {
        const correctColors = ['white', 'black'];
        if (!correctColors.includes(value)) {
            throw new Error('Invalid color');
        }

        this._color = value;
    },
    configurable: false,
});


// checker.color = 'red';
checker.color = 'white';
delete checker.color;
console.log(checker);


