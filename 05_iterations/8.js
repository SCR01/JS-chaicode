//Reduce

const news = [1,2,4,5]
/* 
const ans = news.reduce(function(acc, currVal){
    return acc + currVal
}, 2)

console.log(ans) */

//Arrow Functiom

const ans2 = news.reduce((acc, currVal)=>{
    console.log(`acc is ${acc} and currVal ${currVal}`)
    return acc + currVal
},69)

console.log(ans2)

const shoppingCart = [
    {item:"shoes",price:4000, qty:1},
    {item:"pants",price:3000, qty:2},
    {item:"kurta",price:2000, qty:3},
]

const ans22 = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(ans22)