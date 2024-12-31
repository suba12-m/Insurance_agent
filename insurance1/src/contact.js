import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './contact.css';

const Contact = () => {

  // Fetch and parse the authentication status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log('Form submitted', formData);
    setFormData({ name: '', email: '', message: '' }); // Reset form after submission
  };

  
  

  return (
    <div>
      <header className="header">
        <div className="home-logo">
          <img src="/images/ins_LOGO.png" alt="Logo" style={{ width: '290px', height: '100px' }} />
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li>
            
            </li>
          </ul>
        </nav>
      </header>

      <div className="contact-container">
        <div className="banner">
          <h1>Contact Us</h1>
          <p className='homep'>We are here to assist you. Please feel free to get in touch with us!</p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
            placeholder='Enter your name...'
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
            placeholder='Enter your email...'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Your Message</label>
            <textarea
            placeholder='Enter your message...'
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Footer with Contact Information */}

        
      <p className='bottom'>&copy; Email: support@insureal.com  ||  Phone: +1 (123) 456-7890  ||  Address: 123 Main Street, Chennai, India</p>
      
        
      </div>
    </div>
  );
};

export default Contact;