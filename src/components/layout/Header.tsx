import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>TJ Civic Center</h1>
          </Link>

          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <div className="nav-dropdown">
              <span className="nav-link">Membership</span>
              <div className="dropdown-content">
                <Link to="/membership/join" onClick={() => setIsMenuOpen(false)}>
                  JOIN US
                </Link>
                <Link to="/membership/business" onClick={() => setIsMenuOpen(false)}>
                  Business Members
                </Link>
                <Link to="/membership/community" onClick={() => setIsMenuOpen(false)}>
                  Community Members
                </Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <span className="nav-link">Rentals</span>
              <div className="dropdown-content">
                <Link to="/rentals/pricing" onClick={() => setIsMenuOpen(false)}>
                  Pricing
                </Link>
                <Link to="/rentals/plan-event" onClick={() => setIsMenuOpen(false)}>
                  Start Planning Your Event!
                </Link>
                <Link to="/rentals/agreement" onClick={() => setIsMenuOpen(false)}>
                  Rental Agreement & Contract
                </Link>
                <Link to="/rentals/payment" onClick={() => setIsMenuOpen(false)}>
                  Make a Payment
                </Link>
              </div>
            </div>

            <Link to="/calendar" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Calendar
            </Link>

            <div className="nav-dropdown">
              <span className="nav-link">About Us</span>
              <div className="dropdown-content">
                <Link to="/about/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </Link>
                <Link to="/about/board" onClick={() => setIsMenuOpen(false)}>
                  The 2025 Board
                </Link>
                <Link to="/about/sponsor" onClick={() => setIsMenuOpen(false)}>
                  Sponsor / Donate
                </Link>
                <Link to="/about/volunteers" onClick={() => setIsMenuOpen(false)}>
                  Volunteers Needed
                </Link>
                <Link to="/about/forms" onClick={() => setIsMenuOpen(false)}>
                  Forms and Applications
                </Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <span className="nav-link">From the President</span>
              <div className="dropdown-content">
                <Link to="/president/message" onClick={() => setIsMenuOpen(false)}>
                  President's Message
                </Link>
                <Link to="/president/history" onClick={() => setIsMenuOpen(false)}>
                  Know the History
                </Link>
                <Link to="/president/directory" onClick={() => setIsMenuOpen(false)}>
                  2025 Directory
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
