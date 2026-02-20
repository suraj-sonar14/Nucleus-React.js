const fs = require("fs");

const path = require("path")
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



  
 function path_exists(name)
 {
      let new_name = path.join(name);
     // let new_path = fs.existsSync(new_name);
      
      fs.statSync(new_name,(err,stats)=>{
         
             if(err)
             {
                 throw err;
             }
      })

      if(stats.isFile())
      {
           return "this file is already exist";
      }
      else
      {
            if(stats.isDirectory())
            {
                return "this directory is already exist";
            }
            else
            {
                return "No " + name + "of file or directory exists."
            }
      }

 }


function main()
{
       console.log(path_exists("demo2.txt"))
}

main();
// ask this console inside the console 
// console.log("Outer log:", console.log("Inner log",a));

