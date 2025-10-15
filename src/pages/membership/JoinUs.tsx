import { Link } from 'react-router-dom';
import '../PageStyles.css';

const JoinUs = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Join Our Community</h1>
          <p>Become a member and help strengthen our neighborhood</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <h2>Why Join Us?</h2>
            <p>
              The Thomas Jefferson Civic Center is more than just a building – it's the heart
              of our community. By becoming a member, you're investing in a stronger, more
              connected neighborhood.
            </p>

            <div className="card-grid">
              <div className="card">
                <h3>Individual Membership</h3>
                <div className="price">$25/year</div>
                <ul className="benefits-list">
                  <li>Voting rights at club meetings</li>
                  <li>Monthly newsletter updates</li>
                  <li>Discounted facility rental rates</li>
                  <li>Exclusive community event invitations</li>
                  <li>Support your local community</li>
                </ul>
                <Link to="/membership/community" className="btn">
                  Learn More
                </Link>
              </div>

              <div className="card featured">
                <div className="featured-badge">Popular</div>
                <h3>Business Membership</h3>
                <div className="price">$100/year</div>
                <ul className="benefits-list">
                  <li>All Individual membership benefits</li>
                  <li>Website recognition and listing</li>
                  <li>Networking opportunities</li>
                  <li>Community event participation</li>
                  <li>Local business promotion</li>
                  <li>Support community development</li>
                </ul>
                <Link to="/membership/business" className="btn">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="info-box">
              <h3>Ready to Join?</h3>
              <p>
                Complete your membership application online or download the form and mail it
                to our address with your payment.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
                <Link to="/about/forms" className="btn">
                  Download Forms
                </Link>
                <Link to="/about/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
