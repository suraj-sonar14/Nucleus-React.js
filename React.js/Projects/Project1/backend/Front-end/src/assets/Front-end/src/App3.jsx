import {React} from 'react'

import "./App.css"

function App()
{
     
    return(
<>
{/* flex items-center align items at the cenetr in vertical way */}

{/* flex justify-center align items at the center in horizontal way */}

            <div className="w-full h-screen bg-black flex justify-center pt-20 ">

                <div className='border-1 w-[400px] h-[400px] border-amber-50 flex flex-col  gap-2 p-2.5'>
                 
                    <div className='flex justify-center gap-2  text-amber-300'>

                       <div className='left-box-1 border-1 border-amber-50 w-[122px] h-[120px] flex items-center justify-center'> 
                          <button>X</button>
                       </div>

                       <div className='mid-box-1 border-1 border-amber-50 w-[122px] h-[120px]'> 
                          <button></button>
                       </div>

                       <div className='right-box-1 border-1 border-amber-50 w-[122px] h-[120px]'> 
                          <button></button>
                       </div>

                    </div>
                    
                    <div className='flex justify-center  gap-2'>

                       <div className='left-box-1 border-1 border-amber-50 w-[122px] h-[120px]'> 
                          <button></button>
                       </div>

                       <div className='mid-box-2 border-1 border-amber-50 w-[122px] h-[120px]'> 
                          <button></button>
                       </div>

                       <div className='right-box-3 border-1 border-amber-50 w-[122px] h-[120px]'> 
                          <button></button>
                       </div>

                    </div>


                    <div className='flex justify-center gap-2 '>

                       <div className='left-box-1 border-1 border-amber-50 w-[122px] h-[120px]'> 
                          <button></button>
                       </div>

                       <div className='mid-box-2 border-1 border-amber-50 w-[122px] h-[120px]'> 
                          <button></button>
                       </div>

                       <div className='right-box-3 border-1 border-amber-50 w-[122px] h-[120px]'> 
                          <button></button>
                       </div>

                    </div>


                 </div>

            </div>
</>
    )

}

export default App