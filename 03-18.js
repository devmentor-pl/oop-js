const checker = {
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
    player: 'Anna',
    moves: [],
};

checker.color = 'white';
console.log(checker);   
