import {React} from "react";

import "./App.css"

function App()
{

     return(

     <div className="main-bg bg-black  h-screen">

        <div className="h1-and-name-div flex flex-col justify-center items-center pt-20 gap-6">

                  <div className=" relative w-fit h-fit relative bg-amber-950 px-6 py-1 ">

                           <p className="text-white text-[21px]">FAQS</p>

                           <span className="absolute bg-white w-2 h-2 top-0 left-0"></span>

                           <span className="absolute bg-white w-2 h-2 top-0 right-0"></span>

                           <span className="absolute bg-white w-2 h-2  bottom-0 left-0"></span>

                           <span className="absolute bg-white w-2 h-2 bottom-0 right-0"></span>

                  </div>

                  <div className="text-white text-center text-5xl ">

                        <p >Frequently Asked Questions From <span className="block mt-[-40px]"><br />Our Student</span></p>
 

                  </div>

        </div>

        <div className="boxes-div mt-20 flex justify-center">
 
                <div className="flex flex-col gap-3">

                            <div className="flex justify-between shadow-[0_0_10px_rgba(0,0,0,5.5)] border border-gray-600 rounded-2xl  gap-60 px-6 py-3">

                                    <p className="text-gray-400 text-[20px] text-amber-300 "> Architecture is not recommended for the usage of the entry? </p>

                                    <p className="text-white text-2xl font-bold">⌄</p>

                            </div>

                            <div className="flex justify-between  border border-amber-950  rounded-2xl  gap-60 px-6 py-3">

                                    <p className="text-gray-400 text-[20px] text-amber-300 "> What is the difference between compiled and interpreted languages?</p>

                                    <p className="text-white text-2xl font-bold">⌄</p>

                            </div>

                            <div className="flex justify-between shadow-[0_0_10px_rgba(0,0,0,5.5)] border border-gray-600 rounded-2xl  gap-60 px-6 py-3">

                                    <p className="text-gray-400 text-[20px] text-amber-300 "> Why should I learn coding Tell the principle Deep? </p>

                                    <p className="text-white text-2xl font-bold">⌄</p>

                            </div>

                            <div className="flex justify-between shadow-[0_0_10px_rgba(0,0,0,5.5)] border border-gray-600 rounded-2xl  gap-60 px-6 py-3">

                                    <p className="text-gray-400 text-[20px] text-amber-300 "> Which language should I start with Now As a entry Top? </p>

                                    <p className="text-white text-2xl font-bold">⌄</p>

                            </div>

                            <div className="flex justify-between shadow-[0_0_10px_rgba(0,0,0,5.5)] border border-gray-600 rounded-2xl  gap-60 px-6 py-3">

                                    <p className="text-gray-400 text-[20px] text-amber-300 "> How much time does it take to learn coding Theme For the Play? </p>

                                    <p className="text-white text-2xl font-bold">⌄</p>

                            </div>

                            


                            

                              
                            


                </div>
               


        </div>


    </div>

     )

}

export default App