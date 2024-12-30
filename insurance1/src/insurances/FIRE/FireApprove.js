import React, { useState, useEffect } from 'react';
import './FireApprove.css';
import { useNavigate } from 'react-router-dom';

const fireProviders = [
  'A1 Insurance Services',
  'BlazeCare Providers',
  'All-Risk Solutions',
  'FireProtect Agency',
  'Shielding Providers',
  'FlameSecure Group',
  'Safety First Hub',
  'FlameAssist Providers',
  'RapidFire Solutions',
  'FireHome Agency',
];

const firePlans = [
  {
    providerName: 'A1 Insurance Services',
    coverageAmount: 5000000,
    premiumAmount: 10000,
    coverageType: 'Fire, Lightning, Floods, Earthquake, Terrorism',
    claimProcessTime: 7,
    customerRating: 4.5,
    addOns: ['Lightning', 'Floods', 'Earthquake', 'Terrorism'],
  },
  {
    providerName: 'BlazeCare Providers',
    coverageAmount: 7500000,
    premiumAmount: 15000,
    coverageType: 'Fire, Storm, Explosion, Loss of Rent, Debris Removal',
    claimProcessTime: 10,
    customerRating: 4.3,
    addOns: ['Storm', 'Loss of Rent', 'Debris Removal'],
  },
  {
    providerName: 'All-Risk Solutions',
    coverageAmount: 10000000,
    premiumAmount: 20000,
    coverageType: 'All-Risk, Machinery Breakdown',
    claimProcessTime: 5,
    customerRating: 4.7,
    addOns: ['Machinery Breakdown'],
  },
  {
    providerName: 'FireProtect Agency',
    coverageAmount: 6000000,
    premiumAmount: 12000,
    coverageType: 'Fire, Earthquake, Terrorism Coverage',
    claimProcessTime: 8,
    customerRating: 4.2,
    addOns: ['Earthquake', 'Terrorism'],
  },
  {
    providerName: 'Shielding Providers',
    coverageAmount: 3000000,
    premiumAmount: 8000,
    coverageType: 'Fire, Floods, Relocation Assistance',
    claimProcessTime: 7,
    customerRating: 4.1,
    addOns: ['Floods', 'Relocation Assistance'],
  },
  {
    providerName: 'FlameSecure Group',
    coverageAmount: 12000000,
    premiumAmount: 25000,
    coverageType: 'Fire, Explosion, Storms, Stock Protection',
    claimProcessTime: 6,
    customerRating: 4.8,
    addOns: ['Explosion', 'Stock Protection'],
  },
  {
    providerName: 'Safety First Hub',
    coverageAmount: 9000000,
    premiumAmount: 18000,
    coverageType: 'All-Risk, Temporary Accommodation Cover',
    claimProcessTime: 9,
    customerRating: 4.4,
    addOns: ['Temporary Accommodation'],
  },
  {
    providerName: 'FlameAssist Providers',
    coverageAmount: 4000000,
    premiumAmount: 9000,
    coverageType: 'Fire, Lightning, Debris Clearance',
    claimProcessTime: 6,
    customerRating: 4.3,
    addOns: ['Lightning', 'Debris Clearance'],
  },
  {
    providerName: 'RapidFire Solutions',
    coverageAmount: 7000000,
    premiumAmount: 14000,
    coverageType: 'Fire, Floods, Earthquake, Machinery Breakdown',
    claimProcessTime: 5,
    customerRating: 4.6,
    addOns: ['Floods', 'Earthquake', 'Machinery Breakdown'],
  },
  {
    providerName: 'FireHome Agency',
    coverageAmount: 3500000,
    premiumAmount: 7500,
    coverageType: 'Fire, Storm, Explosion, Loss of Rent',
    claimProcessTime: 10,
    customerRating: 4.2,
    addOns: ['Storm', 'Loss of Rent'],
  },
];

const FireApprove = () => {
  const navigate = useNavigate();
  const [selectedProvider, setSelectedProvider] = useState('');
  const [planDetails, setPlanDetails] = useState({
    coverageAmount: 0,
    premiumAmount: 0,
    coverageType: '',
    claimProcessTime: 0,
    customerRating: 0,
    addOns: [],
  });
  const [clientDetails, setClientDetails] = useState({
    fullName: '',
    address: '',
    contactNumber: '',
    email: '',
  });

  useEffect(() => {
    // When a provider is selected, update the plan details
    if (selectedProvider) {
      const selectedPlan = firePlans.find((plan) => plan.providerName === selectedProvider);
      if (selectedPlan) {
        setPlanDetails(selectedPlan);
      }
    }
  }, [selectedProvider]);

  const handleProviderChange = (e) => {
    setSelectedProvider(e.target.value);
  };

  const handleAddOnsChange = (e) => {
    const selectedAddOns = Array.from(e.target.selectedOptions, option => option.value);
    setPlanDetails({ ...planDetails, addOns: selectedAddOns });
  };

  const handleInputChange = (e) => {
    setClientDetails({ ...clientDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to Fire Quotation page with client and plan details
    navigate('/insurances/FIRE/FireQuotation', {
      state: {
        clientDetails,
        selectedProvider,
        ...planDetails,
      },
    });
  };

  return (
    <div className="approval-form">
      <h2>Fire Insurance Approval Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="provider">Provider Name:</label>
          <select
            id="provider"
            name="provider"
            value={selectedProvider}
            onChange={handleProviderChange}
            required
          >
            <option value="" disabled>
              Select Provider
            </option>
            {fireProviders.map((provider, index) => (
              <option key={index} value={provider}>
                {provider}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Coverage Amount (INR):</label>
          <input
            type="text"
            name="coverageAmount"
            value={planDetails.coverageAmount.toLocaleString()} // Show formatted amount
            readOnly
          />
        </div>

        <div className="form-group">
          <label>Premium Amount (INR):</label>
          <input
            type="text"
            name="premiumAmount"
            value={planDetails.premiumAmount.toLocaleString()} // Show formatted premium amount
            readOnly
          />
        </div>

        <div className="form-group">
          <label>Coverage Type:</label>
          <input
            type="text"
            name="coverageType"
            value={planDetails.coverageType}
            readOnly
          />
        </div>

        <div className="form-group">
          <label>Claim Process Time (Days):</label>
          <input
            type="number"
            name="claimProcessTime"
            value={planDetails.claimProcessTime}
            readOnly
          />
        </div>

        <div className="form-group">
          <label>Customer Rating:</label>
          <input
            type="number"
            step="0.1"
            name="customerRating"
            value={planDetails.customerRating.toFixed(1)}
            readOnly
          />
        </div>

        <div className="form-group">
          <label>Additional Add-Ons:</label>
          <select
            multiple
            value={planDetails.addOns}
            onChange={handleAddOnsChange}
            required
          >
            {firePlans.find(plan => plan.providerName === selectedProvider)?.addOns.map((addon, index) => (
              <option key={index} value={addon}>
                {addon}
              </option>
            ))}
          </select>
        </div>

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
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={clientDetails.address}
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

export default FireApprove;