let name = "Harry";
let age = 223;


//console.log(name + age + "hellowjsdfj");

console.log(`My name is ${name} and my age is ${age}`); // My name is Harry and my age is 223

const bro = new String("SC-R");
console.log(bro[1]); // [String: 'SCR']
console.log(bro.__proto__); // String {}
console.log(bro.length); // 3
console.log(bro.toUpperCase()); // SCR
console.log(bro.toLowerCase()); // scr  
console.log(bro.normalize()); // SCR
console.log(bro.indexOf("C")); // 1

const newstr = bro.substring(0, 2);
console.log(newstr); // SC

const ano = bro.slice(-1,3);
console.log(ano); // SCR

const trimmer = " theMAn ";
console.log(trimmer);
console.log(trimmer.trim()); // theMAn


const bra = "http://www.codewithharry.comakjdsfljajlfjdaslkdfj";
console.log(bra.replace("comakjdsfljajlfjdaslkdfj", "com")); // https://www.codewithharry.comakjdsfljajlfjdaslkdfj
console.log(bra.includes("codewithharry")); // true
