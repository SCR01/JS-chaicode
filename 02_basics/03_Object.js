//singleton
//object literals
//Object.create
const mySym = Symbol("loki")
const mysym2 = Symbol('babu')
const jsUser = {
    name:"hitu",
    [mySym] : "bhadu",//way to define symbol
    [mysym2]:"babu",
    "FUll Name": "Sharad Chandra Reddy",
    email :"sharadreddy12@gmail.com",
    age:"12",
    arrrr : ["hello"],
}

jsUser.name = "scr"
console.log(jsUser.email)
console.log(jsUser["FUll Name"])//right way to access object any specific variable
console.log(jsUser)

//Object.freeze(jsUser)//freeze the object can't change the value
jsUser.name = "Kappor"
console.log(jsUser.name) 

jsUser.greeting = function(){
    console.log("hello js user");

}

jsUser.greeting2 = function(){
    console.log(`Hello brother, ${this["FUll Name"]}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greeting2())
