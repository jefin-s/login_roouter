import React from 'react'
import './App.css'
import Registeration from './components/Registeration'
import Login from './components/Login'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Registeration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      
      

    </div>
  )
}

export default App