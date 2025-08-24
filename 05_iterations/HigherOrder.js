//for of 

const arr = [1,2,3,4,5]

for(const num of arr){
//console.log(num)
}

const greeting = "hello lol"

for(const greet of greeting){
    console.log(greeting)
   // console.log(`Each char is ${greet} `)
} 

    //Maps

    const map = new Map()

    map.set('IN', "india")
    map.set('USA',"united states")
    map.set('fra',"france")
    map.set('fra',"france")

    console.log(map)

    //implementing for of on map

    for (const [key, value] of map) {
        console.log(key,':-', value)
    }