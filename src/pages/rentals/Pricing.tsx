import { Link } from 'react-router-dom';
import '../PageStyles.css';

const Pricing = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Facility Rental Pricing</h1>
          <p>Affordable rates for your special events</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <h2>Rental Rates</h2>
            <p>
              Our competitive pricing makes the Thomas Jefferson Civic Center an excellent
              value for your event. Members receive special discounted rates!
            </p>

            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Event Type</th>
                  <th>Member Rate</th>
                  <th>Non-Member Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Half Day (4 hours)</strong></td>
                  <td>$150</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td><strong>Full Day (8 hours)</strong></td>
                  <td>$250</td>
                  <td>$350</td>
                </tr>
                <tr>
                  <td><strong>Weekend Day</strong></td>
                  <td>$300</td>
                  <td>$400</td>
                </tr>
                <tr>
                  <td><strong>Multi-Day Events</strong></td>
                  <td>Contact for pricing</td>
                  <td>Contact for pricing</td>
                </tr>
              </tbody>
            </table>

            <div className="info-box">
              <h3>💡 Save with Membership!</h3>
              <p>
                Members save up to $100 on facility rentals. A $25 annual membership pays
                for itself with just one event rental!
              </p>
              <Link to="/membership/join" className="btn" style={{ marginTop: '15px' }}>
                Become a Member
              </Link>
            </div>

            <h3 style={{ marginTop: '40px' }}>What's Included</h3>
            <div className="card-grid">
              <div className="card">
                <div className="card-icon">🪑</div>
                <h4>Tables & Chairs</h4>
                <p>Ample seating for up to 150 guests with tables and chairs included</p>
              </div>

              <div className="card">
                <div className="card-icon">🍽️</div>
                <h4>Kitchen Access</h4>
                <p>Full kitchen facilities for catering and food preparation</p>
              </div>

              <div className="card">
                <div className="card-icon">🎤</div>
                <h4>A/V Equipment</h4>
                <p>Sound system and basic audio/visual equipment</p>
              </div>

              <div className="card">
                <div className="card-icon">🅿️</div>
                <h4>Parking</h4>
                <p>Free parking lot for all your guests</p>
              </div>

              <div className="card">
                <div className="card-icon">❄️</div>
                <h4>Climate Control</h4>
                <p>Heating and air conditioning for year-round comfort</p>
              </div>

              <div className="card">
                <div className="card-icon">📶</div>
                <h4>WiFi Access</h4>
                <p>Complimentary wireless internet connection</p>
              </div>
            </div>

            <h3 style={{ marginTop: '40px' }}>Additional Services</h3>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Security Deposit (refundable)</td>
                  <td>$150</td>
                </tr>
                <tr>
                  <td>Additional Cleaning Fee</td>
                  <td>$50</td>
                </tr>
                <tr>
                  <td>Extra Hours (per hour)</td>
                  <td>$50</td>
                </tr>
                <tr>
                  <td>Event Setup Assistance</td>
                  <td>$75</td>
                </tr>
              </tbody>
            </table>

            <div className="info-box">
              <h3>Ready to Book Your Event?</h3>
              <p>
                Check our calendar for availability and start planning your event today!
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
                <Link to="/calendar" className="btn">
                  Check Availability
                </Link>
                <Link to="/rentals/plan-event" className="btn btn-secondary">
                  Start Planning
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
