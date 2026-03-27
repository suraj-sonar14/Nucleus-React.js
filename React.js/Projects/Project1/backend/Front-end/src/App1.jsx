import {React} from "react"
import "./App.css"
import {Button,Multi_itms,MUlti_buttons} from "./components/Button"

function App()
{
  let Name = "Yash"
  let Surname = "Deshmukh"

  let Fullname = Name + Surname

  return(
    <div className="bg-black text-white h-screen w-full flex  justify-center items-center">
    
      <div className="main-box m-6  p-2 border-[0.1px] border-amber-100  flex rounded-xl gap-[10px]">
    
         <div className="box1 flex flex-col justify-between gap-4">

               <div className="section1 flex justify-between gap-5">

                   <div className="card1 h-55 w-55 flex flex-col border-[0.5px] gap-16 rounded-xl border-amber-50 p-2">

                        <div className="flex flex-col">

                           <div className="flex  gap-2 items-center">
                
                                  <img className="h-12" src=" https://www.sheryians.com/images/home/future-ready/yt.png" alt="" />
                                  <h3 className="text-3xl">600K</h3>
                           </div>
                            
                               <p>Nucleus Subscriber</p>
                               
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, con</p>

                   </div>

                    <div className="card2 h-55 w-55  flex flex-col border-[0.5px] gap-16 rounded-xl border-amber-50 p-2">

                        <div className="flex flex-col">

                           <div className="flex  gap-2 items-center">
                
                                  <img className="h-12" src=" https://www.sheryians.com/images/home/future-ready/yt.png" alt="" />
                                  <h3 className="text-3xl">600K</h3>
                           </div>
                            
                               <p>Nucleus Subscriber</p>
                               
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, cons</p>

                   </div>

               </div>

                  <div className="section2 h-[200px] w-[460px] border-[0.1px] flex flex-wrap text-4xl border-white rounded-xl p-2  items-center font-light">
                    UNLOCK

                     <div className="w-40 h-fit flex mr-[-17px] ml-[28px]">

                            
                              <img className="rounded-full h-10 w-10 " src="https://variety.com/wp-content/uploads/2024/08/Shah-Rukh-Khan-Locarno1.jpg?w=1000&h=667&crop=1" alt="" />
                    
                              <img className="rounded-full h-10 w-10 ml-[-13px]" src="https://variety.com/wp-content/uploads/2024/08/Shah-Rukh-Khan-Locarno1.jpg?w=1000&h=667&crop=1" alt="" />
                            
                              <img className="rounded-full h-10 w-10 ml-[-13px]" src="https://variety.com/wp-content/uploads/2024/08/Shah-Rukh-Khan-Locarno1.jpg?w=1000&h=667&crop=1" alt="" />
                            
                              <img className="rounded-full h-10 w-10 ml-[-13px]" src="https://variety.com/wp-content/uploads/2024/08/Shah-Rukh-Khan-Locarno1.jpg?w=1000&h=667&crop=1" alt="" />

                     </div>
                     YOUR

                     <div className="pl-18 h-10 w-30 mr-2 rounded full border border-accent flex  pr-2 pt-1 pb-1 items-center">

                         <button><span className="text-5xl -mt-1.5">→</span></button>

                     </div>

                     FIRST JOB AND INTERNSHIP WITH US!
                       
                  </div>
 
                </div>

             <div className="box2 h-[434px] w-[440px]  overflow-hidden relative rounded-2xl" >

                 <video className=" w-full h-full object-cover " autoPlay loop muted src="https://dfdx9u0psdezh.cloudfront.net/home/hero/herosection.webm"></video>
                  
                 <p className="absolute top-2 left-2 text-4xl text-white">Start <br />Learning</p>

                 <button className="absolute bottom-2 left-2 ">Get in touch</button>→

              </div>
         </div>

                   <div className="amazon w-full overflow-hidden flex justify-center mt-10">

                           <div className="walmart flex gap-0 mt-[500px] w-full ml-[-700px]  animation-[20sec]">

                                <div>
                                     <img className="h-[20px] w-full animate-[slide_6s_linear_infinite]" src="https://www.sheryians.com/images/logos/companiesLogo.png" alt="" />

                                </div>

                           </div>
         

                   </div>
 
     </div>


    
    
  )

//    let arr=["login ", "register", "submit"]

//    //console.log(arr)


//   return(
//     <>
//     <Button btn_name="react"></Button>

//     <Button btn_name="sec"></Button>

//    < Multi_itms buttons={arr}></Multi_itms>

//    <MUlti_buttons multiple={arr}></MUlti_buttons>
//    </>
//  )

}

export default App

