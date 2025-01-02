import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './fire.css';

const Fire = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    propertyType: '',
    fireRiskLevel: '',
    propertyAddress: '',
    contactNumber: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate the form data
    if (Object.values(formData).some((field) => field.trim() === '')) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('https://insurance-agent.onrender.com/api/submit-fire-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setSubmitted(true);
        // Reset form
        setFormData({
          fullName: '',
          propertyType: '',
          fireRiskLevel: '',
          propertyAddress: '',
          contactNumber: '',
          email: '',
        });
        navigate('/insurances/FIRE/FireChart')
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="fire-insurance-form">
      <h2>Fire Insurance Application</h2>
      {submitted ? (
        <div className="success-message">
          <h3>Thank You!</h3>
          <p>Your fire insurance application has been submitted successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
           {error && <div className="error-message">{error}</div>}
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />
          </div>
          <div className="form-group">
            <label>Property Type:</label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
            >
              <option value="">Select Property Type</option>
              {['Residential', 'Commercial', 'Industrial', 'Agricultural'].map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Fire Risk Level:</label>
            <select
              name="fireRiskLevel"
              value={formData.fireRiskLevel}
              onChange={handleChange}
              required
            >
              <option value="">Select Risk Level</option>
              {['Low', 'Medium', 'High', 'Critical'].map((risk, index) => (
                <option key={index} value={risk}>
                  {risk}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Property Address:</label>
            <input
              type="text"
              name="propertyAddress"
              value={formData.propertyAddress}
              onChange={handleChange}
              placeholder="Enter property address"
              required
            />
          </div>
          <div className="form-group">
            <label>Contact Number:</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter contact number"
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Fire;