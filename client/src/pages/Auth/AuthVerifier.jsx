import { useState } from "react"
import axios from 'axios'
const AuthVerifier = ({ children }) => {

    const [auth,setAuth] = useState(false)
    const token = localStorage.getItem('token')
    console.log(token)
    const verifyAuth = async () =>{
        if (token) {
            await axios.get(`http://localhost:3020/api/auth/verify/${token}`)
            .then(response =>
                {
                    response.status === 200 && setAuth(true)
                    response.status === 401 && setAuth(false)                
                }
            )
            .catch(error =>
                {
                    console.log(error)
                    setAuth(false)
                }
            )
        }
    }
    verifyAuth()
    if (!auth){
                    // window.location.pathname = '/auth'
                    return <>Auth Fail</>
                }
                else{
                    return children
                }
    
}

export default AuthVerifier