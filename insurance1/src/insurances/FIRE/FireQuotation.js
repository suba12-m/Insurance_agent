import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './FireQuotation.css';
import jsPDF from 'jspdf';

const FireQuotation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    clientDetails,
    selectedProvider,
    coverageAmount,
    premiumAmount,
    coverageType,
    addOns,
    claimProcessTime,
    customerRating,
  } = location.state || {};

  // Function to generate and download the quotation as PDF
  const downloadQuotationAsPDF = () => {
    const doc = new jsPDF();
  
    // Add logo
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
  
  
    // Title and details
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Fire Insurance Quotation', 105, 70, { align: 'center' });
  
    doc.setFontSize(12);
    doc.setFont('Helvetica', 'bold');
    doc.text('CLIENT INFORMATION:' , 10, 90);
    doc.text(`Full Name: ${clientDetails?.fullName || 'N/A'}`, 10, 105);
    doc.text(`Contact Number: ${clientDetails?.contactNumber || 'N/A'}`, 10, 115);
    doc.text(`Email Address: ${clientDetails?.email || 'N/A'}`, 10, 125);
    doc.text('PLAN DETAILS:' , 10, 140);
    doc.text(`Provider Name: ${selectedProvider || 'N/A'}`, 10, 155);
    doc.text(`Coverage Amount (INR): Rs.${coverageAmount || 'N/A'}`, 10, 165);
    doc.text(`Premium (INR): Rs.${premiumAmount || 'N/A'}`, 10, 175);
    doc.text(`Coverage Type: ${coverageType || 'N/A'}`, 10, 185);
    doc.text(`Add-Ons: ${addOns.join(', ') || 'N/A'}`, 10, 195);
    doc.text(`Claim Process Time: ${claimProcessTime || 'N/A'} days`, 10, 205);
    doc.text(`Customer Rating: ${customerRating || 'N/A'}`, 10, 215 , );
  
    doc.setFontSize(10);
    doc.setFont('Helvetica','normal');
    doc.text('Thank you for choosing our services.', 105, 250,{ align: 'center'});
    doc.text('Please contact us for further assistance.', 105, 255,{ align: 'center'});
  
    doc.save('Fire_Insurance_Quotation.pdf');
  };

  const handleBackToHome = () => {
    navigate('/home1');
  };

  return (
    <div className="fire-quotation-container">
      <img src="/images/ins_LOGO.png" alt="Company Logo" className="logo" />
      <h2 className="fquotation-title">Fire Insurance Quotation</h2>

      <div className="quotation-details">
        <section className="client-info">
          <h3>Client Information</h3>
          <p><strong>Full Name:</strong> {clientDetails?.fullName || 'N/A'}</p>
          <p><strong>Contact Number:</strong> {clientDetails?.contactNumber || 'N/A'}</p>
          <p><strong>Email:</strong> {clientDetails?.email || 'N/A'}</p>
        </section>

       

        <section className="insurance-info">
          <h3>Insurance Details</h3>
          <p><strong>Provider:</strong> {selectedProvider || 'N/A'}</p>
          <p><strong>Coverage Amount (INR):</strong> Rs.{coverageAmount || 'N/A'}</p>
          <p><strong>Premium (INR):</strong> Rs.{premiumAmount || 'N/A'}</p>
          <p><strong>Coverage Type:</strong> {coverageType || 'N/A'}</p>
          <p><strong>Add-Ons:</strong> {addOns || 'N/A'}</p>
          <p><strong>Claim Process Time:</strong> {claimProcessTime || 'N/A'} days</p>
          <p><strong>Customer Rating:</strong> {customerRating || 'N/A'}</p>
        </section>
      </div>

      <div className="buttons">
        <button className="download-button" onClick={downloadQuotationAsPDF}>Download Quotation</button>
        <button className="back-button" onClick={handleBackToHome}>Back to Home</button>
      </div>
    </div>
  );
};

export default FireQuotation;