import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const nvgt=useNavigate()
    const toHome=()=>{
        nvgt('/home')
    }
  return (
    <div>
        <div className='h-screen w-screen bg-indigo-950 flex items-center justify-center'>
            <div className='h-[395px] w-[385px] bg-white  rounded-2xl p-10'>
                <div className='mt-5'>
                    <h3 className='text-center text-xl font-bold font-sans'>Login</h3>
        
                <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
                
                
                
                <input type="email"  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"/>
                <label htmlFor="">Password</label>
                
                <input type="password"  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"/>
                   <div className='mt-3'>
                      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition" onClick={toHome}>Login</button>
                     
                   </div>
                     </div>
            </div>

        </div>

    </div>
  )
}

export default Login