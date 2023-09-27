
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>We are dedicated to providing high-quality children's stories.</p>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <p>Connect with us on social media:</p>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Storytelling Podcast for Kids</p>
      </div>
    </footer>
  );
};

export default Footer;
