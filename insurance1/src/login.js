import React from 'react'
import './login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <header className="header">
        <div className="logo">
        <img src="/images/ins_LOGO.png" alt="User Avatar" style={{ width: '290px',height:'100px'}} />
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="#">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      

    <div>
      <div className='login'>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button className='button'>Login</button>
      </div>
    </div>
    </div>
  )
}

export default Login;