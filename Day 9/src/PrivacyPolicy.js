import React from 'react';
import './PrivacyPolicy.css'
import Top from './Top';
import Topbelow from './Topbelow';
import DownFooter from './DownFooter';

const PrivacyPolicy = () => {
  return (
    <div>
        <Top/>
        <Topbelow/>
    <div className='z1'>
      <h1 className='z2'></h1>
      <div className='algn'>
      <p className='z3'>Effective Date: [Insert Effective Date]</p>

      <h2 className='z4'>Information We Collect</h2>
      <h3 className='z5'>Personal Information</h3>
      <p className='z3'>We may collect personal information that you provide directly, including but not limited to:</p>
      <ul className='z6' >
        <li>Name</li>
        <li>Email address</li>
        <li>Age or date of birth (for age-appropriate content)</li>
      </ul>

      <h3 className='z5'>Usage Information</h3>
      <p className='z3'>We may collect non-personal information about your use of our podcast and website, such as:</p>
      <ul className='z6'>
        <li>Device information</li>
        <li>IP address</li>
        <li>Browser type</li>
        <li>Referring website</li>
        <li>Pages viewed</li>
      </ul>

      {/* Add more sections for how the information is used, shared, cookies, children's privacy, and changes to the policy. */}
      
      <h2 className='z4'>Contact Information</h2>
      <p className='z3'>If you have any questions or concerns regarding this Privacy Policy, please contact us at:</p>
      <p className='z3'>[Your Contact Information]</p>
      <p className='z3'>This Privacy Policy was last updated on [Date].</p>
    </div>
    </div>
    <DownFooter/>
    </div>
  );
};

export default PrivacyPolicy;
