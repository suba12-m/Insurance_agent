import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BikeQuotation.css';
import jsPDF from 'jspdf';

const BikeQuotation = () => {
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

    // Add logo
    const imgWidth = 70;
    const imgHeight = 50;
    const logoUrl = `${window.location.origin}/images/ins_LOGO.png`; // Reference logo in the public directory
  
    doc.addImage(logoUrl, 'PNG', 10, 10, imgWidth, imgHeight); // Left-aligned logo

    // Set the font style and size
    doc.setFont('Helvetica', 'bold');
     doc.setFontSize(12);
     doc.text('Company Name: THE INSUREAL ', 200, 30, { align: 'right' }); // Right-aligned text
     doc.text('Address: 123 Main Street, Chennai, India', 200, 35, { align: 'right' });
     doc.text('Phone: (123) 456-7890', 200, 40, { align: 'right' });
     doc.text('Email: support@insureal.com', 200, 45, { align: 'right' });

    // Add title and content
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Bike Insurance Quotation', 105, 70, { align: 'center' });    doc.setFontSize(10); // Reduce font size for details
    
    doc.setFontSize(12);
    doc.setFont('Helvetica', 'bold');
    doc.text('CLIENT INFORMATION:' , 10, 90);
    doc.text(`Full Name: ${clientDetails.fullName}`, 10, 105);
    doc.text(`Registration Number: ${clientDetails.registrationNumber}`, 10, 115);
    doc.text(`Contact Number: ${clientDetails.contactNumber}`, 10, 125);
    doc.text(`Email Address: ${clientDetails.email}`, 10, 135);

    doc.setFontSize(12);
    doc.setFont('Helvetica', 'bold');
    doc.text('PLAN DETAILS:' , 10, 150);
    doc.text('Insurance Details:', 10, 165);
    doc.text(`Provider Name: ${selectedProvider}`, 10, 175);
    doc.text(`Plan Name: ${selectedPlan}`, 10, 185);
    doc.text(`Coverage Type: ${coverageType}`, 10, 195);
    doc.text(`Policy Term: ${policyTerm}`, 10, 205);
    doc.text(`Premium Amount (INR): RS.${premiumAmount}`, 10, 215);
    doc.text(`Claim Settlement Ratio: ${claimSettlementRatio}%`, 10, 225);
    doc.text(`Benefits: ${benefits}`, 10, 235);
    doc.text(`Exclusions: ${exclusions}`, 10, 245);

    doc.setFontSize(8);
    doc.setFont('Helvetica', 'normal');
    // Further reduce font size for footer
    doc.text('Thank you for choosing our services.', 105, 260,{ align: 'center'});
    doc.text('Please feel free to contact us for any further assistance.', 105, 265,{ align: 'center'});

    // Save the PDF
    doc.save('Quotation.pdf');
  };

  // Navigate back to home page
  const handleBackToHome = () => {
    navigate('/home1');
  };

  return (
    <div className="bike-quotation-container">
            <img src="/images/ins_LOGO.png" alt="Company Logo" className="logo" />

      <h2 className="quotation-title">Bike Insurance Quotation</h2>
      
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
          <p><strong>Premium Amount (INR):</strong> Rs.{premiumAmount}</p>
          <p><strong>Claim Settlement Ratio:</strong> {claimSettlementRatio}%</p>
          <p><strong>Benefits:</strong> {benefits}</p>
          <p><strong>Exclusions:</strong> {exclusions}</p>
        </section>
      </div>

      <div className="buttons">
        <button className="download-button" onClick={downloadQuotationAsPDF}>Download Quotation</button>
        <button className="back-button" onClick={handleBackToHome}>Back to Home</button>
      </div>

    </div>
  );
};

export default BikeQuotation;