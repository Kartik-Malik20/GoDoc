import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import ForgotPass from './Pages/ForgotPass'
import ResetPass from './Pages/ResetPass'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/forgotpassword' element={<ForgotPass />} />
        <Route path='/resetpassword/:token' element={<ResetPass />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
