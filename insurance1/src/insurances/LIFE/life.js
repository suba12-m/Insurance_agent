import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './life.css';

const Life= () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    contactNumber: '',
    email: '',
    coverageAmount: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use navigate hook

  
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
      const response = await fetch('https://localhost:3000/api/submit-life-form', {
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
          age: '',
          gender: '',
          contactNumber: '',
          email: '',
          coverageAmount: '',
        });
        navigate('/insurances/LIFE/LifeChart');
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
    <div className="life-insurance-form">
      <h2>Life Insurance Application</h2>
      {submitted ? (
        <div className="success-message">
          <h3>Thank You!</h3>
          <p>Your life insurance application has been submitted successfully.</p>
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
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter age"
              required
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              
              required
            >
              <option placeholder="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
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
          <div className="form-group">
            <label>Coverage Amount:</label>
            <input
              type="number"
              name="coverageAmount"
              value={formData.coverageAmount}
              onChange={handleChange}
              placeholder="Enter coverage amount"
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Life;