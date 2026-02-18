const fs = require("fs");

console.log("original data in the file:")

fs.readFile("hello.txt","utf-8",function(err,data) {

    if(err)
    {
        throw err;
    }
    else{
    console.log(data)
    }
}
)

fs.writeFile("hello.txt", "jay ganesh", "utf-8",function(err,data){
         if(err) 
         {
            throw err;
         }
         else
         {
            console.log(data)
         }
}

)

fs.readFile("hello.txt","utf-8",function(err,data) {

    if(err)
    {
        throw err;
    }
    else{
    console.log(data)
    }
}
)







// ask this console inside the console 
// console.log("Outer log:", console.log("Inner log",a));

