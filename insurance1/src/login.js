import React ,{useState} from 'react'
import './login.css'
import { Link , useNavigate} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }), 
        });
        
        const data = await response.json();
        console.log("Server response:", data); 
        console.log("Email:", email); 
        console.log("Password:", password); 

        if (response.ok) {
            setMessage(data.msg); 
            localStorage.setItem('isAuthenticated', JSON.stringify(true));
            navigate('/home1'); 
        } else {
            setMessage(data.msg); 
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
          <img src="/images/ins_LOGO.png" alt="User Avatar" style={{ width: '290px', height: '100px' }} />
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      <div>

        <div className="login">
        <p className='loginp'> AGENT LOGIN</p>          
        <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
            />
            <button className="button" type="submit">Login</button>
          </form>
          {message && <p>{message}</p>} {/* Display success or error message */}
        </div>
      </div>
    </div>
  );
}

export default Login;