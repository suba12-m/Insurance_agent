import React, { useState } from 'react';
import './ApprovalForm.css';
import { useNavigate } from 'react-router-dom';

const providers = [
  'Reliance General',
  'ICICI Lombard',
  'Bajaj Allianz',
  'HDFC Ergo',
  'New India Assurance',
  'TATA AIG',
];

const plans = [
  {
    providerName: 'Reliance General',
    planName: 'Basic Saver',
    coverageType: 'Third-Party',
    premiumAmount: 1500,
    claimSettlementRatio: 85,
    addOnFeatures: 'None',
    policyTerm: '1 Year',
    benefits: 'Affordable for basic needs',
    exclusions: 'Wear & Tear, Drunken Driving',
  },
  {
    providerName: 'ICICI Lombard',
    planName: 'Comprehensive Shield',
    coverageType: 'Comprehensive',
    premiumAmount: 3200,
    claimSettlementRatio: 92,
    addOnFeatures: 'Roadside Assistance, Engine Protection',
    policyTerm: '1 Year',
    benefits: 'Cashless claims, High claim approval rate',
    exclusions: 'Drunken Driving, Racing',
  },
  {
    providerName: 'Bajaj Allianz',
    planName: 'Premium Plus',
    coverageType: 'Comprehensive',
    premiumAmount: 4500,
    claimSettlementRatio: 95,
    addOnFeatures: 'Zero Depreciation, Medical Cover',
    policyTerm: '3 Years',
    benefits: 'Best for long-term, Extensive coverage',
    exclusions: 'Racing, Unauthorized Modifications',
  },
  {
    providerName: 'HDFC Ergo',
    planName: 'Third-Party Basic',
    coverageType: 'Third-Party',
    premiumAmount: 1000,
    claimSettlementRatio: 80,
    addOnFeatures: 'None',
    policyTerm: '1 Year',
    benefits: 'Budget-friendly for minimum legal requirements',
    exclusions: 'Wear & Tear, Own Damage',
  },
  {
    providerName: 'New India Assurance',
    planName: 'Zero Depreciation Plus',
    coverageType: 'Comprehensive with Zero Depreciation',
    premiumAmount: 4800,
    claimSettlementRatio: 96,
    addOnFeatures: 'Roadside Assistance, Passenger Cover',
    policyTerm: '3 Years',
    benefits: 'Covers full repair costs, Best for new bikes',
    exclusions: 'Drunken Driving, Racing',
  },
  {
    providerName: 'TATA AIG',
    planName: 'Family Rider Plan',
    coverageType: 'Comprehensive',
    premiumAmount: 4000,
    claimSettlementRatio: 94,
    addOnFeatures: 'Medical Cover, Discounts on Renewals',
    policyTerm: '1 Year',
    benefits: 'Ideal for families with multiple riders',
    exclusions: 'Drunken Driving, Non-Registered Riders',
  },
];

const ApprovalForm = () => {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const [selectedProvider, setSelectedProvider] = useState('');
    const [selectedPlan, setSelectedPlan] = useState('');
    const [premiumAmount, setPremiumAmount] = useState(0);
    const [claimSettlementRatio, setClaimSettlementRatio] = useState(0);
    const [coverageType, setCoverageType] = useState('');
    const [policyTerm, setPolicyTerm] = useState('');
    const [benefits, setBenefits] = useState('');
    const [exclusions, setExclusions] = useState('');
    const [clientDetails, setClientDetails] = useState({
      fullName: '',
      registrationNumber: '',
      contactNumber: '',
      email: '',
    });
  


  const handleProviderChange = (e) => {
    const provider = e.target.value;
    setSelectedProvider(provider);

    const selectedPlanData = plans.find((plan) => plan.providerName === provider);
    if (selectedPlanData) {
      setSelectedPlan(selectedPlanData.planName);
      setPremiumAmount(selectedPlanData.premiumAmount);
      setClaimSettlementRatio(selectedPlanData.claimSettlementRatio);
      setCoverageType(selectedPlanData.coverageType);
      setPolicyTerm(selectedPlanData.policyTerm);
      setBenefits(selectedPlanData.benefits);
      setExclusions(selectedPlanData.exclusions);
    }
  };

  const handleInputChange = (e) => {
    setClientDetails({ ...clientDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to Quotation page with client details
    navigate('/insurances/BIKE/Quotation', { state: {
        clientDetails,
        selectedProvider,
        selectedPlan,
        premiumAmount,
        claimSettlementRatio,
        coverageType,
        policyTerm,
        benefits,
        exclusions
      } });
  };


  return (
    <div className="approval-form">
      <h2>Approval Form</h2>
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
            {providers.map((provider, index) => (
              <option key={index} value={provider}>
                {provider}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Plan Name:</label>
          <input type="text" name="planName" value={selectedPlan} readOnly />
        </div>

        <div className="form-group">
          <label>Premium Amount (INR):</label>
          <input type="number" name="premiumAmount" value={premiumAmount} readOnly />
        </div>

        <div className="form-group">
          <label>Claim Settlement Ratio (%):</label>
          <input type="number" name="claimSettlementRatio" value={claimSettlementRatio} readOnly />
        </div>

        <div className="form-group">
          <label>Coverage Type:</label>
          <input type="text" name="coverageType" value={coverageType} readOnly />
        </div>

        <div className="form-group">
          <label>Policy Term:</label>
          <input type="text" name="policyTerm" value={policyTerm} readOnly />
        </div>

        <div className="form-group">
          <label>Benefits:</label>
          <input type="text" name="benefits" value={benefits} readOnly />
        </div>

        <div className="form-group">
          <label>Exclusions:</label>
          <input type="text" name="exclusions" value={exclusions} readOnly />
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
          <label>Registration Number:</label>
          <input
            type="text"
            name="registrationNumber"
            value={clientDetails.registrationNumber}
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

export default ApprovalForm;