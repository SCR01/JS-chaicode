const coding = ["js",'ruby',"python","cpp"]

coding.forEach(function (val){
    //console.log(val);

})//callback function 

coding.forEach((came)=>{//arrow function
    //console.log(came)
})

function printMe(item){
    //console.log(item)
}

coding.forEach(printMe)// different way to call it

coding.forEach((item,index,arra)=>{
    console.log(item,index,arra)
})


const myCoding = [{langua:"js", languu:"javascript"
},
{langua:"jsx", languu:"javascriptxx"
},
{langua:"jsxxx", languu:"javascriptxxx"
}]
myCoding.forEach((item,ind,arrrrrr)=>{
    console.log(`Index:${ind}`)
    console.log(item.langua)
})