/**const score = 40;
console.log(score); // 40

const nummm = new Number(34);
console.log(nummm); // [Number: 34]
console.log(typeof nummm); // object
console.log(nummm.toString()); // "34"
console.log(nummm.toFixed(1)); // "34.00"

const othernUm = 223.45;
console.log(othernUm.toPrecision(2)); // "23.5"

const  summm = 1000000;
console.log(summm.toLocaleString('en-IN')); // "1,000,000"*/

// ++++++++++++++ Maths ++++++++++++++++++//

/* console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.round(4.6)); // 5  
console.log(Math.abs(-4)); // 4
console.log(Math.ceil(4.5));
console.log(Math.floor(4.2));
console.log(Math.min(3,6,4,1,2)); // 1
console.log(Math.max(3,6,4,1,2)); // 6
console.log(Math.random()); // Random number between 0 and 1 */

console.log((Math.random() * 100) + 1); // Random number between 0 and 100

const  min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random number between 10 and 20