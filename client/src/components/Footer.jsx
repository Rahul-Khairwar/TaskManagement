import React from 'react';
import '../css/footer.css'; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li>Who we are</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Affiliate Program</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Help</h3>
          <ul>
            <li>Customer Service</li>
            <li>Returns & Refunds</li>
            <li>Track Order</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Categories</h3>
          <ul>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Home & Kitchen</li>
            <li>Beauty & Health</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>Email: support@shopkart.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Mumbai, India</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} QuickShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
