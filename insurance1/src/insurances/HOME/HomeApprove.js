import React, { useState } from 'react';
import './HomeApprove.css';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    provider: 'HomeProtect Solutions',
    coverageAmount: 5000000,
    premium: 10000,
    coverageType: 'Fire, Theft, Natural Calamities, Terrorism Cover, Tenant Liability',
    claimProcessTime: 7,
  },
  {
    provider: 'SafeNest Providers',
    coverageAmount: 7000000,
    premium: 13000,
    coverageType: 'All-Risk, Electronic Items Cover',
    claimProcessTime: 8,
  },
  {
    provider: 'SecureHaven Agency',
    coverageAmount: 10000000,
    premium: 20000,
    coverageType: 'Fire, Theft, Relocation Assistance',
    claimProcessTime: 6,
  },
  {
    provider: 'ShieldPlus Group',
    coverageAmount: 3000000,
    premium: 8000,
    coverageType: 'Fire, Floods, Debris Removal',
    claimProcessTime: 7,
  },
  {
    provider: 'FlameGuard Network',
    coverageAmount: 12000000,
    premium: 25000,
    coverageType: 'Fire, Earthquake, Temporary Accommodation',
    claimProcessTime: 9,
  },
  {
    provider: 'HomeAssure Hub',
    coverageAmount: 6000000,
    premium: 12000,
    coverageType: 'Fire, Theft, Loss of Rent',
    claimProcessTime: 10,
  },
  {
    provider: 'CoverHome Specialists',
    coverageAmount: 9000000,
    premium: 18000,
    coverageType: 'All-Risk, Earthquake Coverage',
    claimProcessTime: 7,
  },
  {
    provider: 'ShelterSecure Providers',
    coverageAmount: 4000000,
    premium: 9500,
    coverageType: 'Fire, Lightning, Loss of Use Coverage',
    claimProcessTime: 8,
  },
  {
    provider: 'StaySafe Network',
    coverageAmount: 7000000,
    premium: 15000,
    coverageType: 'Fire, Storm, Tenant Liability',
    claimProcessTime: 6,
  },
  {
    provider: 'PrimeNest Agency',
    coverageAmount: 3500000,
    premium: 7500,
    coverageType: 'Fire, Theft, Relocation Assistance',
    claimProcessTime: 10,
  },
];

const HomeApproveForm = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [clientDetails, setClientDetails] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    propertyAddress: '',
  });

  const handlePlanChange = (e) => {
    const provider = e.target.value;
    const plan = plans.find((p) => p.provider === provider);
    setSelectedPlan(plan);
  };

  const handleInputChange = (e) => {
    setClientDetails({ ...clientDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/insurances/HOME/HomeQuotation', {
      state: {
        clientDetails,
        selectedPlan,
      },
    });
  };

  return (
    <div className="approval-form">
      <h2>Home Insurance Approval Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="plan">Select Provider:</label>
          <select id="plan" name="plan" onChange={handlePlanChange} required>
            <option value="" disabled selected>
              Select a Provider
            </option>
            {plans.map((plan, index) => (
              <option key={index} value={plan.provider}>
                {plan.provider} - ₹{plan.premium}
              </option>
            ))}
          </select>
        </div>

        {selectedPlan && (
          <div className="plan-details">
            <div className="form-group">
              <label>Coverage Amount (₹):</label>
              <input type="number" value={selectedPlan.coverageAmount} readOnly />
            </div>
            <div className="form-group">
              <label>Premium (₹):</label>
              <input type="number" value={selectedPlan.premium} readOnly />
            </div>
            <div className="form-group">
              <label>Coverage Type:</label>
              <textarea value={selectedPlan.coverageType} readOnly />
            </div>
            <div className="form-group">
              <label>Claim Process Time (Days):</label>
              <input type="number" value={selectedPlan.claimProcessTime} readOnly />
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

        <div className="form-group">
          <label>Property Address:</label>
          <textarea
            name="propertyAddress"
            value={clientDetails.propertyAddress}
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

export default HomeApproveForm;