main()       // hoisting works with the main function


function main(){
    console.log("i'm hoisted")
}


console.log(add())   // hoisting works with the normal function 

function add(a=1,b=4)
{
    return a + b;
}


// hoisting works with main , and normal fun , parameter fun only 