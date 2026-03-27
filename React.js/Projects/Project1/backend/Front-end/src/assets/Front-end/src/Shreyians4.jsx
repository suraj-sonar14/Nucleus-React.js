import React from "react";

import "./App.css"

function App()
{
    return(
 
    <div className="bg-black w-full h-fit flex justify-center py-17">

             <div style={{backgroundImage:"url('/chat-bg.png')"}} 
             
             className="w-[100%]  h-[700px] bg-contain bg-no-repeat bg-center opacity-50
             
                        flex  flex-col items-center">
                      
                      <div className="flex justify-center text-center pt-39">

                         <p className="text-white text-5xl font-bold font-mac">Transfrom Your Learning journey<span > <br />Into a carrer learning Breaththrough With</span></p>
                       
                      </div>
                
                      <div className="pt-4">

                         <div className="relative w-fit h-[60px] bg-amber-900 px-3 py- ">

                                <p className="text-amber-50 text-5xl p">Shreyians</p>

                                <span className="absolute bg-white w-[6px] h-[6px] top-0 left-0"></span>

                                <span className="absolute bg-white w-[6px] h-[6px] top-0 right-0"></span>

                                <span className="absolute bg-white w-[6px] h-[6px] bottom-0 left-0"></span>

                                <span className="absolute bg-white w-[6px] h-[6px] bottom-0 right-0"></span>

                        </div>

                      </div>  

                      <div className="pt-12">

                              <button className="text-orange-50 bg-orange-500 p-3 text-[18px] rounded-2xl">Explore Courses</button> 


                      </div>


             </div>
        



    </div>
         


    )
}

export default App