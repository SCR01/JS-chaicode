//for 

for (let index = 0; index < 10; index++) {
    const element = index;
    if(index == 3){
        console.log("hi bhadu")
    }
    //console.log(element)
    
}

/* for (let index = 0; index <=10; index++) {
    console.log(`outer loop ${index}`)
    for(let j=0;j<=10;j++){
        console.log(index+'*'+j+'='+index*j);
    }
    
}  */


   /*  let my = ['batman', 'superman', 'hanuman']

    for (let index = 0; index < my.length; index++) {
        const element = my[index];
        console.log(element)
    }
 */

    ///break and continue

    /* for (let index = 1; index <=20; index++) {
        if(index==5){console.log('detected') 
            break;}
        console.log(`value of index is ${index}`);
        
    } */

        for (let index = 1; index <=20; index++) {
        if(index==5){console.log('detected') 
            continue;}
        console.log(`value of index is ${index}`);
        
    }