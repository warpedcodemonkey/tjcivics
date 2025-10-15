import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../PageStyles.css';

const RentalAgreement = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [signature, setSignature] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed || !signature) {
      alert('Please agree to the terms and provide your signature.');
      return;
    }
    // Proceed to payment
    navigate('/rentals/payment');
  };

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Rental Agreement & Contract</h1>
          <p>Review and sign the rental agreement</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <div className="info-box">
              <h3>📄 Rental Agreement Document</h3>
              <p>
                Please review the rental agreement carefully before signing. This is a
                placeholder for the actual rental agreement and contract terms.
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '40px',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              margin: '30px 0',
              maxHeight: '500px',
              overflow: 'auto'
            }}>
              <h2 style={{ textAlign: 'center' }}>
                THOMAS JEFFERSON CIVIC CENTER<br />
                FACILITY RENTAL AGREEMENT
              </h2>

              <h3>1. FACILITY USE</h3>
              <p>
                This agreement is entered into between the Thomas Jefferson Civic Center
                (hereinafter "Center") and the undersigned (hereinafter "Renter") for use
                of the facility located at 8237 Nevada St, Jacksonville, FL 32220.
              </p>

              <h3>2. RENTAL PERIOD</h3>
              <p>
                The facility is rented for the date(s) and time(s) specified in the booking
                confirmation. Setup and cleanup time must be included in the rental period.
              </p>

              <h3>3. PAYMENT TERMS</h3>
              <p>
                Full payment is due at the time of booking. A refundable security deposit
                of $150 is required and will be returned within 14 days after the event,
                provided no damage has occurred to the facility.
              </p>

              <h3>4. CANCELLATION POLICY</h3>
              <p>
                - Cancellations made 30+ days before event: Full refund<br />
                - Cancellations made 14-29 days before: 50% refund<br />
                - Cancellations made less than 14 days before: No refund
              </p>

              <h3>5. RENTER'S RESPONSIBILITIES</h3>
              <p>The Renter agrees to:</p>
              <ul>
                <li>Use the facility only for the stated purpose</li>
                <li>Leave the facility in the same condition as found</li>
                <li>Not exceed the maximum occupancy of 150 people</li>
                <li>Comply with all fire, safety, and health regulations</li>
                <li>Supervise all guests and activities during the rental period</li>
                <li>Not alter or move any fixed equipment or furniture</li>
              </ul>

              <h3>6. PROHIBITED ACTIVITIES</h3>
              <ul>
                <li>Illegal activities of any kind</li>
                <li>Smoking inside the facility (outdoor smoking areas available)</li>
                <li>Excessive noise after 10:00 PM</li>
                <li>Damage to property or equipment</li>
              </ul>

              <h3>7. LIABILITY</h3>
              <p>
                The Renter assumes full responsibility for any damage to the facility or
                equipment during the rental period. The Center is not responsible for any
                injuries, losses, or damages to persons or property during the event.
              </p>

              <h3>8. INSURANCE</h3>
              <p>
                The Renter may be required to provide proof of liability insurance for
                certain types of events, as determined by the Center.
              </p>

              <h3>9. HOLD HARMLESS</h3>
              <p>
                The Renter agrees to indemnify and hold harmless the Thomas Jefferson Civic
                Center, its officers, employees, and volunteers from any claims, damages,
                or liabilities arising from the use of the facility.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    required
                  />
                  <span>
                    I have read and agree to the terms and conditions of the rental agreement *
                  </span>
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="signature">Electronic Signature *</label>
                <input
                  type="text"
                  id="signature"
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  placeholder="Type your full name as your electronic signature"
                  required
                  style={{ fontFamily: 'cursive', fontSize: '1.2rem' }}
                />
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '5px' }}>
                  By typing your name above, you are providing your electronic signature
                  and agreeing to all terms.
                </p>
              </div>

              <div className="info-box">
                <h4>📝 Digital Signature</h4>
                <p>
                  This electronic signature has the same legal effect as a handwritten
                  signature. Your signed agreement will be saved as a PDF and sent to your
                  email address.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>
                <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>
                  Go Back
                </button>
                <button type="submit" className="btn" style={{ flex: 1 }}>
                  Sign & Continue to Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentalAgreement;
