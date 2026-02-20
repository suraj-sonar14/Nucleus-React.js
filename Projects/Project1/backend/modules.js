/*
   project Title : Os file Utility; 
   author : Suraj Sonar;
   date : 16 feb 2026;
   modules used : 

*/

   const fs  = require("fs");
   
   const path = require("path");


   
 function path_exists(path_type="dir_name",new_name)
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
      
       if(filename!="")
       {
            if(filename.includes("."))
            {
              filename = filename;
            }
            else
            {
              filename = filename + ".txt";
            }
       }
         
        //  if(path_exists("filename",filename))
        //    {
        //       return "message : file already exists.";
        //    } 
          
       if(filename=="")
       {
         filename="untitled_file.txt";
       }
       
      

      if(filename=="untitled_file.txt")
      {
          file_temp_name = filename;
          let file_end = path_exists("filename",file_temp_name);
          let Num_end = 0;

          while(file_end)                                              // loop to check that which untitled_file.txt exist;
          { 
               filename = file_temp_name;
               Num_end += 1;
               //file_end = path_exists("filename",filename + Num_end)
               var arr = filename.split(".");
               var str = arr[0] + Num_end;
               str = str + "."+ arr[1];
               filename = str; 
               file_end = path_exists("filename",filename)
          }

          //var filename = filename + Num_end;

         
      }
      
      
      if(path_exists("filename",filename))                           // checks file exist or not, if not then creates file. 
      {   
          return "file already exists";
      }
      else
      {
        fs.writeFile(filename,data,"utf-8",function(err,data){  
          
            if(err) throw err;
            
       })

      }  
           return "file created succesfully";      
}



 function append_file(filename,data)
 {
      fs.appendFile(filename,data,"utf-8",(err,data)=>{
             
              if(err) throw err;
             
      })
         
          return "file changes done."
 }

 function edit_complete_file(filename, data)                   //edits complete file , deletes previous data and add new data.
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
           // return "directory path not exists."
           fs.mkdir(dir_name,(err,data)=>
            {
                if(err) {
                    throw err
                }
               
           } )
     
         
                return "Message: Directory created Successfully.";
               
           
        }
     
     // console.log(new_path_exists);
 }

  function file_info(filename )
  {
        return fs.statSync(filename);
  }
  
//entry point function.
function main()
{
     //create_file("demo.txt", "namaskar kaisee ho");

     // console.log(append_file("demo2.txt","\n new data which will add to new line"));                // append add data at the end of the data in the file.

   // console,log(edit_complete_file("demo.txt","hello"));

   // console.log(create_file("hello","hello yaar new file is created"));

   // edit_file("demo.txt","hello ji kaisee ho");

   // edit_complete_file("hello.txt","new data that is used to add");

   //  console.log(directory_login("virtual_Root_dir"));

  console.log(path_exists("filename","demo.txt"));

  //console.log(file_info("demo2.txt"));
     
}

main();


// have to assign the number to the filename + num and then extension.