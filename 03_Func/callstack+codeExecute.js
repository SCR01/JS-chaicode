//JAVASCRIPT EXECUTION CONTEXT

    //  Global EC
    // Function EC
    //Eval EC (just mentioning)


    //-----------------Steps------------

    //-> Memory CP (creation phase)
    //-> Execution Phase

    //for specific function execution new exection phase will be created where again it setup (New variable environment + Execution Thread)

    let val1 = 10;
    let val2 = 20;

    function addnum(num1,num2){
        let total = num1 + num2
        return total
    }

    let ans1 = addnum(val1,val2)
    let ans2 = addnum(2,4)
    console.log(ans1)
    console.log(ans2)

    //whenever we call the funciton it will make new environmental variable + execution thread

    