const str1 = 'text';
const str2 = new String('text');

console.log(str2 === str1);
console.log(str2 == str1);
console.log(str2.valueOf() === str1);