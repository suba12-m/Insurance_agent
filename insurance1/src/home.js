import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [showModal, setShowModal] = useState(false); // To control the modal

  const insuranceData = [
    {
      imgSrc: "/images/car.jpg",
      title: "Car Insurance",
      description: "Protects your car against damages, accidents, and theft.",
    },
    {
      imgSrc: "/images/bike.jpg",
      title: "Bike Insurance",
      description: "Comprehensive coverage for bikes against accidents and theft.",
    },
    {
      imgSrc: "/images/travel.png",
      title: "Travel Insurance",
      description: "Covers trip cancellations, medical emergencies, and more.",
    },
    {
      imgSrc: "/images/fire.jpg",
      title: "Fire Insurance",
      description: "Offers financial protection against damages caused by fire and related incidents.",
    },
    {
      imgSrc: "/images/life.png",
      title: "Life Insurance",
      description: "Provides financial security for your loved ones.",
    },
    {
      imgSrc: "/images/home.png",
      title: "Home Insurance",
      description: "Protects your home and belongings from unforeseen damages.",
    },
  ];

  const handleInsuranceClick = () => {
    setShowModal(true); // Show the modal when unauthenticated
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
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
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
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
            onClick={handleInsuranceClick} // Show login modal
            style={{
              cursor: 'not-allowed',
               // Make it visually clear that the box is disabled
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

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-box">
            <p>You need to log in to access this feature.</p>
            <div className="modal-actions">
              <button onClick={closeModal} className="btn-secondary">Close</button>
              <Link to="/login" className="btn-primary">Log In</Link>
            </div>
          </div>
        </div>
      )}

      <footer>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;