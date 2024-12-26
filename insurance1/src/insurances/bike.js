import React, { useState } from 'react';

import './bike.css';

const Bike = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    bikeModel: '',
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
        ownerName: '',
        bikeModel: '',
        registrationNumber: '',
        contactNumber: '',
        email: '',
      });
    }
  };

  return (
 

    <div className="bike-insurance-form">
      <h2>Bike Insurance Application</h2>
      {submitted ? (
        <div className="success-message">
          <h3>Thank You!</h3>
          <p>Your bike insurance application has been submitted successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Owner's Name:</label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="Enter owner's name"
              required
            />
          </div>
          <div className="form-group">
            <label>Bike Model:</label>
            <select
              name="bikeModel"
              value={formData.bikeModel}
              onChange={handleChange}
              required
            >
              <option value="">Select Bike Model</option>
              {['Honda CB Shine', 'Royal Enfield Classic', 'Yamaha R15', 'TVS Apache', 'Kawasaki Ninja'].map(
                (model, index) => (
                  <option key={index} value={model}>
                    {model}
                  </option>
                )
              )}
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

export default Bike;