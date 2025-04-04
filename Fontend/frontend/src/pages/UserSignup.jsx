import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserSignup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const navigate = useNavigate()

  const { user, setUser } = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
    
      if (response.status === 201) {
        const data = await response.data
        setUser(data.user)
            navigate('/home')
      }
    } catch (error) {
      console.error('Error creating account:', error.message);
    }
  
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

        <form onSubmit={(e) => {
          submitHandler(e);
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
            Create account
          </button>

          <div className="text-center">
            <p className='text-center'>Already have an account? <Link to="/user/login" className='text-blue-600 hover:underline'>
              Log-in here
            </Link></p>
          </div>
        </form>
      </div>
      <div>
        <Link 
          to='/captain/login'
            className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Sign-in as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserSignup