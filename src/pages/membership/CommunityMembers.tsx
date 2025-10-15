import { Link } from 'react-router-dom';
import '../PageStyles.css';

const CommunityMembers = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Community Membership</h1>
          <p>Join your neighbors in building a stronger community</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <h2>Individual & Family Membership</h2>
            <p>
              Community membership is open to all residents of the Thomas Jefferson neighborhood
              and surrounding areas. Your membership supports our mission to provide a welcoming
              space for community gatherings and events.
            </p>

            <div className="two-column">
              <div>
                <h3>Member Benefits</h3>
                <ul className="benefits-list">
                  <li><strong>Voting Rights:</strong> Have your voice heard at monthly meetings</li>
                  <li><strong>Newsletter:</strong> Stay informed with monthly updates</li>
                  <li><strong>Discounted Rentals:</strong> Save on facility rental fees</li>
                  <li><strong>Exclusive Events:</strong> Members-only social gatherings</li>
                  <li><strong>Community Impact:</strong> Help shape your neighborhood</li>
                  <li><strong>Meeting Access:</strong> Attend all board and general meetings</li>
                </ul>

                <h3 style={{ marginTop: '30px' }}>What Your Membership Supports</h3>
                <p>
                  Your annual dues help maintain our facility, fund community programs, and
                  provide resources for neighborhood improvements. Every membership makes a
                  difference!
                </p>
              </div>

              <div className="pricing-card">
                <h3>Annual Membership</h3>
                <div className="price-large">$25</div>
                <p className="price-period">per household/year</p>
                <ul style={{ textAlign: 'left', marginTop: '20px' }}>
                  <li>Covers all household members</li>
                  <li>Renewable annually</li>
                  <li>Tax-deductible donation</li>
                  <li>Immediate benefits</li>
                </ul>
                <Link to="/membership/join" className="btn" style={{ marginTop: '20px' }}>
                  Become a Member
                </Link>
              </div>
            </div>

            <div className="section" style={{ paddingTop: '40px' }}>
              <h3>How to Join</h3>
              <div className="card-grid">
                <div className="card">
                  <div className="card-icon">📝</div>
                  <h4>Step 1: Fill Out Form</h4>
                  <p>
                    Download and complete the membership application form with your household
                    information.
                  </p>
                </div>

                <div className="card">
                  <div className="card-icon">💳</div>
                  <h4>Step 2: Submit Payment</h4>
                  <p>
                    Pay your $25 annual dues online, by mail, or in person at our next meeting.
                  </p>
                </div>

                <div className="card">
                  <div className="card-icon">✓</div>
                  <h4>Step 3: Get Involved</h4>
                  <p>
                    Attend meetings, participate in events, and help make our community even better!
                  </p>
                </div>
              </div>
            </div>

            <div className="info-box">
              <h3>Questions About Membership?</h3>
              <p>
                We're here to help! Contact us for more information about community membership
                and how you can get involved.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
                <Link to="/about/contact" className="btn">
                  Contact Us
                </Link>
                <Link to="/about/forms" className="btn btn-secondary">
                  Download Forms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityMembers;
