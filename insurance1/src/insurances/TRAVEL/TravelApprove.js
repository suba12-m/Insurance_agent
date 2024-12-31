import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TravelApprove.css';

const plans = [
  {
    provider: 'WanderSure Network',
    coverageType: 'Worldwide',
    premium: 5000,
    totalcoverage:1150000,
    medicalCoverage: 1000000,
    tripCancellationCoverage: 100000,
    baggageLossCoverage: 50000,
  },
  {
    provider: 'AsiaCover Specialists',
    coverageType: 'Asia',
    premium: 3000,
    totalcoverage:575000,
    medicalCoverage: 500000,
    tripCancellationCoverage: 50000,
    baggageLossCoverage: 25000,
  },
  {
    provider: 'Explorer Care Group',
    coverageType: 'Europe, USA',
    premium: 8000,
    totalcoverage:1800000,
    medicalCoverage: 1500000,
    tripCancellationCoverage: 200000,
    baggageLossCoverage: 100000,
  },
  {
    provider: 'TripSafe Providers',
    coverageType: 'Domestic',
    premium: 1500,
    totalcoverage:235000,
    medicalCoverage: 200000,
    tripCancellationCoverage: 25000,
    baggageLossCoverage: 10000,
  },
  {
    provider: 'Global Travel Assure',
    destinationCoverage: 'Worldwide',
    premium: 6500,
    totalcoverage:1425000,
    medicalCoverage: 1200000,
    tripCancellationCoverage: 150000,
    baggageLossCoverage: 75000,
  },
  {
    provider: 'AsiaSecure Network',
    destinationCoverage: 'Asia',
    premium: 2800,
    totalcoverage:65000,
    medicalCoverage: 600000,
    tripCancellationCoverage: 30000,
    baggageLossCoverage: 20000,
  },
  {
    provider: 'Secure Explorer Plus',
    destinationCoverage: 'Europe',
    premium: 7500,
    totalcoverage:1775000,
    medicalCoverage: 1400000,
    tripCancellationCoverage: 250000,
    baggageLossCoverage: 125000,
  },
  {
    provider: 'Nomad Essentials Hub',
    destinationCoverage: 'Worldwide',
    premium: 9000,
    totalcoverage:2250000,
    medicalCoverage: 1800000,
    tripCancellationCoverage: 300000,
    baggageLossCoverage: 150000,
  },
  {
    provider: 'Easy Travel Assist',
    destinationCoverage: 'Domestic',
    premium: 1200,
    totalcoverage:178000,
    medicalCoverage: 150000,
    tripCancellationCoverage: 20000,
    baggageLossCoverage: 8000,
  },
  {
    provider: 'SafeWander Services',
    destinationCoverage: 'Africa, Asia',
    premium: 4500,
    totalcoverage:930000,
    medicalCoverage: 800000,
    tripCancellationCoverage: 100000,
    baggageLossCoverage: 30000,
  },
];

const TravelApproveform = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [clientDetails, setClientDetails] = useState({
    fullName: '',
    travelID: '',
    contactNumber: '',
    email: '',
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
    navigate('/insurances/Travel/TravelQuotation', {
      state: {
        clientDetails,
        selectedPlan,
      },
    });
  };

  return (
    <div className="approval-form">
      <h2>Travel Insurance Approval Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="plan">Select Plan:</label>
          <select id="plan" name="plan" onChange={handlePlanChange} required>
            <option value="" disabled selected>
              Select a Plan
            </option>
            {plans.map((plan, index) => (
              <option key={index} value={plan.provider}>
                {plan.provider} 
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
              <label>Total Coverage(INR):</label>
              <input type="number" value={selectedPlan.totalcoverage} readOnly />
            </div>
            <div className="form-group">
              <label>Medical Coverage (INR):</label>
              <input type="number" value={selectedPlan.medicalCoverage} readOnly />
            </div>
            <div className="form-group">
              <label>Trip Cancellation Coverage (INR):</label>
              <input type="number" value={selectedPlan.tripCancellationCoverage} readOnly />
            </div>
            <div className="form-group">
              <label>Baggage Loss Coverage (INR):</label>
              <input type="number" value={selectedPlan.baggageLossCoverage} readOnly />
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
          <label>Travel ID:</label>
          <input
            type="text"
            name="travelID"
            value={clientDetails.travelID}
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

export default TravelApproveform;