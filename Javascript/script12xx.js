// higher order fun

// First class fun

// call back fun

// closures



function hello(abc){    // higher order fun , 
     
   return abc();           

}



hello(function(a=9, b=8)     // first class fun  
   {
       console.log(a+b);
   }

)




