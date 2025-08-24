//Truthy and falsy values
const email = []

if(email){
    console.log("yeah")
}else{
    console.log("not yeah")
}
//if value given it assumes truthy and give "yeah" else give "not yeah" on empty string
//falsy values

/* Falsy values =false, 0, -0, BigInt 0n, "", null, undefined, NaN

Truthy valuse = "0", 'false', " ", [],{}, function(){}
 */

//Nullish Coalescing operator (??) null undefined
let val1;

//val1 = null ?? 10

//val1 = undefined ?? 15

val1 = null??10??20

console.log(val1)

//Terniary operator

//condition ? true : false

const ice = 1000;
ice>= 80 ? console.log("hadsfh") : console.log("assdhfj")