// if statement

if(true){
//code will execute
}

if(false){
    // code will not execute
}
//ex

const iss = true;
if(iss){
    if(3!=2){
console.log("true")
    }
    console.log("game on")//print 
}

const wiss = false;
/* if(wiss){
     if(3!=2){
console.log("true")
    }
    console.log("game off")//not print
}
const temp =44
if(temp<50){
    console.log("jsdhad")
} */

/*     const balance = 2000

    if(balance>500)  console.log("test");

    if(balance<500){
console.log("less than")}
else if (balance>5000) {
console.log("do dod")
}else if(balance != 1000){
console.log("aldfk")
}
else{
    console.log("failing")
} */
    

    const userLoggedIn = true
    const debitCard = true
    const loggedinFromEmail=true

    if(userLoggedIn && debitCard &&2!==3){
        console.log("let the guy enter")
    }


    if(loggedinFromEmail || loggedIn){
        console.log("user coming")
    }