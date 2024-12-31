import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./faq.css";

const Faq = () => {
  const faqData = [
    {
      category: "Home Insurance",
      faqs: [
        {
          question: "What does home insurance cover?",
          answer: [
            "Damages to your property caused by natural disasters.",
            "Theft of personal belongings.",
            "Accidental damages to the structure of your home.",
          ],
        },
        {
          question: "How do I file a claim?",
          answer: [
            "Contact our support team via phone or email.",
            "Fill out the claim form available on our website.",
            "Provide necessary documentation and evidence of the damage.",
          ],
        },
      ],
    },
    {
      category: "Life Insurance",
      faqs: [
        {
          question: "What is term life insurance?",
          answer: [
            "Provides coverage for a specific term (e.g., 10, 20, or 30 years).",
            "Ensures financial stability for your family in case of your untimely demise.",
            "Premiums are generally lower compared to whole life insurance.",
          ],
        },
        {
          question: "Can I change my beneficiaries?",
          answer: [
            "Yes, you can update your beneficiaries at any time.",
            "Contact our customer service for assistance.",
            "Ensure that you have the necessary information about the new beneficiaries.",
          ],
        },
      ],
    },
    {
      category: "Fire Insurance",
      faqs: [
        {
          question: "What is included in fire insurance?",
          answer: [
            "Coverage for losses due to fire damage.",
            "Reconstruction and repair costs for your property.",
            "Additional living expenses if you are temporarily displaced.",
          ],
        },
        {
          question: "Are electrical fires covered?",
          answer: [
            "Yes, electrical fires are typically covered under most fire insurance policies.",
            "Check your specific policy for any exclusions.",
            "Regular maintenance can help prevent electrical fires.",
          ],
        },
      ],
    },
    {
      category: "Car Insurance",
      faqs: [
        {
          question: "What does car insurance cover?",
          answer: [
            "Damages to your vehicle from accidents.",
            "Liability for injuries to others in an accident.",
            "Theft and vandalism of your vehicle.",
          ],
        },
        {
          question: "How can I lower my car insurance premium?",
          answer: [
            "Maintain a good driving record.",
            "Increase your deductible to lower your premium.",
            "Take advantage of discounts for safe driving or bundling policies.",
          ],
        },
      ],
    },
    {
      category: "Bike Insurance",
      faqs: [
        {
          question: "What is bike insurance?",
          answer: [
            "Provides coverage for damages to your motorcycle.",
            "Liability for injuries to others in an accident.",
            "Coverage for theft and damage from natural disasters.",
          ],
        },
        {
          question: "Is theft covered under bike insurance?",
          answer: [
            "Yes, theft is usually covered under comprehensive bike insurance policies.",
            "Ensure your policy includes theft coverage.",
            "Keep your bike secured to reduce the risk of theft.",
          ],
        },
      ],
    },
    {
      category: "Travel Insurance",
      faqs: [
        {
          question: "What does travel insurance cover?",
          answer: [
            "Trip cancellations due to unforeseen circumstances.",
            "Medical emergencies while traveling.",
            "Lost luggage and travel delays.",
          ],
        },
        {
          question: "Do I need travel insurance for domestic trips?",
          answer: [
            "While not mandatory, travel insurance is recommended.",
            "Covers unexpected events that may disrupt your trip.",
            "Provides peace of mind during your travels.",
          ],
        },
      ],
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="home-logo">
          <img
            src="/images/ins_LOGO.png"
            alt="Logo"
            style={{ width: "290px", height: "100px" }}
          />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/home1">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <div className="container">
        {/* Sidebar */}
        <div className="sidebar">
          <img
            src="/images/admin.png"
            alt="User Avatar"
            style={{
              borderRadius: "50%",
              marginBottom: "10px",
              width: "80px",
            }}
          />
          <div className="menu">
            <a
              href="/customer"
              style={{
                display: "block",
                padding: "10px 20px",
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              Customer
            </a>
            <a
              href="/faq"
              className="active"
              style={{
                display: "block",
                padding: "10px 20px",
                color: "black",
                textDecoration: "none",
                fontSize: "16px",
                backgroundColor: "#ffffff",
                borderLeft: "4px solid black",
              }}
            >
              FAQ
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-container">
          <h1>Insurance Plans - FAQ</h1>
          {faqData.map((section, index) => (
            <FaqSection key={index} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FaqSection = ({ section }) => {
  return (
    <div className="faq-section">
      <h2 className="faq-title">{section.category}</h2>
      {section.faqs.map((faq, index) => (
        <FaqItem key={index} faq={faq} />
      ))}
    </div>
  );
};

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq">
      <button className="faq-toggle" onClick={() => setIsOpen(!isOpen)}>
        {faq.question} {isOpen ? "▼" : "▶"}
      </button>
      {isOpen && (
        <div className="faq-answer">
          {Array.isArray(faq.answer) ? (
            <ul>
              {faq.answer.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{faq.answer}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Faq;