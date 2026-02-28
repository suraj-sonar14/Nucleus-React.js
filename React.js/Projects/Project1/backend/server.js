
const server  = require("express");           //importing express module and storing it in a variable named server

const app = server();                  //creating an objext  of express because express is a function and storing it in a variable server

//const Check_directory = require("./modules");          //importing modules.js file

import {Check_directory} from "./modules";

console.log(Check_directory(dumy));
app.get("/",(req,res)=>{

    res.send("hello world");
})

app.get("/welcome",(req,res)=>{

    res.send("welcome");
})

app.get("/file/check_child",(req,res)=>{

    const dirname = req.query.dirname;

    let child_info = modules.Check_directory(dirname);

    let message = child_info[1];

    let list = child_info[0];                                         //list of files.

    res.json({
        "message":message,
        "child_list":list
    })
})

app.listen(3000,()=>{                                       

      console.log("server is running on the port 3000");
})

