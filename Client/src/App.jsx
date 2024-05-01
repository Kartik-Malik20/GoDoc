import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import ForgotPass from './Pages/ForgotPass'
import ResetPass from './Pages/ResetPass'
import DoctorSignUp from './Pages/DoctorSignUp'
import Dashboard from './Pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/doctorsignup' element={<DoctorSignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/forgotpassword' element={<ForgotPass />} />
        <Route path='/resetpassword/:token' element={<ResetPass />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
