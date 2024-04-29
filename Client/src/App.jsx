import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
