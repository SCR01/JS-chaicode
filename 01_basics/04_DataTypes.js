// Primitive
 

const llol =  Symbol('llol');
const llol2 =  Symbol('llol');
console.log(llol === llol2); // false

const bigNumber = 823222229999n;
console.log(bigNumber + 1n); // 823222229999n

//Non - primitive
const heros = [
    "Thor",
    "Iron Man",
    "Captain America"
];
let myObj = {
    name: "John",
    age: 30,
    isHero: true,
    powers: heros,
    address: {
        city: "New York",
        country: "USA"
    }
}

const myfun = function() {
    console.log("Hello World");
}

const summer = null;
console.log(typeof summer);
console.log(typeof myObj); // object
console.log(typeof myfun); // function
console.log(typeof llol); // symbol