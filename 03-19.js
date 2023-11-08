function Checker(color, player) {
    // this.color = color;
    this.player = player;
    this.moves = [];


    Object.defineProperty(this, 'color', {
        get() {
            return this._color || color;
        },
        set(value) {
            const correctColors = ['white', 'black'];
            if (!correctColors.includes(value)) {
                throw new Error('Invalid color');
            }

            this._color = value;
        },
    });
}

const checker = new Checker('white');
console.log(checker.color);

checker.color = 'black';
console.log(checker);