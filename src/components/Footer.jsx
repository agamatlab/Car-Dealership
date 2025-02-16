import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@cardealership.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer-section">
          <h3>Address</h3>
          <p>123 Main Street</p>
          <p>Anytown, USA 12345</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Car Dealership. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
