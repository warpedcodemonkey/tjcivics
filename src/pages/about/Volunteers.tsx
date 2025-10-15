import { Link } from 'react-router-dom';
import '../PageStyles.css';

const Volunteers = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Volunteers Needed</h1>
          <p>Join us in building a stronger community</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <h2>Make a Difference in Your Community</h2>
            <p>
              The Thomas Jefferson Civic Center is powered by volunteers like you! Whether
              you have a few hours a month or want to take on a leadership role, there are
              many ways to get involved and make a positive impact in our neighborhood.
            </p>

            <div className="info-box" style={{ marginTop: '30px' }}>
              <h3>🌟 Why Volunteer?</h3>
              <div className="two-column">
                <ul className="benefits-list">
                  <li>Meet your neighbors</li>
                  <li>Develop new skills</li>
                  <li>Give back to your community</li>
                  <li>Make lasting friendships</li>
                </ul>
                <ul className="benefits-list">
                  <li>Build your resume</li>
                  <li>Gain leadership experience</li>
                  <li>Feel good about helping</li>
                  <li>Shape your neighborhood</li>
                </ul>
              </div>
            </div>

            <h2 style={{ marginTop: '60px' }}>Volunteer Opportunities</h2>

            <div className="card-grid">
              <div className="card">
                <div className="card-icon">🎉</div>
                <h3>Event Support</h3>
                <p>
                  Help with setup, registration, activities, and cleanup for community events.
                </p>
                <p style={{ marginTop: '15px', fontWeight: '600', color: 'var(--primary-color)' }}>
                  Time Commitment: 2-4 hours per event
                </p>
              </div>

              <div className="card">
                <div className="card-icon">🔨</div>
                <h3>Facility Maintenance</h3>
                <p>
                  Assist with building maintenance, repairs, landscaping, and facility improvements.
                </p>
                <p style={{ marginTop: '15px', fontWeight: '600', color: 'var(--primary-color)' }}>
                  Time Commitment: Flexible schedule
                </p>
              </div>

              <div className="card">
                <div className="card-icon">📝</div>
                <h3>Committee Members</h3>
                <p>
                  Join a committee focused on events, fundraising, membership, or communications.
                </p>
                <p style={{ marginTop: '15px', fontWeight: '600', color: 'var(--primary-color)' }}>
                  Time Commitment: Monthly meetings
                </p>
              </div>

              <div className="card">
                <div className="card-icon">👥</div>
                <h3>Membership Outreach</h3>
                <p>
                  Help recruit new members, welcome neighbors, and increase community engagement.
                </p>
                <p style={{ marginTop: '15px', fontWeight: '600', color: 'var(--primary-color)' }}>
                  Time Commitment: 3-5 hours/month
                </p>
              </div>

              <div className="card">
                <div className="card-icon">💻</div>
                <h3>Technology Support</h3>
                <p>
                  Assist with website updates, social media management, and digital communications.
                </p>
                <p style={{ marginTop: '15px', fontWeight: '600', color: 'var(--primary-color)' }}>
                  Time Commitment: Flexible, remote
                </p>
              </div>

              <div className="card">
                <div className="card-icon">✍️</div>
                <h3>Newsletter & Communications</h3>
                <p>
                  Write articles, take photos, and help create content for newsletters and updates.
                </p>
                <p style={{ marginTop: '15px', fontWeight: '600', color: 'var(--primary-color)' }}>
                  Time Commitment: 4-6 hours/month
                </p>
              </div>
            </div>

            <h2 style={{ marginTop: '60px' }}>Upcoming Volunteer Events</h2>

            <div style={{
              background: 'var(--background-light)',
              padding: '30px',
              borderRadius: '8px',
              marginTop: '30px'
            }}>
              <div style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>
                  Community Spring Cleanup
                </h4>
                <p><strong>Date:</strong> Saturday, March 15, 2025</p>
                <p><strong>Time:</strong> 9:00 AM - 1:00 PM</p>
                <p>
                  Join us for our annual spring cleanup! We'll be beautifying the facility
                  grounds, painting, and doing light maintenance work.
                </p>
              </div>

              <div style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>
                  Summer Festival Planning Committee
                </h4>
                <p><strong>Date:</strong> Ongoing meetings (monthly)</p>
                <p><strong>Time:</strong> Second Tuesday at 6:30 PM</p>
                <p>
                  Help plan our biggest event of the year! We need volunteers for all aspects
                  of event planning and execution.
                </p>
              </div>

              <div>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>
                  Welcome New Neighbors Day
                </h4>
                <p><strong>Date:</strong> Sunday, April 7, 2025</p>
                <p><strong>Time:</strong> 2:00 PM - 5:00 PM</p>
                <p>
                  Volunteers needed to welcome new residents, provide information packets,
                  and host refreshments.
                </p>
              </div>
            </div>

            <div className="info-box" style={{ marginTop: '60px' }}>
              <h3>Ready to Volunteer?</h3>
              <p>
                Fill out our volunteer interest form or contact us directly. We'll match you
                with opportunities that fit your interests, skills, and availability.
              </p>
              <p style={{ marginTop: '15px' }}>
                All volunteers must complete a simple registration form. For some positions,
                a background check may be required.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
                <Link to="/about/forms" className="btn">
                  Download Volunteer Form
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

export default Volunteers;
