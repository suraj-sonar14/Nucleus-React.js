/** 
 * PROJECT TITLE : OS FILE UTILITIY
 * AUTHER : SURAJ SONAR
 * DATE : 16/02/2026
 * MODULE USED : FS
 * **/

const fs = require("fs")

const path = require("path")

let root = "D:/react2.js/Projects/project1/virtual_root_dir/"

function getLogFileName() 
{
    const now = new Date();

    const date = now.getFullYear() + "-" +
                 String(now.getMonth() + 1 ).padStart(2,"0") + "-" +
                 String(now.getDate()).padStart(2,"0") ;

        //console.log(date);
    
    return date;
}

function loginfo(message)
{
    let log_file_name = getLogFileName();
    let now = new Date();

    full_message = String(now.getHours()).padStart(2,"0") + ":" +
                   String(now.getMinutes()).padStart(2,"0") + ":" +
                   String(now.getSeconds()).padStart(2,"0") + "  " + message;

    
    fs.appendFileSync(root + "dirlogs/" + log_file_name , full_message + "\n" );

}
// ######## function to check the Path_exists OR Not ######## //

function path_exists(path_type, new_name)
{
    if(path_type =="dirname")
    {
      let new_path = root + new_name;
      return fs.existsSync(new_path);
    }
    else
    {
        if(path_type=="filename")
        {
            let new_path = root + new_name;
            return fs.existsSync(new_path);
        }
        else
        {
            console.log( "Message(err) : First argument must be either 'dirname' or 'filename'\n condition (path_type = 'dirname' || 'filename')" )
            return false
        }
    }
}   

// ##### Function to create directory ##########

function create_directory(dirname="untitled_dir")
{

        if(dirname==="")
        {
          dirname="untitled_dir"
        }

        if(dirname==="untitled_dir")
        {
            let num = 0;
            temp = dirname;
            let end = path_exists("dirname",dirname);

            while(end)
            {
                dirname = temp + num;
                end = path_exists("dirname",dirname);
                num++;
            }
        }

         if(path_exists("dirname",dirname))
         {
              return "directory already exists with the name: " + dirname;
         }

        fs.mkdirSync(root+dirname);
        loginfo(`directory created successfully ${dirname}`);
        return "directory created successfully with the name: " + dirname;

}

// ##### Function to check directory ##########

function check_directory(dirname)
{
   if(dirname=="")
   {
      return "must enter the directory Name.";
   }
   else
   {
       if(path_exists("dirname",dirname))
       {
           let child = fs.readdirSync(root + dirname);
           return [child,"directory visited successfully "+ dirname];
       }
       else
       {
            return `Directory does not exist with the Name : ${dirname}`
       }
   }
}

  
// ##### Function to create file ##########

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
    
          while(file_end)
          {
              filename = "untitled_file.txt";
              Num_end += 1;
              let arr = filename.split(".");
              var filename = arr[0] + Num_end + "." + arr[1];   
              file_end = path_exists("filename",filename);   
          }

         // filename = filename + Num_end;
       }

      if(path_exists("filename",filename))
      {
          return "file already exists with the name: " + filename;
           
      }
      else
      {
         fs.writeFileSync(root + filename , data,"utf8",(err,data)=>{

             if(err) throw err;
        });
            
       }
          return "file created succesfully with the name: " + filename;    
    }  

// ##### Function to append data in file ##########

function append_file(filename,data)
{
     if(filename=="")
     {
        return "must enter filename."
     }

      if(path_exists("dirname",filename))
      {
         fs.appendFile(root + filename,data,"utf-8",(err,data)=>{

            if(err) throw err;

        })

            return "message : file changes done.";
      }
      else
      {
         return `message : file not exist with Name : ${filename}`;
      }

}

// ##### Function to edit complete data in file ##########

function edit_complete_file(filename,data)
{
    if(filename=="")
    {
        return "must enter filename."
    }   

    if(path_exists("dirname",filename))
    {
        fs.writeFile(root + filename,data,"utf-8",(err,data)=>{

            if(err) throw err;
      })

      return "message : data successfully edited.";
    }
    else
    {
        return `message : file not exist with Name : ${filename}`;
    }   
}

// ##### Function for directory login creates the bin and the dirlogs functions ##########

function directory_login()
{
   dirname = "virtual_root_dir";
  
   let new_path = path.join(__dirname,dirname);

   if(fs.existsSync(new_path))
   {
       return "directory path exists already";
   }
   else
   {
         fs.mkdirSync(dirname,(err,data)=>{

            if(err) throw err;
         })

         create_directory("dirlogs");
         create_directory("bin");
         loginfo("------ USER LOGIN SUCCESSFULLY ------")
         return "directory path created successfully";
   }
}

// ##### Function to delete file ##########

function delete_directory(dirname)
{
    if(dirname=="")
    {
        return "must enter the directory name.";
    }

    if(path_exists("dirname",dirname)==false)
    {
      return "directory does not exist with the name: " + dirname;   
    }
      
    let full_path = root + dirname;
    fs.rmdirSync(full_path);
    loginfo(`directory deleted successfully with the Name : ${dirname}`);
    return "directory deleted successfully with the name: " + dirname;
   
}

// ##### Function to rename file ##########

function renamefile(old_name,new_name)
{
     if(old_name=="")
     {
        return "must enter the old filename."
     }
     else
     {
         if(new_name=="")
         {
            return "must enter the new filename."
         }
     }

     if(path_exists("filename",old_name))
     {
        fs.renameSync(root + old_name,root + new_name);
        return "file successfully renamed from Oldname : " + old_name + " to Newname : " + new_name;
     }
     else
     {
        return "file does not exist with the name: " + old_name;
     }
}

//  #### Function to delete file ##########

function delete_file(filename)
{
    if(filename=="")
    {
        return "must enter the filename."
    }

    if(path_exists("filename",filename))
    {
        fs.renameSync(root + filename,root + "bin/"+ filename);
        return "file successfully deleted with the name: " + filename;
    }
    else
    {
        return "file does not exist with the name: " + filename;
    }
}

function rename_directory(old_name,new_name)
{
     if(old_name=="")
     {
        return "must enter the existing file Name."
     }
     else
     {
        if(new_name=="")
        {
            return "must Enter the New Name for the file."
        }
     }

     if(path_exists("dirname",old_name))
     {
        fs.renameSync(root + old_name, root + new_name);
        return `directory successfully Rename from ${old_name} to ${new_name}`;
     }
     else
     {
        return "directory does not exist with the Name : " + old_name;
     }
}
//console.log(check_directory("bn"))

//console.log(check_directory("dirlogs"))

//console.log(create_directory("first_dir"))

//console.log(create_file("second.txt","this is the content of first file"))

//console.log(append_file("first.txt"," \n my file"))

//console.log(edit_complete_file("first.txt","this is the new data of the file"))

//console.log(directory_login())

//console.log(delete_directory("first_dir"));

//console.log(renamefile("second.txt","first.txt"))

//console.log(delete_file("second.txt"))

//console.log(getLogFileName());

//console.log(rename_directory("first_dir","second"));