import {React} from 'react'
import PropTypes from "Prop-types"   //

// function List({Name="Yash Deshmukh ", age =21 , isStudent =true})
// {

//    return(
 
//     <div className='border-1'>
    
//         <p>Name is : {Name}</p>
//         <p>Age is :{age}</p>
//         <p>He is {isStudent?"student":"not a student"}</p>
    
//     </div>

//    )

// }

function List(props)
{
     return (

        <div className='border-1 p-3 ml-3.5 mr-3.5 mt-3'> 
        
             <p>Name is : {props.Name}</p>
             <p>Age is : {props.Age}</p>
             <p>He is {props.isStudent?"stuudent":"Not a student"}</p>

        </div>

     )
}

List.PropTypes={
 
     Name : PropTypes.string,
     age : PropTypes.number,
     isStudent : PropTypes.bool
}

List.defaultprops={
    Name : "Yash Deshmukh ",
    age : 21,
    isStudent: true
}

export default List