import React, { useRef, useState } from 'react'
import { AnimatePresence, motion, scale} from 'motion/react'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
const Auth = () => {
  const loginRef = useRef()
  const regRef = useRef()
  const [reg,setReg] = useState(false)
  return (
    <div className=' min-h-screen ' 
      style={{
          background:"url('https://images.unsplash.com/photo-1491466424936-e304919aada7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        
    }}>
        <AnimatePresence mode='wait'>
            {reg ? (<motion.div className="" key='register' initial={{scale:0,opacity:0}}  animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0}} transition={{duration:0.6,ease:'easeInOut'}}><Register regRef={regRef} setReg={setReg}/></motion.div>)
                : (<motion.div className="" key='login' initial={{scale:0,opacity:0}}  animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0}} transition={{duration:0.6,ease:'easeInOut'}}><Login loginRef={loginRef} setReg={setReg}/></motion.div>)
            }
        </AnimatePresence>
    </div>
  )
}

export default Auth