import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Quotation.css';
import jsPDF from 'jspdf';

const Quotation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    clientDetails,
    selectedProvider,
    selectedPlan,
    premiumAmount,
    claimSettlementRatio,
    coverageType,
    policyTerm,
    benefits,
    exclusions
  } = location.state;

  // Function to generate and download the quotation as PDF
  const downloadQuotationAsPDF = () => {
    const doc = new jsPDF();

    // Set the font style and size
    doc.setFont('Arial', 'normal');  // Setting Arial font
    doc.setFontSize(12);  // Set the font size

    // Add title and content
    doc.text('Insurance Quotation', 10, 10);
    doc.setFontSize(10); // Reduce font size for details
    doc.text(`Full Name: ${clientDetails.fullName}`, 10, 30);
    doc.text(`Registration Number: ${clientDetails.registrationNumber}`, 10, 40);
    doc.text(`Contact Number: ${clientDetails.contactNumber}`, 10, 50);
    doc.text(`Email Address: ${clientDetails.email}`, 10, 60);

    doc.text('Insurance Details:', 10, 80);
    doc.text(`Provider Name: ${selectedProvider}`, 10, 90);
    doc.text(`Plan Name: ${selectedPlan}`, 10, 100);
    doc.text(`Coverage Type: ${coverageType}`, 10, 110);
    doc.text(`Policy Term: ${policyTerm}`, 10, 120);
    doc.text(`Premium Amount (INR): ₹${premiumAmount}`, 10, 130);
    doc.text(`Claim Settlement Ratio: ${claimSettlementRatio}%`, 10, 140);
    doc.text(`Benefits: ${benefits}`, 10, 150);
    doc.text(`Exclusions: ${exclusions}`, 10, 160);

    doc.setFontSize(8); // Further reduce font size for footer
    doc.text('Thank you for choosing our services.', 10, 190);
    doc.text('Please feel free to contact us for any further assistance.', 10, 200);

    // Save the PDF
    doc.save('Quotation.pdf');
  };

  // Navigate back to home page
  const handleBackToHome = () => {
    navigate('/home1');
  };

  return (
    <div className="quotation-container">
      <h2 className="quotation-title">Insurance Quotation</h2>
      
      <div className="quotation-details">
        <section className="client-info">
          <h3>Client Information</h3>
          <p><strong>Full Name:</strong> {clientDetails.fullName}</p>
          <p><strong>Registration Number:</strong> {clientDetails.registrationNumber}</p>
          <p><strong>Contact Number:</strong> {clientDetails.contactNumber}</p>
          <p><strong>Email Address:</strong> {clientDetails.email}</p>
        </section>

        <section className="insurance-info">
          <h3>Insurance Details</h3>
          <p><strong>Provider Name:</strong> {selectedProvider}</p>
          <p><strong>Plan Name:</strong> {selectedPlan}</p>
          <p><strong>Coverage Type:</strong> {coverageType}</p>
          <p><strong>Policy Term:</strong> {policyTerm}</p>
          <p><strong>Premium Amount (INR):</strong> ₹{premiumAmount}</p>
          <p><strong>Claim Settlement Ratio:</strong> {claimSettlementRatio}%</p>
          <p><strong>Benefits:</strong> {benefits}</p>
          <p><strong>Exclusions:</strong> {exclusions}</p>
        </section>
      </div>

      <div className="buttons">
        <button className="download-button" onClick={downloadQuotationAsPDF}>Download </button>
        <button className="back-button" onClick={handleBackToHome}>Back to Home</button>
      </div>

      <p className="footer-note">Thank you for choosing our services. Please feel free to contact us for any further assistance.</p>
    </div>
  );
};

export default Quotation;