import React from 'react';
import './TandC.css'
import Top from './Top';
import DownFooter from './DownFooter'

const TandC = () => {
  return (
    <div>
        <Top/>
        <div className='pos'>

      <h1 className='c1'>Terms and Conditions</h1>
      <p className='c3'>
        Welcome to The Story Seeds. Please read these Terms and Conditions carefully before using our podcast and website.
      </p>
      <h2 className='c2'>Acceptance of Terms</h2>
      <p className='c3'>
        By accessing or using our podcast and website, you agree to be bound by these Terms and Conditions. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
      </p>
      <h2 className='c2'>Content</h2>
      <p className='c3'>
        The content on our podcast and website, including audio episodes, images, text, and other materials, is provided for general information and entertainment purposes only. It is subject to change without notice.
      </p>
      {/* Add more sections for user conduct, links to third-party websites, privacy policy, age restrictions, etc. */}
      <h2 className='c2'>Changes to Terms and Conditions</h2>
      <p className='p3'>
        We reserve the right to modify these Terms and Conditions at any time. Your continued use of our podcast and website after any changes will signify your acceptance of the new terms.
      </p>
      <h2 className='c2'>Contact Information</h2>
      <p className='p3'>If you have any questions or concerns regarding these Terms and Conditions, please contact us at:</p>
      <p className='p3'>[Your Contact Information]</p>
      <p className='p3'>These Terms and Conditions were last updated on [Date].</p>
    </div>
    <DownFooter/>
    </div>
  );
};

export default TandC;
