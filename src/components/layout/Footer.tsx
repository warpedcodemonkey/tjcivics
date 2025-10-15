import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Thomas Jefferson Civic Center</h3>
            <p>
              To foster a strong, connected community by providing a welcoming space
              for residents to meet, celebrate, and work together.
            </p>
            <p className="nonprofit">
              A 501(c)(3) Non-Profit Organization
            </p>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>
              <strong>Address:</strong><br />
              8237 Nevada St<br />
              Jacksonville, FL 32220
            </p>
            <p>
              <strong>Email:</strong><br />
              <a href="mailto:TJCivicClub@gmail.com">TJCivicClub@gmail.com</a>
            </p>
            <p>
              <strong>Phone:</strong><br />
              <a href="tel:9044241873">(904) 424-1873</a>
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/membership/join">Become a Member</Link></li>
              <li><Link to="/rentals/pricing">Rental Pricing</Link></li>
              <li><Link to="/calendar">View Calendar</Link></li>
              <li><Link to="/about/contact">Contact Us</Link></li>
              <li><Link to="/about/sponsor">Sponsor / Donate</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Community Meetings</h4>
            <p>
              First Thursday of every month at 7:00 PM
            </p>
            <p>
              Open to all neighborhood residents
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Thomas Jefferson Civic Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
