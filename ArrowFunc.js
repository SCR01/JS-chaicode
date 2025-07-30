const user={
    name:"scrrr",
    age: 10,
    lodu : function(){
        console.log(`${this.name} hi bsdk, welcome to the club`);
        console.log(this)
    }
}
user.lodu()
user.name = "bro"
user.lodu()
console.log(this);

/* function baba(){
    let username = "brooo"
    console.log(this)//declaration in function
    console.log(this.username)
} */
//baba()

const coffee = () =>{
    let uder = "yodha"
    console.log(this.uder)
}

/* const addTwo = (num1 ,num2) => {
    return (num1 + num2)
    
} */

    const addTwo = (num1 ,num2) => (num1 + num2) //implicit return

console.log(addTwo(2,3))
const addTwo1 = (num1 ,num2) => ({username: "rahul"}) //object return

console.log(addTwo1(2,3))


