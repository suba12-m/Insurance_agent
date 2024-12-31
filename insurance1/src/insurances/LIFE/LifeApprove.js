import React, { useState } from 'react';
import './LifeApprove.css';
import { useNavigate } from 'react-router-dom';

const lifePlans = [
  {
    name: 'LifeSecure Providers',
    sumAssured: '5,000,000',
    premium: '8,000',
    policyTerm: '20',
    ageEligibility: '18-55',
    ridersAvailable: 'Critical Illness, Accidental',
    claimRatio: '98.5',
  },
  {
    name: 'ProtectWell Network',
    sumAssured: '7,500,000',
    premium: '12,000',
    policyTerm: '25',
    ageEligibility: '21-60',
    ridersAvailable: 'Waiver of Premium, Disability',
    claimRatio: '97.8',
  },
  {
    name: 'SecureTomorrow Group',
    sumAssured: '10,000,000',
    premium: '15,000',
    policyTerm: '30',
    ageEligibility: '18-50',
    ridersAvailable: 'Critical Illness, Income Benefit',
    claimRatio: '98.1',
  },
  {
    name: 'FamilyFirst Network',
    sumAssured: '2,500,000',
    premium: '5,500',
    policyTerm: '15',
    ageEligibility: '25-65',
    ridersAvailable: 'Accidental Death',
    claimRatio: '96.9',
  },
  {
    name: 'FutureGuard Agency',
    sumAssured: '15,000,000',
    premium: '18,000',
    policyTerm: '25',
    ageEligibility: '18-40',
    ridersAvailable: 'Disability, Waiver of Premium',
    claimRatio: '99.1',
  },
  {
    name: 'EasyLife Hub',
    sumAssured: '4,000,000',
    premium: '7,000',
    policyTerm: '20',
    ageEligibility: '22-50',
    ridersAvailable: 'Income Benefit',
    claimRatio: '97.3',
  },
  {
    name: 'LifeCare Providers',
    sumAssured: '3,000,000',
    premium: '6,000',
    policyTerm: '18',
    ageEligibility: '20-55',
    ridersAvailable: 'Critical Illness',
    claimRatio: '97.6',
  },
  {
    name: 'PrimeLife Solutions',
    sumAssured: '10,000,000',
    premium: '14,000',
    policyTerm: '25',
    ageEligibility: '19-45',
    ridersAvailable: 'Accidental Death, Disability',
    claimRatio: '98.9',
  },
  {
    name: 'SecurePlus Providers',
    sumAssured: '2,000,000',
    premium: '4,800',
    policyTerm: '10',
    ageEligibility: '30-60',
    ridersAvailable: 'Waiver of Premium',
    claimRatio: '96.5',
  },
  {
    name: 'GuardLife Services',
    sumAssured: '6,000,000',
    premium: '10,000',
    policyTerm: '20',
    ageEligibility: '25-50',
    ridersAvailable: 'Critical Illness, Income Benefit',
    claimRatio: '98.3',
  },
];

const LifeApproveform = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [clientDetails, setClientDetails] = useState({
    fullName: '',
    dateOfBirth: '',
    contactNumber: '',
    email: '',
  });

  const handlePlanChange = (e) => {
    const planName = e.target.value;
    const plan = lifePlans.find((p) => p.name === planName);
    setSelectedPlan(plan);
  };

  const handleInputChange = (e) => {
    setClientDetails({ ...clientDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/insurances/LIFE/LifeQuotation', {
      state: {
        clientDetails,
        selectedPlan,
      },
    });
  };

  return (
    <div className="life-approval-form">
      <h2>Life Insurance Approval Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="plan">Select Plan:</label>
          <select id="plan" name="plan" onChange={handlePlanChange} required>
            <option value="" disabled selected>
              Select a Plan
            </option>
            {lifePlans.map((plan, index) => (
              <option key={index} value={plan.name}>
                {plan.name}
              </option>
            ))}
          </select>
        </div>

        {selectedPlan && (
          <div className="plan-details">
            <div className="form-group">
              <label>Sum Assured (INR):</label>
              <input type="text" value={selectedPlan.sumAssured} readOnly />
            </div>
            <div className="form-group">
              <label>Premium Amount (INR):</label>
              <input type="text" value={selectedPlan.premium} readOnly />
            </div>
            <div className="form-group">
              <label>Policy Term (Years):</label>
              <input type="text" value={selectedPlan.policyTerm} readOnly />
            </div>
            <div className="form-group">
              <label>Age Eligibility:</label>
              <input type="text" value={selectedPlan.ageEligibility} readOnly />
            </div>
            <div className="form-group">
              <label>Riders Available:</label>
              <input type="text" value={selectedPlan.ridersAvailable} readOnly />
            </div>
            <div className="form-group">
              <label>Claim Settlement Ratio:</label>
              <input type="text" value={selectedPlan.claimRatio} readOnly />
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
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={clientDetails.dateOfBirth}
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

export default LifeApproveform;