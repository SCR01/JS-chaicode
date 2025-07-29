/* function add(num1, num2){
    console.log(num1+num2)
}// not a right way to call ask for the return value


add(2,3) */

function add(num1, num2){
    let num3 = num1 + num2
    //console.log("scr")
    return num3
    console.log(hello)//unreachable code because we already return the value
}

const num3 = add(4,5)
//console.log("Result", num3)

//

function addi(num1, num2){/* 
    let num3 = num1 + num2
    console.log("scr") */
    return num1+num2
    console.log(hello)//unreachable code because we already return the value
}

//addi(4,5)

function LogIN(username="sam"){
    if(username===undefined){
console.log("plzz")
    }
    return `${username} Just logged in`
}

console.log(LogIN())// for this it will give undefined
console.log(LogIN("scr")) 

function calculateCarPrice(var1,var2,...num4){
    return num4

}

console.log(calculateCarPrice(42,44,55,555))

/* const user = {
    usernamesss:"hitu",
    pricedsaf:155
}

function handleObj(anyobject){
    console.log(`username is ${anyobject.usernamesss} and price is ${anyobject.pricedsaf}`);
}
handleObj(user) */

const load = {
    age: 22,
    dob: "11/12/2002",
    name: "brocode"
}

function lundum(nope){
    console.log(`hi ${nope.name}, thanks for clarifying your ${nope.age} and DOB ${nope.dob}`)
}

lundum(load)

const mynew = [200,400,500,600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(mynew))