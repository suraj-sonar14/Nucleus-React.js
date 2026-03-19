import {React} from 'react'
import Buttons from "./components/navbar_btn"
import "./App.css"

function App()
{
    let  btn_name = ["Work","profession","Job","class"]

    return(
        <Buttons arr={btn_name} ></Buttons>
    )
}

export default App


