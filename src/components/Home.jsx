import React, { useState } from 'react'
import { useEffect } from 'react'


const Home = () => {
    const[names,setNames]=useState("")
    useEffect(()=>{
        const nms=localStorage.getItem("username")
        setNames(nms)
    })
  return (
    <div>
        <div className='h-screen w-screen bg-indigo-950 flex items-center justify-center'>
            <div className='h-[395px] w-[283px] bg-white  rounded-2xl p-10'>
               <img src="/bridgeon.png" alt="logobridgeon" style={{width:"200px"}} className='ml-2'/>
               <img src="/avatar.png" alt="" style={{width:"200px"}} className='ml-2 mt-5'/>
               <h1 className='text-center mt-2 font-bold'>{names}</h1>
                <h2 className='text-center mt-1 font-bold'>Intern</h2> 
               <h2 className='text-center font-bold'>Batch 65</h2>

            </div>  

        </div>

    </div>
  )
}

export default Home