//const tinderUser = new Object() singelton object


const tinderUser = {} // non-singleton

tinderUser.id = "123"
tinderUser.name = "babbu"
tinderUser.isLoggedIn = false

 const regular ={
    name: "baba",
    game:{
        
       userfull:{
        firstname: "rahul",
        lastname: "reddy"
       }
    }
} 
 
console.log(regular.game)

 const onj1 = {
    1:"a",2:"b"
}
const onj2 = {
    3:"a",4:"2"
}

const obj3 = Object.assign({}, onj1, onj2)//better syntax
const obj31 = {...onj1,...onj2}//easy syntax
console.log(obj3) 
console.log(obj31)
const users = [{
        id: 1,
        email: "hello123@gmail.com"
    },
    {
        id:2,
        lol:"lksdjf@gamil.com"
    }
]
    

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))