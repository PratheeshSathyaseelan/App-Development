import React, { useState } from 'react';
import './FAQ.css'
import Top from './Top';
import Topbelow from './Topbelow';
import DownFooter from './DownFooter'

function FAQ() {
  // Define an array of FAQ items, each with a question and answer.
  const faqItems = [
    {
      question: 'What is the Kids\' Story Podcast?',
      answer:
        'The Kids\' Story Podcast is a fun and educational app that offers a collection of audio stories for children. Our podcast features a variety of entertaining stories suitable for kids of all ages.',
    },
    {
      question: 'How do I listen to the stories?',
      answer:
        'It\'s easy! Simply download our app from the App Store or Google Play Store, create an account (with parental consent), and start listening. You can stream the stories online or download them for offline listening.',
    },
    {
      question: 'Is the content safe for kids?',
      answer:
        'Yes, absolutely! We take great care to ensure that all the stories featured on our podcast are age-appropriate and safe for children. Parents and guardians can review the content to ensure it aligns with their values.',
    },
    {
      question: 'Is there a cost to use the app?',
      answer:
        'Our app is available for free to all users. However, we offer a premium subscription option that provides additional benefits such as an ad-free experience and access to exclusive content.',
    },
    // Add more FAQ items as needed
  ];

  // Define state to keep track of which FAQ items are currently expanded.
  const [expandedItems, setExpandedItems] = useState([]);

  // Function to handle FAQ item expansion/collapse.
  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
<div>
    

 <Top/>
<Topbelow/>
    <div className="faq-container">


      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqItems.map((item, index) => (
          <li key={index} className={`faq-item ${expandedItems.includes(index) ? 'expanded' : ''}`}>
            <div className="faq-question" onClick={() => toggleItem(index)}>
              <span>{item.question}</span>
              <div className="toggle-icon">{expandedItems.includes(index) ? '-' : '+'}</div>
            </div>
            {expandedItems.includes(index) && <p className="faq-answer">{item.answer}</p>}
          </li>
        ))}
      </ul>
      
    </div>
    <DownFooter/>
    </div>
  );
}

export default FAQ;