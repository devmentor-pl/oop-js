function Checker(color, player) {
    this.player = player;
    this.moves = [];
    this.color = color;

    Object.defineProperty(this, 'color', {
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
    });

    // this.color = color;
}

const checker = new Checker('white');
console.log(checker.color);

checker.color = 'black';
console.log(checker.color);