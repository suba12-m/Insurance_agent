import React from 'react'
import './login.css'


function Login() {
  return (
    <div>
      <div className='login'>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button className='button'>Login</button>
      </div>
    </div>
  )
}

export default Login;