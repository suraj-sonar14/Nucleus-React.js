import {React,useState} from 'react'
import "./App.css"
import List  from './components/List'



function App()
{

    let [count , setCount] = useState(0);

     return(

        <>
              
          <List Name="Yash" age="22" isStudent={true}></List>
          <List Name="pranav" age={22} isStudent={true}></List>
          <List Name="rahul" age={22} isStudent={true}></List>
          <List Name="Suraj" age={22} isStudent={true}></List>
          <List></List>

          {   //Hooks in react

              

       

          }

           <br />
           <br />
           <br />

           <p>Count is {count}</p>

           <button onClick={()=>setCount(count+1)}>Increment</button>

        </>

     )

}

export default App