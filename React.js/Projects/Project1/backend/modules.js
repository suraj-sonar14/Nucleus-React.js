/*
   project Title : Os file Utility; 
   author : Suraj Sonar;
   date : 16 feb 2026;
   modules used : 

*/

   const fs  = require("fs");
   
   const path = require("path");

 function path_exists(path_type="dirname",new_name)
 {
      if(path_type=="dirname")
      {
        let new_path = path.join(new_name);
        return fs.existsSync(new_path);
      }
      else
      {
        if(path_type=="filename")
        { 
           let new_path = path.join(new_name);
           return fs.existsSync(new_path);
        }
        else
        {
           console.log("message:(err): First argument must be either 'dirname' or 'filename' \n condition(path_type = dirname || filename");
           return false;
        }
    }   
 }


  function create_file(filename="untitled_file.txt" , data=" ")
  {

       if(filename=="")
        {
            filename = "untitled_file.txt";
        }       
      
         if(filename.includes("."))
         {
           filename = filename;
         }
         else
         {
           filename = filename + ".txt";
         }


      if(filename=="untitled_file.txt")
      {
          
          let file_end = path_exists("filename",filename);
          let Num_end = 0;
          console.log(file_end);

          while(file_end)
          {
              filename = "untitled_file.txt";
              Num_end += 1;
              let arr = filename.split(".");
              var filename = arr[0] + Num_end + "." + arr[1];
              console.log(filename);    
              file_end = path_exists("filename",filename);
              console.log(filename);    
          }

         // filename = filename + Num_end;
       }

      if(path_exists("filename",filename))
      {
          return "file already exists with the name: " + filename;
           
      }
      else
      {
         console.log(filename)
        fs.writeFileSync(filename,data,"utf8",(err,data)=>{

             if(err) throw err;
        });
            
       }
          return "file created succesfully";    
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


 function append_file(filename,data)
 {
      fs.appendFile(filename,data,"utf-8",(err,data)=>{
             
              if(err) throw err;
             
      })
         
          return "file changes done."
 }

 function edit_complete_file(filename, data)                   //edits complete file , deletes previous data and add new data or cretes new file if not exists.
 {
    fs.writeFile(filename,data,"utf8",(err,data)=>{
       
        if(err) throw err;
       
    })

     return "data successfully edited."
    
 }


 function edit_file(filename,data)
 {
      let dataaa = fs.readFileSync(filename,"utf-8")
    
             console.log(dataaa);
 }

        
 function directory_login(dir_name)                                     // create the directory if not exists.
 {
      
      let new_path= path.join(__dirname,dir_name);
      
      let new_path_exists = fs.existsSync(new_path);
     
     
        if(new_path_exists)
        {
            return "directory path exists";
        }
        else
        {
          
           fs.mkdir(dir_name,(err,data)=>                                // create directory with the name of dir_name in the current directory if not exists.
            {
                if(err) {
                    throw err
                }
               
           } )
                return "Message: " + dir_name + " Directory created Successfully.";
        }
     
    
 }


 function file_info(filename)
 {
       let new_path =path_exists("filename",filename);
       if(new_path)
       {
          return fs.statSync(filename)
       }
       else
       {
          return "file does not exists with the name: " + filename;
       }
       
 }

 let Root = "virtual_root_dir";
 function Check_directory(dirname)
 {
     new_path = path.join(__dirname,Root,dirname);
     console.log(new_path)
    
    if(fs.existsSync(new_path) == false )
    {
        return "message: directory does not exist with the name: " + dirname;
    }

    let child = fs.readdirSync(new_path);
   //return [child,"message: directory exist with the name "];
    return child; 
 }

 function create_dir(dirname)
 {
     let new_path = path.join(__dirname,dirname);
     if(fs.existsSync(new_path))
     {
        return "directory exist with Name:" + dirname;
     }
     else
     {
        fs.mkdir(new_path,(err)=>{
            if(err) throw err;
        })

         return "directory created with the Name : " + dirname;
     }
 }

 function rename_dir(old_name,new_name)
 {
    let old_path = path.join(__dirname,old_name);
    let new_path = path.join(__dirname,new_name);

    if(fs.existsSync(old_path))
    {
        fs.rename(old_path,new_path,(err)=>{

                if(err) throw err;
        })

        return "Directory successfully rename from oldname :" + old_name +" " + "to new_name :" +" "+ new_name;
    }
    else 
    {
        return "directory does not exist with Name : " + old_name;
    }
 }
//module.export = Check_directory();
 
//entry point function.
function main()
{
    // create_file("demo.txt", "namaskar kaisee ho");

   console.log(append_file("demo.txt","\n new data which will add to new line"));                // append add data at the end of the data in the file.

   // console,log(edit_complete_file("demo.txt","hello"));

  // console.log(create_file("style1.css","hello yaar new file is created"));

   // edit_file("demo.txt","hello ji kaisee ho");

   // edit_complete_file("demo2.txt","new data that is used to add");

  // console.log(directory_login("virtual_root_dir"));

  //console.log(path_exists("filename","demo.txt"));

 // console.log(file_info("first.txt"));
    
 // console.log(Check_directory("mydir2"))

 console.log(rename_dir("my_dir","virtual_root_dir"))

 //console.log(create_dir("Virtual"))
}

main();