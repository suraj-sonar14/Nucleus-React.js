import {React}  from "react"

function Buttons({arr})
{
   const btn =  arr.map(btn_name=>
        <button>{btn_name}</button>
    )

    return(
        <>
             <div className="bg-black h-screen w-full text-white   ">
               <nav className="bg-gray-700 w-full h-10 flex items-center justify-center gap-[10px]">
                <div className=" flex gap-8">
                {btn}
                 </div>
                </nav>      
             </div>
        </>
    )
}

export default Buttons