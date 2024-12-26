import React, { useState } from 'react';
import './travel.css';

const Travel = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    destination: '',
    travelStartDate: '',
    travelEndDate: '',
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
        age: '',
        destination: '',
        travelStartDate: '',
        travelEndDate: '',
        contactNumber: '',
        email: '',
      });
    }
  };

  return (
    <div className="travel-insurance-form">
      <h2>Travel Insurance Application</h2>
      {submitted ? (
        <div className="success-message">
          <h3>Thank You!</h3>
          <p>Your travel insurance application has been submitted successfully.</p>
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
            <label>Destination:</label>
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
            >
              <option value="">Select Destination</option>
              {['USA', 'Canada', 'Australia', 'Europe', 'Asia', 'South America'].map((destination, index) => (
                <option key={index} value={destination}>
                  {destination}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Travel Start Date:</label>
            <input
              type="date"
              name="travelStartDate"
              value={formData.travelStartDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Travel End Date:</label>
            <input
              type="date"
              name="travelEndDate"
              value={formData.travelEndDate}
              onChange={handleChange}
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

export default Travel;