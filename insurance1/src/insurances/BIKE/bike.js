import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './bike.css';

const Bike = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    bikeModel: '',
    registrationNumber: '',
    contactNumber: '',
    email: '',
  });

  const navigate = useNavigate(); // For navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(formData).some((field) => field.trim() === '')) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Simulating form submission (Replace with actual API call if needed)
      console.log('Form data submitted:', formData);
      setFormData({
        fullName: '',
        bikeModel: '',
        registrationNumber: '',
        contactNumber: '',
        email: '',
      });
      // Navigate to BikeChart page
      navigate('/insurances/BIKE/BikeChart');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bike-insurance-form">
      <h2>Bike Insurance Application</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Owner's Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
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
    </div>
  );
};

export default Bike;