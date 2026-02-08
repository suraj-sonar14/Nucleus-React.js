

   //Normal Function

function add1(a,b)
{
    return a+b;
}

   // Arrow function

let add2 = (a,b) =>{
    return a+b;
}


  //   Variable function 

let add3 = function(a,b){
    return a+b;
}


function main(){
    console.log(add1(10,11))
    console.log(add2(10,11))
    console.log(add3(10,11))
}

main()
