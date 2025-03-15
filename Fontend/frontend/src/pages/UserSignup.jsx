import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setUserData({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    })
    
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    // Handle form submission
  }

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img 
          className='w-16 mb-10' 
          src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' 
          alt='Uber logo'
        />

        <form onSubmit={(e)=>{
          handleSubmit(e);
        }}>

          <h3 className='text-lg font-medium mb-2'>Enter your name</h3>
          <div className='flex gap-4 mb-6'>
            <input 
              required 
              className='bg-[#eeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base'
              type="text" 
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input 
              required 
              className='bg-[#eeee]  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base'
              type="text" 
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className='text-lg font-medium mb-2'>Enter your email</h3>
          <input 
            required 
            className='bg-[#eeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className='text-lg font-medium mb-2'>Enter your Password</h3>
          <input 
            className='bg-[#eeeeee] mb-6 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            type="password"
            placeholder='password'
          />

          <button
            type="submit"
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >
            Login
          </button>

          <div className="text-center">
            <p className='text-center'>Already have an account? <Link to="/user/login" className='text-blue-600 hover:underline'>
              Log-in here
            </Link></p>
          </div>
        </form>
      </div>
      <div>
        <p className='text-[8px] leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS
           messages, including by automated means, from Uber and 
           its affiliates to the number provided. </p>
      </div>
    </div>
  )
}

export default UserSignup