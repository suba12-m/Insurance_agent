import React, { useState } from 'react';
import './car.css';

const Car = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    carModel: '',
    insuranceType: '',
    registrationNumber: '',
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
        carModel: '',
        insuranceType: '',
        registrationNumber: '',
        contactNumber: '',
        email: '',
      });
    }
  };

  return (
    <div className="car-insurance-form">
      <h2>Car Insurance Application</h2>
      {submitted ? (
        <div className="success-message">
          <h3>Thank You!</h3>
          <p>Your car insurance application has been submitted successfully.</p>
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
            <label>Car Model:</label>
            <select
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              required
            >
              <option value="">Select a Car Model</option>
              {[
                'Toyota Corolla',
                'Honda Accord',
                'Ford Explorer',
                'Tesla Model S',
                'BMW 3 Series',
                'Audi A4',
              ].map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Insurance Type:</label>
            <select
              name="insuranceType"
              value={formData.insuranceType}
              onChange={handleChange}
              required
            >
              <option value="">Select Insurance Type</option>
              {[
                'Comprehensive',
                'Third-Party Liability',
                'Collision Coverage',
                'Personal Injury Protection',
              ].map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Registration Number:</label>
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              placeholder="Enter registration number"
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

export default Car;