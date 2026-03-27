import React from "react";
import './App.css'

function App()
{

    return(
    
    <div className="bg-black w-full h-full p-3">

       <div className="main border-[1px] border-amber-50  w-full h-full flex flex-col gap-[40px]">

              <div className="line1 flex  justify-center gap-[40px] mt-5 ">

                    <div className="line-1-box-1 border border-white w-[440px] h-[550px]    rounded-2xl flex flex-col ">

                          <div className="section ">
            
                                    <div className="p-[22px] pt-[25px]">

                                        <img className="w-[400px] h-[230px]  rounded-2xl" src="https://ik.imagekit.io/sheryians/courses/cohort3thumbnai_E9AGbX-rJ.webp" alt="" />
                                     
                                    </div>
                                    
                                    <div className="pl-[22px] ">
 
                                        <div className="text-[14px] text-gray-300 flex gap-2 ">
                                            
                                            <p className="border-[0.5px] border-gray-300 p-1 pl-[10px] pr-[10px] rounded-[15px]">Product Building</p>

                                            <p className="border-[0.5px]  border-gray-300 p-1 pl-[10px] pr-[10px] rounded-[15px]">community Access</p>

                                            <p className="border-[0.5px]  border-gray-300 p-1 pl-[10px] pr-[10px] rounded-[15px]">Game Access</p>

                                        </div>

                                    </div>

                                    <div className="text-[26px] text-white font-inter  pl-[22px] pt-4">

                                         <p>3.0 Job Ready AI Powered  <br />Cohert</p>

                                    </div>

                                    <div className="flex justify-between text-white p-[22px] pt-[15px]">

                                          <p className="text-[26px]">Price<span className="text-amber-600 ml-1">Rs.8999</span> <span className="line-through text-gray-400 text-[15px]">Rs.17980</span></p>

                                       <div className="flex items-center">

                                          <div className="flex items-center w-[70px] h-[22px] border-[0.3px] text-[12px] border-amber-50 rounded-[6px] bg-white text-black  ">
                                                
                                                 <p className="pl-[10px] pr-[10px]">50% OFF</p>

                                          </div>   

                                       </div>  

                                    </div>

                                    <div className="text-[16px] text-white pl-[22px] pt-[3px]">

                                              <button className=" border-[0.2px] border-gray-500 rounded-2xl bg-black pl-[19px] pr-[19px] pt-[8px] pb-[8px] ">Check Courses <span className="ml-1.5 font-bold" >→</span></button>

                                    </div>

                              
                          </div>
                              


                    </div>

                    <div className="line-1-box-2 border border-white w-[440px] h-[550px] rounded-2xl">

                                  
                

                    </div>

                    <div className="line-1-box-3 border border-white w-[440px] h-[550px] rounded-2xl">


                    </div>


              </div>

              <div className="line2 flex justify-center gap-[40px]">


                    <div className="line-2-box-1 border border-white w-[440px] h-[550px] rounded-2xl">


                    </div>

                    <div className="line-2-box-2 border border-white w-[440px] h-[550px] rounded-2xl">


                    </div>

                    <div className="line-2-box-3 border border-white w-[440px] h-[550px] rounded-2xl">


                    </div>


              </div>

              <div className="line3 flex justify-center gap-[40px] mb-5">


                    <div className="line-3-box-1 border border-white w-[440px] h-[550px] rounded-2xl">


                    </div>

                    <div className="line-3-box-2 border border-white w-[440px] h-[550px] rounded-2xl">


                    </div>

                    <div className="line-3-box-3 border border-white w-[440px] h-[550px] rounded-2xl">


                    </div>


              </div>

       </div>

    </div>

    )
}

export default App

