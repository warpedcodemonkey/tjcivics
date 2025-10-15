import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Welcome to Thomas Jefferson Civic Center</h1>
          <p className="mission-statement">
            To foster a strong, connected community by providing a welcoming space
            for residents to meet, celebrate, and work together
          </p>
          <div className="hero-buttons">
            <Link to="/membership/join" className="btn">
              Become a Member
            </Link>
            <Link to="/rentals/plan-event" className="btn btn-secondary">
              Book an Event
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Your Community, Your Space</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
            Located at 8237 Nevada St, Jacksonville, FL 32220, our 2,661 square foot facility
            serves as the heart of Jacksonville's Northside community.
          </p>

          <div className="card-grid">
            <div className="card">
              <div className="card-icon">👥</div>
              <h3>Community Meetings</h3>
              <p>
                Join us every first Thursday at 7:00 PM for our monthly community meetings.
                Open to all neighborhood residents!
              </p>
              <Link to="/calendar" className="card-link">View Calendar →</Link>
            </div>

            <div className="card">
              <div className="card-icon">🎉</div>
              <h3>Event Rentals</h3>
              <p>
                Perfect venue for celebrations, weddings, business meetings, educational
                workshops, and fundraising events.
              </p>
              <Link to="/rentals/pricing" className="card-link">See Pricing →</Link>
            </div>

            <div className="card">
              <div className="card-icon">🤝</div>
              <h3>Membership Benefits</h3>
              <p>
                Voting rights, newsletter updates, discounted rental rates, and exclusive
                community event invitations.
              </p>
              <Link to="/membership/join" className="card-link">Join Today →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--background-light)' }}>
        <div className="container">
          <h2 className="section-title">Facility Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h4>✓ Spacious Main Hall</h4>
              <p>2,661 square feet of versatile event space</p>
            </div>
            <div className="feature-item">
              <h4>✓ Full Kitchen Facilities</h4>
              <p>Perfect for catering and food preparation</p>
            </div>
            <div className="feature-item">
              <h4>✓ Audio/Visual Equipment</h4>
              <p>Modern AV setup for presentations and entertainment</p>
            </div>
            <div className="feature-item">
              <h4>✓ Ample Parking</h4>
              <p>Convenient parking for all your guests</p>
            </div>
            <div className="feature-item">
              <h4>✓ Tables & Chairs</h4>
              <p>Complete setup for your event needs</p>
            </div>
            <div className="feature-item">
              <h4>✓ Climate Controlled</h4>
              <p>Comfortable environment year-round</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <h2>Ready to Get Involved?</h2>
          <p>
            Whether you're looking to rent our facility, become a member, or volunteer,
            we'd love to hear from you!
          </p>
          <div className="cta-buttons">
            <Link to="/about/contact" className="btn">
              Contact Us
            </Link>
            <Link to="/about/sponsor" className="btn btn-secondary">
              Sponsor / Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
