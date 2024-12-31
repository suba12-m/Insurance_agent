import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './HomeQuotation.css';
import jsPDF from 'jspdf';

const HomeQuotation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { clientDetails, selectedPlan } = location.state || {};

  const downloadQuotationAsPDF = () => {
    const doc = new jsPDF();

    // Add logo
    const imgWidth = 70;
    const imgHeight = 50;
    const logoUrl = `${window.location.origin}/images/ins_LOGO.png`; // Logo URL from public directory
    doc.addImage(logoUrl, 'PNG', 10, 10, imgWidth, imgHeight);

    doc.setFont('Helvetica', 'bold');
     doc.setFontSize(12);
     doc.text('Company Name: THE INSUREAL ', 200, 30, { align: 'right' }); // Right-aligned text
     doc.text('Address: 123 Main Street, Chennai, India', 200, 35, { align: 'right' });
     doc.text('Phone: (123) 456-7890', 200, 40, { align: 'right' });
     doc.text('Email: support@insureal.com', 200, 45, { align: 'right' });

    // Title
    doc.setFontSize(16);
    doc.text('Home Insurance Quotation', 105, 70, { align: 'center' });

    // Client Information
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Client Information:', 10, 105);
    doc.setFont('Helvetica', 'normal');
    doc.text(`Full Name: ${clientDetails?.fullName || 'N/A'}`, 10, 115);
    doc.text(`Contact Number: ${clientDetails?.contactNumber || 'N/A'}`, 10, 125);
    doc.text(`Email Address: ${clientDetails?.email || 'N/A'}`, 10, 135);
    doc.text(`Property Address: ${clientDetails?.propertyAddress || 'N/A'}`, 10, 145);

    // Plan Details
    doc.setFont('Helvetica', 'bold');
    doc.text('Plan Details:', 10, 160);
    doc.setFont('Helvetica', 'normal');
    doc.text(`Provider Name: ${selectedPlan?.provider || 'N/A'}`, 10, 175);
    doc.text(`Coverage Amount (INR): Rs.${selectedPlan?.coverageAmount?.toLocaleString() || 'N/A'}`, 10, 185);
    doc.text(`Premium (INR): Rs.${selectedPlan?.premium?.toLocaleString() || 'N/A'}`, 10, 195);
    doc.text(`Coverage Type: ${selectedPlan?.coverageType || 'N/A'}`, 10, 205);
    doc.text(`Claim Process Time: ${selectedPlan?.claimProcessTime || 'N/A'} days`, 10, 215);

    // Footer
    doc.setFontSize(10);
    doc.setFont('Helvetica','normal');
    doc.text('Thank you for choosing our services.', 105, 250,{ align: 'center'});
    doc.text('Please contact us for further assistance.', 105, 255,{ align: 'center'});

    // Save the PDF
    doc.save('Home_Insurance_Quotation.pdf');
  };

  const handleBackToHome = () => {
    navigate('/home1');
  };

  return (
    <div className="home-quotation-container">
      <img src="/images/ins_LOGO.png" alt="Company Logo" className="logo" />
      <h2 className="quotation-title">Home Insurance Quotation</h2>

      <div className="quotation-details">
        <section className="client-info">
          <h3>Client Information</h3>
          <p><strong>Full Name:</strong> {clientDetails?.fullName || 'N/A'}</p>
          <p><strong>Contact Number:</strong> {clientDetails?.contactNumber || 'N/A'}</p>
          <p><strong>Email Address:</strong> {clientDetails?.email || 'N/A'}</p>
          <p><strong>Property Address:</strong> {clientDetails?.propertyAddress || 'N/A'}</p>
        </section>

        <section className="plan-info">
          <h3>Plan Details</h3>
          <p><strong>Provider Name:</strong> {selectedPlan?.provider || 'N/A'}</p>
          <p><strong>Coverage Amount (INR):</strong> Rs.{selectedPlan?.coverageAmount?.toLocaleString() || 'N/A'}</p>
          <p><strong>Premium (INR):</strong> Rs.{selectedPlan?.premium?.toLocaleString() || 'N/A'}</p>
          <p><strong>Coverage Type:</strong> {selectedPlan?.coverageType || 'N/A'}</p>
          <p><strong>Claim Process Time:</strong> {selectedPlan?.claimProcessTime || 'N/A'} days</p>
        </section>
      </div>

      <div className="buttons">
        <button className="download-button" onClick={downloadQuotationAsPDF}>
          Download Quotation
        </button>
        <button className="back-button" onClick={handleBackToHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default HomeQuotation;