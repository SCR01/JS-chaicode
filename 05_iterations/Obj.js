const objj = {
    js: "javascript", cpp:"C++", py:"python", rb:"ruby", swift:"swift"
}

for (const key in objj) {
    console.log(`${key} is the better to get values: ${objj[key]}`);
}

const pro = ["js","cpp","py"]

for (const key in pro) {
    console.log(pro[key])
}

const map = new Map()

map.set('IN', "India")
map.set('USA',"United States of America")
map.set('Fr','France')

for (const [key,value] in map){
    console.log(key)//not iterable for "For in"
}