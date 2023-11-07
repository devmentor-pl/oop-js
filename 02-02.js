// const checker = {
//     color: 'white',
//     player: 'mateusz',
//     moves: [],
// }

function generateChecker(color) {
    return {
        color: color,
        player: 'mateusz',
        moves: [],
    }
}

const checker1 = generateChecker('white');
const checker2 = generateChecker('white');

console.log(checker1 === checker2);