import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Captainlogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const captainData = {
      email: email,
      password: password
    }
    
    // Handle form submission with captainData
    console.log(captainData);
    
    setEmail('');
    setPassword('');
  }

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img 
          className='w-16 mb-10' 
          src='https://www.svgrepo.com/show/505031/uber-driver.svg' 
          alt='Uber-Driver logo'
        />

        <form onSubmit={(e)=>{
          handleSubmit(e);
        }}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input 
            required 
            className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autocomplete="email"
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input 
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            type="password"
            placeholder='password'
            autocomplete="current-password"
          />

          <button
            type="submit"
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >
            Login
          </button>

          <div className="text-center">
            <p className='text-center'>Ready to Drive & Earn? <Link to="/captain/signup" className='text-blue-600 hover:underline'>
              Register as a Captain
            </Link></p>
          </div>
        </form>
      </div>
      <div>
        <Link 
          to='/user/signup'
            className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Sign-in as User
        </Link>
      </div>
    </div>
  )
}

export default Captainlogin