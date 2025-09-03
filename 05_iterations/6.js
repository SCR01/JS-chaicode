const coding = ["js", "html", "css"]

/* const bba = coding.forEach((item)=>{
  console.log(item)
  return item
})

console.log(bba) */


const myNums = [1,2,3,5,6,7]

const hello =myNums.filter((num) =>num>4)// one way
console.log(hello )

const hello2 =myNums.filter((num) =>{  // another way if you one the scope you need to add return keyword
  return num > 4
})

/* const hello3 = myNums.forEach((num)=>{
  if(num>2){
   hello3.push(num) // this will give error as forEach does not return anything
  }
  
})
console.log(hello3)
console.log(hello2) */

//filter
const books = [
  {title:"book1", author:"author1", year:1991},
  {title:"book2", author:"author2", year:2001},
  {title:"book3", author:"author3", year:2011},
  {title:"book4", author:"author4", year:2021},
]

const userBooks = books.filter((book)=> book.author ==="author1")

console.log(userBooks)

const userBooks2 = books.filter((bk)=>{
  return bk.year>1999})
console.log(userBooks2)