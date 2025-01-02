import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('https://insurance-agent.onrender.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Server response:', data);

      if (response.ok) {
        setMessage(data.msg || 'Registration successful!');
        setTimeout(() => navigate('/login'), 2000); // Navigate to login page after 2 seconds
      } else {
        setMessage(data.msg || 'Registration failed. Try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <header className="header">
        <div className="home-logo">
          <img
            src="/images/ins_LOGO.png"
            alt="User Avatar"
            style={{ width: '290px', height: '100px' }}
          />
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      <div className="signup">
        <p className="signupp">AGENT SIGNUP</p>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button className="sbutton" type="submit">Signup</button>
        </form>
        {message && <p className="message">{message}</p>} {/* Display feedback messages */}
      </div>
    </div>
  );
}

export default Signup;