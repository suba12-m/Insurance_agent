import React, { useState } from 'react';
import './homeIns.css';

const HomeIns = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    propertyType: '',
    propertyAddress: '',
    propertyValue: '',
    contactNumber: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form data
    if (Object.values(formData).some((field) => field.trim() === '')) {
      alert('Please fill in all fields.');
    } else {
      setSubmitted(true);
      console.log('Form Data:', formData);
      // Reset form
      setFormData({
        fullName: '',
        propertyType: '',
        propertyAddress: '',
        propertyValue: '',
        contactNumber: '',
        email: '',
      });
    }
  };

  return (
    <div className="home-insurance-form">
      <h2>Home Insurance Application</h2>
      {submitted ? (
        <div className="success-message">
          <h3>Thank You!</h3>
          <p>Your home insurance application has been submitted successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
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
              {['Apartment', 'Villa', 'Independent House', 'Farmhouse', 'Condominium'].map((type, index) => (
                <option key={index} value={type}>
                  {type}
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
            <label>Property Value (in USD):</label>
            <input
              type="number"
              name="propertyValue"
              value={formData.propertyValue}
              onChange={handleChange}
              placeholder="Enter property value"
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

export default HomeIns;