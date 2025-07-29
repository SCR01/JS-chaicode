
var c = 300
let a  = 200//global scope
if(true){
    let a = 10
const b = 20
var c = 30
console.log(c, a)//block scope
}

console.log(a,c)

//nested scope

function one(){
    const username = "hites"
    function two(){
        const age = 10
        console.log(age);
    }
    //console.log(age);
    two()
}
one()

if(true){
    const usernew = "scr"
    if(usernew==="scr"){
        const bro = "reddy"
        console.log(usernew + bro)
    }
    //console.log(bro)
}
//console.log(usernew)

//few facts
console.log(doom(200))
function doom(num){ // non hoisting
    return num + 1
}



//console.log(addtwo(10)) can't access like this
const addtwo = function(num){ //hoisting way to declare
    return num + 10
}

console.log(addtwo(10))

