import React, { useState } from 'react'
import { motion as m } from 'motion/react'
import { Eye,EyeOff } from 'lucide-react'
const Register = (params) => {
    const handleFocusInput = (e) => {
        const input = e.currentTarget.querySelector('input');
        if (input) input.focus();
    };
    const [show,setShow] = useState(false)
  return (
    <div className='min-h-screen flex flex-col justify-center items-center '>
        <div className="p-5 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm w-120 flex flex-col justify-center h-auto rounded-xl border gap-7">
            <form onSubmit={(e)=>{ e.preventDefault(); params.handleRegister() }} ref={params.regRef}>
                <h1 className='text-3xl/10 mt-5 text-white font-semibold '>Register</h1>
                <table className='border-separate border-spacing-y-5 border-spacing-x-0.5 w-full'>
                    <tbody >
                        <tr className="w-full bg-gray-700 text-gray-400" onClick={(e)=>handleFocusInput(e)}>
                            <td className=' rounded-l-md'><label htmlFor="Name" className='ml-3'>Full Name:</label></td>
                            <td className=' rounded-r-md'><input type="name" id='Name' className='w-full p-2 outline-0'  minLength={10}/></td>
                        </tr>
                        <tr className="w-full bg-gray-700 text-gray-400" onClick={(e)=>handleFocusInput(e)}>
                            <td className=' rounded-l-md'><label htmlFor="Email" className='ml-3'>Email:</label></td>
                            <td className=' rounded-r-md'><input type="email" id='Email' className='w-full p-2 outline-0'  minLength={10}/></td>
                        </tr>
                        <tr className="w-full bg-gray-700 text-gray-400 " onClick={(e)=>handleFocusInput(e)}>
                            <td className=' rounded-l-md'><label htmlFor="Password" className='ml-3'>Password: </label></td>
                            <td className=' rounded-r-md'>
                                <div className="flex items-center">
                                    <input type={show?"text":"password"} id='Password' className='w-full p-2 outline-0'  minLength={8}/>
                                    <button type="button" onClick={()=>{setShow(!show)}} className="mr-3 " >
                                        {show?<EyeOff/>:<Eye/>}
                                    </button >
                                </div>
                            </td>
                        </tr>
                        <tr className="w-full bg-gray-700 text-gray-400 " onClick={(e)=>handleFocusInput(e)}>
                            <td className=' rounded-l-md'><label htmlFor="Confirm-Pass" className='ml-3'>Password: </label></td>
                            <td className=' rounded-r-md'>
                                <div className="flex items-center">
                                    <input type={show?"text":"password"} id='Confirm-Pass' className='w-full p-2 outline-0'  minLength={8}/>
                                    <button type="button" onClick={()=>{setShow(!show)}} className="mr-3 " >
                                        {show?<EyeOff/>:<Eye/>}
                                    </button >
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            <button type='submit' className='bg-gray-50 p-2 w-full rounded hover:cursor-pointer hover:scale-103 active:scale-96 hover:bg-gray-300 border' style={{transition:"all 100ms"}}>Register</button>
            </form>
            <button onClick={()=>{params.setReg(false)}} className='text-gray-300 hover:cursor-pointer'>Existing User? <span className='text-white underline underline-offset-2'>Login</span></button>
        </div>
    </div>

  )
}

export default Register