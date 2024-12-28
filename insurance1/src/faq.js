// App.js
import React, { useState } from "react";
import "./faq.css";

const Faq = () => {
  const faqData = [
    {
      category: "Home Insurance",
      faqs: [
        {
          question: "What does home insurance cover?",
          answer: "Home insurance covers damages to your property caused by natural disasters, theft, or accidents.",
        },
        {
          question: "How do I file a claim?",
          answer: "You can file a claim by contacting our support team or filling out the claim form online.",
        },
      ],
    },
    {
      category: "Life Insurance",
      faqs: [
        {
          question: "What is term life insurance?",
          answer: "Term life insurance provides coverage for a specific term, ensuring your family's financial stability.",
        },
        {
          question: "Can I change my beneficiaries?",
          answer: "Yes, you can update your beneficiaries at any time by contacting our customer service.",
        },
      ],
    },
    {
      category: "Fire Insurance",
      faqs: [
        {
          question: "What is included in fire insurance?",
          answer: "Fire insurance covers losses due to fire damage, including reconstruction and repair costs.",
        },
        {
          question: "Are electrical fires covered?",
          answer: "Yes, electrical fires are typically covered under most fire insurance policies.",
        },
      ],
    },
  ];

  return (
    <div className="faq-container">
        
      <h1>Insurance Plans - FAQ</h1>
      {faqData.map((section, index) => (
        <FaqSection key={index} section={section} />
      ))}
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
      {isOpen && <div className="faq-answer">{faq.answer}</div>}
    </div>
  );
};

export default Faq;
