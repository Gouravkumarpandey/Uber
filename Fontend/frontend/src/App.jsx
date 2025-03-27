import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home' // Corrected import
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import Captainlogin from './pages/Captainlogin'
import Start from './pages/Start'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/captain/signup" element={<CaptainSignup />} />
        <Route path="/captain/login" element={<Captainlogin />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/home" element={<Home />} /> {/* Corrected route */}
      </Routes>
    </div>
  )
}

export default App