const marvel_heroes = ["IronMan", "thor", "spiderman"]
const dc = ["superman", "batman", "flash"]
/* marvel_heroes.push(dc) */
/* console.log(marvel_heroes)
console.log(marvel_heroes[3][1]) */
/* 
marvel_heroes.concat(dc)//concatenation
console.log(marvel_heroes) */

const hello = [...marvel_heroes, ...dc]//spread the array
console.log(hello)

const anarr = [1,2,3,[4,6,7],9,[4,5,[2,1]]]//multiple subarray
const an = anarr.flat(Infinity)//to go for the depth of no. of arrray inside the array
console.log(an)



console.log(Array.isArray("sharad"))//asking is this array ans false

console.log(Array.from("sharad"))//asking is this array got converted into it

console.log(Array.from({name: "sharad"}))//interesting got empty array

let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1,score2, score3))

let bro1 = "scr"
let bro2 = "baba"
    
console.log(Array.of(bro1,bro2))//convert multiple elements into array