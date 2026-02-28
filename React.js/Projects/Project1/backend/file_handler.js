const { dir, Console } = require("console");
const fs = require("fs");

const path = require("path");
//console.log("original data in the file:")

// fs.readFile("hello.txt","utf-8",function(err,data) {

//     if(err)
//     {
//         throw err;
//     }
//     else{
//     console.log(data)
//     }
// }
// )

// fs.writeFile("hello.txt", "jay ganesh", "utf-8",function(err,data){
//          if(err) 
//          {
//             throw err;
//          }
//          else
//          {
//             console.log(data)
//          }
// }

// )

// fs.readFile("hello.txt","utf-8",function(err,data) {

//     if(err)
//     {
//         throw err;
//     }
//     else{
//     console.log(data)
//     }
// }
// )

function Check_file_dir(name)
{
    let new_path = path.join(__dirname,name);
    let end = fs.existsSync(new_path);
    console.log(end);
    if(end)
    {
        let info = fs.statSync(name);
    }
    else
    {
         
        return "file or dir not exist with the name " +name;
    }
    
    //  if(info.isFile())
    //  {
    //     return "file exist with name : " + name;
    //  }
    //  else
    //  {
    //     if(info.isDirectory())
    //     {
    //         //console.log("directory exists with the name: " + filename);
    //         return "directory exist with name :" + name ;
    //     }
    //     else
    //     {
    //         return "No name of file or directory exist with name :" + name;
    //     }
    //  }
}

function path_exists(name)
{
    let info = null
    let new_path = path.join(__dirname,name);
    let new_path_exists = fs.existsSync(new_path);
    if(new_path_exists)
    {
         info = fs.statSync(name);
    }
    else
    {
        return "not exist with the name: " + name;
    }

    if(info.isFile())
    {
        return "file exist with name : " + name;
    }
    else
    {
        if(info.isDirectory())
        {
            return "directory exist with name :" + name ;
        }
    }
}

function createfile(dirname,filename,data )
{
   if(dirname="")
   {
     return "must select the directory";
   }
   
   let file_path = null;
   let new_path = path.join(__dirname,dirname);
   console.log(new_path);
   
   if(fs.existsSync(new_path))
   {
      file_path = path.join(new_path,filename);    
   } 
    else
    {
        return "directory does not exist with the name: " + dirname;
    }
    
   
    if(fs.existsSync(file_path))
    {
        return "file already exist with the name: " + filename;
    }
    else
    {
        fs.writeFile(file_path,data,"utf-8",(err,data)=>{
            if(err)
            {
                return "error in creating file: " + err;
            } 
        })
        return "file created successfully with the name: " + filename;
    }
} 



function createFile2(dirname, filename, data) {
    if (dirname === "") {
        return "Must select the directory.";
    }
    
    let new_path = path.join(__dirname, dirname);  // Join with the base directory
    console.log('Checking directory:', new_path);

    // Check if the directory exists
    if (fs.existsSync(new_path)) {
        let file_path = path.join(new_path, filename);  // Combine the directory with the file name
        console.log('Full file path:', file_path);

        // Check if the file already exists
        if (fs.existsSync(file_path)) {
            return "File already exists with the name: " + filename;
        } else {
            // Create the file asynchronously
            fs.writeFile(file_path, data, "utf-8", (err) => {
                if (err) {
                    return "Error in creating file: " + err;
                }
                return "File created successfully with the name: " + filename;
            });
        }
    } else {
        return "Directory does not exist with the name: " + dirname;
    }
}

function deletee(filename)
{
      let new_path = path.join(__dirname,filename);
      console.log(new_path);
      if(fs.existsSync(new_path))
      {
         fs.unlinkSync(new_path,(err)=>{
            if(err)
            {
                return "error in deleting file: " + err;
            }
      })
      return "file deleted successfully with the name: " + filename;
      }
      else
      {
        return "file does not exist with the name: " + filename;
      }
}

   

function rename(old_name,new_name)
{
    let old_path = path.join(__dirname,old_name);
    let new_path = path.join(__dirname,new_name);
     
    if(fs.existsSync(old_path))
    {
        fs.renameSync(old_path,new_path,(err)=>{
            if(err)
            {
                return "error in renaming file: " + err;
            }
     })
     return "file rename successfully from Oldname : " + old_name + " to Newname : " + new_name;
   }

    
    else{
         
          return "file does not exist with the name: " + old_name;
    }
}
function main()
{
   // console.log(Check_file_dir("virtual_root_dir"));

  // console.log(path_exists("virtual_root_dir"));

  //console.log(createFile2("virtual_roo","second.txt","hello world file 2"));

  console.log(createfile("virtual_root_","second.txt","hello world file 2"));

  //console.log(deletee("my.txt"));

  //console.log(rename("demo.txt","my.txt"));
}

main();


// ask this console inside the console 
// console.log("Outer log:", console.log("Inner log",a));

