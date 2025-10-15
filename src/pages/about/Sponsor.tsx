import { Link } from 'react-router-dom';
import '../PageStyles.css';

const Sponsor = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Sponsor & Donate</h1>
          <p>Support your community and make a difference</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <h2>Why Support Us?</h2>
            <p>
              As a 501(c)(3) non-profit organization, the Thomas Jefferson Civic Center
              relies on the generosity of community members and local businesses to maintain
              our facility and provide programming for our neighborhood.
            </p>

            <div className="two-column" style={{ marginTop: '40px' }}>
              <div>
                <h3>Your Donation Supports:</h3>
                <ul className="benefits-list">
                  <li>Facility maintenance and improvements</li>
                  <li>Community events and programs</li>
                  <li>Youth and family activities</li>
                  <li>Neighborhood beautification projects</li>
                  <li>Educational workshops and classes</li>
                  <li>Holiday celebrations and gatherings</li>
                </ul>
              </div>

              <div className="pricing-card">
                <h3>Tax Deductible</h3>
                <p>
                  All donations to the Thomas Jefferson Civic Center are tax-deductible
                  to the extent allowed by law.
                </p>
                <p style={{ marginTop: '15px' }}>
                  <strong>Tax ID:</strong> XX-XXXXXXX
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '15px' }}>
                  You will receive a receipt for tax purposes with all donations.
                </p>
              </div>
            </div>

            <h2 style={{ marginTop: '60px' }}>Sponsorship Levels</h2>

            <div className="card-grid">
              <div className="card">
                <h3>Bronze Sponsor</h3>
                <div className="price">$100-$249</div>
                <ul className="benefits-list">
                  <li>Name listed on website</li>
                  <li>Recognition in newsletter</li>
                  <li>Thank you certificate</li>
                </ul>
              </div>

              <div className="card">
                <h3>Silver Sponsor</h3>
                <div className="price">$250-$499</div>
                <ul className="benefits-list">
                  <li>All Bronze benefits</li>
                  <li>Logo on website</li>
                  <li>Event signage recognition</li>
                  <li>Social media recognition</li>
                </ul>
              </div>

              <div className="card featured">
                <div className="featured-badge">Popular</div>
                <h3>Gold Sponsor</h3>
                <div className="price">$500-$999</div>
                <ul className="benefits-list">
                  <li>All Silver benefits</li>
                  <li>Premium logo placement</li>
                  <li>Recognition at all events</li>
                  <li>Newsletter feature article</li>
                </ul>
              </div>

              <div className="card">
                <h3>Platinum Sponsor</h3>
                <div className="price">$1,000+</div>
                <ul className="benefits-list">
                  <li>All Gold benefits</li>
                  <li>Named event sponsorship</li>
                  <li>Board meeting recognition</li>
                  <li>Custom sponsorship package</li>
                </ul>
              </div>
            </div>

            <h2 style={{ marginTop: '60px' }}>Ways to Give</h2>

            <div className="card-grid">
              <div className="card">
                <div className="card-icon">💳</div>
                <h3>Online Donation</h3>
                <p>
                  Make a secure online donation using your credit card or bank account.
                </p>
                <button className="btn" style={{ marginTop: '15px', width: '100%' }}>
                  Donate Now
                </button>
              </div>

              <div className="card">
                <div className="card-icon">✉️</div>
                <h3>Mail a Check</h3>
                <p>
                  Send a check payable to:<br />
                  <strong>Thomas Jefferson Civic Center</strong><br />
                  8237 Nevada St<br />
                  Jacksonville, FL 32220
                </p>
              </div>

              <div className="card">
                <div className="card-icon">🎁</div>
                <h3>In-Kind Donations</h3>
                <p>
                  Donate goods, services, or supplies that support our mission and programs.
                </p>
                <Link to="/about/contact" className="btn btn-secondary" style={{ marginTop: '15px', width: '100%' }}>
                  Contact Us
                </Link>
              </div>

              <div className="card">
                <div className="card-icon">🏢</div>
                <h3>Corporate Matching</h3>
                <p>
                  Many employers match employee donations. Check if your company participates!
                </p>
              </div>
            </div>

            <div className="info-box" style={{ marginTop: '60px' }}>
              <h3>Questions About Giving?</h3>
              <p>
                We're happy to discuss sponsorship opportunities, planned giving, and other
                ways you can support the Thomas Jefferson Civic Center. Contact us to learn
                more about how your contribution can make a difference.
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

export default Sponsor;
