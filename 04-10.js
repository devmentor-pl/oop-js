// tak nie robimy!
// Array.prototype.shuffle = function() {
//     this.sort(() => Math.random() >= 0.5 ? 1 : -1); 
// }


function MoreThanArray() {
    // ...
}

MoreThanArray.prototype = new Array();
MoreThanArray.prototype.shuffle = function () {
    this.sort(() => Math.random() >= 0.5 ? 1 : -1);
}

const moreThanArray = new MoreThanArray();
moreThanArray.push(1, 2, 3, 4, 5);
moreThanArray.shuffle();

console.log(moreThanArray);

