import { Link } from 'react-router-dom';
import '../PageStyles.css';

const BusinessMembers = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Business Membership</h1>
          <p>Grow your business while supporting our community</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <h2>Why Business Membership?</h2>
            <p>
              Business membership in the Thomas Jefferson Civic Center provides valuable
              opportunities to connect with local residents, promote your services, and
              demonstrate your commitment to community development.
            </p>

            <div className="two-column">
              <div>
                <h3>Membership Benefits</h3>
                <ul className="benefits-list">
                  <li><strong>Website Recognition:</strong> Your business listed on our website with logo and description</li>
                  <li><strong>Networking Opportunities:</strong> Connect with community leaders and residents</li>
                  <li><strong>Event Participation:</strong> Sponsor and participate in community events</li>
                  <li><strong>Local Promotion:</strong> Feature your business in our monthly newsletter</li>
                  <li><strong>Discounted Rates:</strong> Special pricing for facility rentals</li>
                  <li><strong>Voting Rights:</strong> Have a say in community decisions</li>
                </ul>
              </div>

              <div className="pricing-card">
                <h3>Business Membership</h3>
                <div className="price-large">$100</div>
                <p className="price-period">per year</p>
                <p style={{ marginTop: '20px' }}>
                  Investment in your business and community
                </p>
                <Link to="/membership/join" className="btn" style={{ marginTop: '20px' }}>
                  Join Today
                </Link>
              </div>
            </div>

            <div className="section" style={{ paddingTop: '40px' }}>
              <h3>Current Business Members</h3>
              <p style={{ textAlign: 'center', color: 'var(--text-light)' }}>
                [Placeholder for business member directory]
              </p>
              <div className="card-grid">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="card" style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '100px',
                      height: '100px',
                      background: 'var(--background-light)',
                      borderRadius: '8px',
                      margin: '0 auto 15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem'
                    }}>
                      🏢
                    </div>
                    <h4>Business Name {num}</h4>
                    <p>Business category and brief description goes here.</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-box">
              <h3>Interested in Business Membership?</h3>
              <p>
                Contact us today to learn more about how business membership can benefit
                your company and our community.
              </p>
              <Link to="/about/contact" className="btn" style={{ marginTop: '15px' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessMembers;
