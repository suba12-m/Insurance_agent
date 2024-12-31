import React, { useState } from 'react';
import './CarApprove.css';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    provider: 'ICICI Lombard',
    planName: 'Standard Plan',
    coverageType: 'Third-Party',
    premium: 6000,
    deductible: 2000,
    maxCoverage: 800000,
    features: 'Personal Accident Cover',
    rating: 4.0,
  },
  {
    provider: 'ICICI Lombard',
    planName: 'Comprehensive Plus',
    coverageType: 'Comprehensive',
    premium: 16000,
    deductible: 1000,
    maxCoverage: 2500000,
    features: 'Roadside Assistance, Theft Protection',
    rating: 4.5,
  },
  {
    provider: 'Bajaj Allianz',
    planName: 'Zero Dep Plan',
    coverageType: 'Zero-Depreciation',
    premium: 20000,
    deductible: 1000,
    maxCoverage: 3000000,
    features: 'Engine Protect, Collision Coverage',
    rating: 4.6,
  },
  {
    provider: 'Tata AIG',
    planName: 'Auto Secure Plan',
    coverageType: 'Comprehensive',
    premium: 18000,
    deductible: 1500,
    maxCoverage: 2800000,
    features: 'Accident Cover, Roadside Assistance',
    rating: 4.7,
  },
  {
    provider: 'HDFC Ergo',
    planName: 'Basic Liability Plan',
    coverageType: 'Third-Party',
    premium: 6500,
    deductible: 2000,
    maxCoverage: 1000000,
    features: 'Personal Accident Cover',
    rating: 4.2,
  },
];

const CarApproveform = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [clientDetails, setClientDetails] = useState({
    fullName: '',
    carRegistrationNumber: '',
    contactNumber: '',
    email: '',
  });

  const handlePlanChange = (e) => {
    const planName = e.target.value;
    const plan = plans.find((p) => p.planName === planName);
    setSelectedPlan(plan);
  };

  const handleInputChange = (e) => {
    setClientDetails({ ...clientDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/insurances/CAR/CarQuotation', {
      state: {
        clientDetails,
        selectedPlan,
      },
    });
  };

  return (
    <div className="approval-form">
      <h2>Car Insurance Approval Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="plan">Select Plan:</label>
          <select id="plan" name="plan" onChange={handlePlanChange} required>
            <option value="" disabled selected>
              Select a Plan
            </option>
            {plans.map((plan, index) => (
              <option key={index} value={plan.planName}>
                {plan.planName} - {plan.provider}
              </option>
            ))}
          </select>
        </div>

        {selectedPlan && (
          <div className="plan-details">
            <div className="form-group">
              <label>Coverage Type:</label>
              <input type="text" value={selectedPlan.coverageType} readOnly />
            </div>
            <div className="form-group">
              <label>Premium Amount (INR):</label>
              <input type="number" value={selectedPlan.premium} readOnly />
            </div>
            <div className="form-group">
              <label>Deductible (INR):</label>
              <input type="number" value={selectedPlan.deductible} readOnly />
            </div>
            <div className="form-group">
              <label>Max Coverage (INR):</label>
              <input type="number" value={selectedPlan.maxCoverage} readOnly />
            </div>
            <div className="form-group">
              <label>Features:</label>
              <input type="text" value={selectedPlan.features} readOnly />
            </div>
            <div className="form-group">
              <label>Rating:</label>
              <input type="number" value={selectedPlan.rating} readOnly />
            </div>
          </div>
        )}

        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={clientDetails.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Car Registration Number:</label>
          <input
            type="text"
            name="carRegistrationNumber"
            value={clientDetails.carRegistrationNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="tel"
            name="contactNumber"
            value={clientDetails.contactNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={clientDetails.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Generate Quotation
        </button>
      </form>
    </div>
  );
};

export default CarApproveform;