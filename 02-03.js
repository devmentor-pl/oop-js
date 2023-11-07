// function generateChecker(color) {  
//     return {
//         color: color,
//         player: 'mateusz',
//         moves: [],
//     }
// }

function generateChecker(color, player) {
    return {
        color,
        player,
        moves: [],
    }
}

const checker1 = generateChecker('white', 'mateusz');
const checker2 = generateChecker('white', 'mateusz');

console.log(checker1 === checker2);
console.log(checker1, checker2);