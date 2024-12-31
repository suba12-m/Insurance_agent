import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './LifeQuotation.css';
import jsPDF from 'jspdf';

const LifeQuotation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract state passed from the previous form
  const { clientDetails, selectedPlan } = location.state || {};

  // Function to download the quotation as a PDF
  const downloadQuotationAsPDF = () => {
    const doc = new jsPDF();

    const imgWidth = 70;
    const imgHeight = 50;
    const logoUrl = `${window.location.origin}/images/ins_LOGO.png`; // Reference logo in the public directory
  
    doc.addImage(logoUrl, 'PNG', 10, 10, imgWidth, imgHeight); // Left-aligned logo

     // Company details on the right
     doc.setFont('Helvetica', 'bold');
     doc.setFontSize(12);
     doc.text('Company Name: THE INSUREAL ', 200, 30, { align: 'right' }); // Right-aligned text
     doc.text('Address: 123 Main Street, Chennai, India', 200, 35, { align: 'right' });
     doc.text('Phone: (123) 456-7890', 200, 40, { align: 'right' });
     doc.text('Email: support@insureal.com', 200, 45, { align: 'right' });

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Life Insurance Quotation', 105, 70, { align: 'center' });

    // Add client details
    doc.setFontSize(12);
    doc.setFont('Helvetica', 'bold');
    doc.text('CLIENT INFORMATION:', 10, 90);
    doc.text(`Full Name: ${clientDetails?.fullName || 'N/A'}`, 10, 105);
    doc.text(`Date of Birth: ${clientDetails?.dateOfBirth || 'N/A'}`, 10, 115);
    doc.text(`Contact Number: ${clientDetails?.contactNumber || 'N/A'}`, 10, 125);
    doc.text(`Email Address: ${clientDetails?.email || 'N/A'}`, 10, 135);

    // Add plan details
    doc.setFontSize(12);
    doc.setFont('Helvetica', 'bold');    
    doc.text('PLAN DETAILS:', 10, 150);
    doc.text(`Provider Name: ${selectedPlan?.name || 'N/A'}`, 10, 165);
    doc.text(`Sum Assured: Rs.${selectedPlan?.sumAssured || 'N/A'}`, 10, 175);
    doc.text(`Premium Amount: Rs.${selectedPlan?.premium || 'N/A'}`, 10, 185);
    doc.text(`Policy Term: ${selectedPlan?.policyTerm || 'N/A'} years`, 10, 195);
    doc.text(`Age Eligibility: ${selectedPlan?.ageEligibility || 'N/A'}`, 10, 205);
    doc.text(`Riders Available: ${selectedPlan?.ridersAvailable || 'N/A'}`, 10, 215);
    doc.text(`Claim Ratio: ${selectedPlan?.claimRatio || 'N/A'}`, 10, 225);

    // Footer
    doc.setFontSize(10);
    doc.setFont('Helvetica', 'normal');
    doc.text('Thank you for choosing our services.', 105, 250, { align: 'center' });
    doc.text('Please contact us for further assistance.', 105, 255, { align: 'center' });

    // Save the PDF
    doc.save('Life_Insurance_Quotation.pdf');
  };

  const handleBackToForm = () => {
    navigate('/home1');
  };

  return (
    <div className="life-quotation-container">
      <img src="/images/ins_LOGO.png" alt="Company Logo" className="logo" />

      <h2 className="quotation-title">Life Insurance Quotation</h2>
      <div className="quotation-details">
        <section>
          <h3>Client Details</h3>
          <p><strong>Full Name:</strong> {clientDetails?.fullName || 'N/A'}</p>
          <p><strong>Date of Birth:</strong> {clientDetails?.dateOfBirth || 'N/A'}</p>
          <p><strong>Contact Number:</strong> {clientDetails?.contactNumber || 'N/A'}</p>
          <p><strong>Email Address:</strong> {clientDetails?.email || 'N/A'}</p>
        </section>
        <section>
          <h3>Insurance Plan Details</h3>
          <p><strong>Provider Name:</strong> {selectedPlan?.name || 'N/A'}</p>
          <p><strong>Sum Assured:</strong> Rs.{selectedPlan?.sumAssured || 'N/A'}</p>
          <p><strong>Premium Amount:</strong> Rs.{selectedPlan?.premium || 'N/A'}</p>
          <p><strong>Policy Term:</strong> {selectedPlan?.policyTerm || 'N/A'} years</p>
          <p><strong>Age Eligibility:</strong> {selectedPlan?.ageEligibility || 'N/A'}</p>
          <p><strong>Riders Available:</strong> {selectedPlan?.ridersAvailable || 'N/A'}</p>
          <p><strong>Claim Ratio:</strong> {selectedPlan?.claimRatio || 'N/A'}</p>
        </section>
      </div>
      <div className="buttons">
        <button className="download-button" onClick={downloadQuotationAsPDF}>
          Download Quotation
        </button>
        <button className="back-button" onClick={handleBackToForm}>
          Back to Form
        </button>
      </div>
    </div>
  );
};

export default LifeQuotation;