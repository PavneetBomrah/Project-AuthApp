import React from 'react'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import AuthVerifier from './pages/Auth/AuthVerifier'
import {  Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AuthVerifier><Home/></AuthVerifier>}/>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/auth' element={<Auth/>}/>
      </Routes>

    </div>
  )
}

export default App