//stack (primitive) , heap (non-primitive)

let myYoutubename = "CodeWithHarry";

let myYoutubeName2 = myYoutubename;
myYoutubeName2 = "CodeWithHarry2";
console.log(myYoutubename); // CodeWithHarry
console.log(myYoutubeName2); // CodeWithHarry

let hello = {
    name: "Harry",
    age: 25
}

console.log(hello); // { name: 'Harry', age: 25 }
let hello2 = hello;
hello2.age = 30;
hello2.name = "Harry2";
console.log(hello2); // { name: 'Harry2', age: 25 }