import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home= () => {
  return (
    <div className='' >
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
      
      <div className="banner">
        <h1>Presenting 1<sup>st</sup> Time in India - Live Brokerage & InstaPay</h1>
        <p>Live Commission Tracking + Immediate Commission Payment</p>
        <button>Click Here</button>
      </div>

      <div className="features">
        <div className="feature-item">Comparison</div>
        <div className="feature-item">Advisory</div>
        <div className="feature-item">Convenience</div>
      </div>

      <div className="insurance">
        <div className="insurance-item">
          <img src="/images/car.jpeg" alt="Car Insurance" />
          <p>Car Insurance</p>
        </div>
        <div className="insurance-item">
          <img src="/images/bike.jpeg" alt="Bike Insurance" />
          <p>Bike Insurance</p>
        </div>
        <div className="insurance-item">
          <img src="/images/travel.jpeg" alt="Travel Insurance" />
          <p>Travel Insurance</p>
        </div>
        <div className="insurance-item">
          <img src="/images/health.jpeg" alt="Health Insurance" />
          <p>Health Insurance</p>
        </div>
        <div className="insurance-item">
          <img src="/images/life.png" alt="Life Insurance" />
          <p>Life Insurance</p>
        </div>
        <div className="insurance-item">
          <img src="/images/home.jpeg" alt="Home Insurance" />
          <p>Home Insurance</p>
        </div>
        
      </div>

      <footer>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
