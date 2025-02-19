import React, { useState } from 'react';

export default function Questions() {
  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle FAQ items
  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the FAQ if it's already open
    } else {
      setOpenIndex(index); // Open the clicked FAQ
    }
  };

  // FAQ data
  const faqData = [
    {
      question: 'How do I convert text to words?',
      answer: 'You can use a word counter tool or a text processing script to count words in a given text.',
    },
    {
      question: 'How can I convert an image to text?',
      answer: 'You can use Optical Character Recognition (OCR) software such as Tesseract or online tools.',
    },
    {
      question: 'How do I download text styles?',
      answer: 'Text styles can be downloaded from various font websites like Google Fonts or Font Squirrel.',
    },
    {
      question: 'How do I convert written words to text?',
      answer: 'Handwritten words can be converted to text using OCR technology or note-taking apps like Google Keep.',
    },
  ];

  return (
    <div className="faq-container">
      {faqData.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div
            className="faq-question"
            onClick={() => toggleFAQ(index)} // Toggle FAQ on click
          >
            {faq.question}
            <span className="faq-toggle">
              {openIndex === index ? '▲' : '▼'}
            </span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}