const myNum = [1,2,3,4,5,6,7,8,9]

const ans = myNum.map((num)=>num*4)
console.log(ans)//map 


//chaining
const ans2 = myNum.map((num)=>num*10)
.map((num)=>num/2).filter((num)=>num>=10)
console.log(ans2)//map and filter