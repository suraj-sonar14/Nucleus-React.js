import {React} from "react"

function Button({btn_name})
{
    return(
          <button className="border-[2px] border-amber-200 ml-3.5">{btn_name}</button>
     )
}

function Multi_itms({buttons})
{

   //  console.log(buttons)
     const btns = buttons.map(items=>
     <li>{items}</li>)

     return(
     <>
          <ol>{btns}</ol>
     </>
     )
}

function MUlti_buttons({multiple})
{
       const btns = multiple.map(items=>
           <button className="border-[2px] border-amber-400 rounded-[5px]  p-2.5 ml-3.5">{items}</button>
       )
                  return(
                    <>
                      
                          <ol>{btns}</ol>

                    </>
                  )
       
}

export {Button,Multi_itms,MUlti_buttons};
