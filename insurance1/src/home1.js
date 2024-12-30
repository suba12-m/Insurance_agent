import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './home1.css';

const Home1 = () => {
  const [activeCard, setActiveCard] = useState(null); // To track the active card for description
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown visibility state
  const navigate = useNavigate();

  // Fetch and parse the authentication status
  const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated') || "false");

  const insuranceData = [
    {
      imgSrc: "/images/car.jpg",
      title: "Car Insurance",
      description: "Protects your car against damages, accidents, and theft.",
      path: "/insurances/car"
    },
    {
      imgSrc: "/images/bike.jpg",
      title: "Bike Insurance",
      description: "Comprehensive coverage for bikes against accidents and theft.",
      path: "/insurances/BIKE/bike"
    },
    {
      imgSrc: "/images/travel.png",
      title: "Travel Insurance",
      description: "Covers trip cancellations, medical emergencies, and more.",
      path: "/insurances/travel"
    },
    {
      imgSrc: "/images/fire.jpg",
      title: "Fire Insurance",
      description: "Offers financial protection against damages caused by fire and related incidents.",
      path: "/insurances/fire"
    },
    {
      imgSrc: "/images/life.png",
      title: "Life Insurance",
      description: "Provides financial security for your loved ones.",
      path: "/insurances/life"
    },
    {
      imgSrc: "/images/home.png",
      title: "Home Insurance",
      description: "Protects your home and belongings from unforeseen damages.",
      path: "/insurances/homeIns"
    },
  ];

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, navigate]);

  const handleInsuranceClick = (insurance) => {
    if (!isAuthenticated) {
      alert("Please log in to access this feature.");
      navigate('/login'); // Redirect to login page
    } else if (insurance.path) {
      navigate(insurance.path); // Navigate to the specific insurance route
    } else {
      alert(`No details available for ${insurance.title}.`);
    }
  };

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownOpen && !event.target.closest('.profile-dropdown')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [dropdownOpen]);

  // Handle logout and redirect to home page
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Remove authentication status
    navigate('/'); // Redirect to home page
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="/images/ins_LOGO.png" alt="Logo" style={{ width: '290px', height: '100px' }} />
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li>
              <div className="profile-dropdown">
                <img 
                  src="/images/user-icon.png" 
                  alt="User Icon" 
                  className="user-icon" 
                  onClick={toggleDropdown} 
                />
                {dropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><Link to="/dashboard">My Dashboard</Link></li>
                    <li><button onClick={handleLogout} className="logout-button">Logout</button></li> {/* Use a button instead of Link */}
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <div className="banner">
        <h1>Presenting 1<sup>st</sup> Time in India - Live Brokerage & InstaPay</h1>
        <p>Live Commission Tracking + Immediate Commission Payment</p>
      </div>

      <div className="features">
        <div className="feature-item">Comparison</div>
        <div className="feature-item">Advisory</div>
        <div className="feature-item">Convenience</div>
      </div>

      <div className="insurance-container">
        {insuranceData.map((insurance, index) => (
          <div
            key={index}
            className={`insurance-box ${activeCard === index ? "active" : ""}`}
            onMouseEnter={() => setActiveCard(index)} // Show description on hover
            onMouseLeave={() => setActiveCard(null)} // Hide description on hover out
            onClick={() => handleInsuranceClick(insurance)} // Handle authentication and navigation
            style={{
              cursor: isAuthenticated ? 'pointer' : 'not-allowed',
              opacity: isAuthenticated ? 1 : 0.6, // Make it visually clear if the box is disabled
            }}
          >
            <img src={insurance.imgSrc} alt={insurance.title} />
            <div className="insurance-info">
              <h3>{insurance.title}</h3>
              {activeCard === index && (
                <p className="insurance-description">{insurance.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <footer>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home1;