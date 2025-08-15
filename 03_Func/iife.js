//Immediately invoked function expressions

(function chai(){//names IIFE
    console.log(`Db connected`)//use it because of global scope pollution
})();//semiocolon for two IIFE

( (name)=>{//simple IIFE
    console.log(`dashfla bc ${name}`)
})("sharad")