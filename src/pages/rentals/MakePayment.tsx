import { useState } from 'react';
import '../PageStyles.css';

const MakePayment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Placeholder for Square payment integration
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment processing placeholder - Square integration will be implemented here');
    }, 2000);
  };

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Make a Payment</h1>
          <p>Complete your rental booking with secure payment</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <div className="two-column">
              <div>
                <h2>Payment Summary</h2>

                <div style={{
                  background: 'var(--background-light)',
                  padding: '25px',
                  borderRadius: '8px',
                  marginBottom: '30px'
                }}>
                  <h3>Booking Details</h3>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                      <tr>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)' }}>
                          <strong>Event Date:</strong>
                        </td>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)', textAlign: 'right' }}>
                          [Selected Date]
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)' }}>
                          <strong>Time:</strong>
                        </td>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)', textAlign: 'right' }}>
                          [Selected Time]
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)' }}>
                          Facility Rental
                        </td>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)', textAlign: 'right' }}>
                          $250.00
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)' }}>
                          Security Deposit
                        </td>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)', textAlign: 'right' }}>
                          $150.00
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)' }}>
                          Additional Services
                        </td>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)', textAlign: 'right' }}>
                          $0.00
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: '15px 0 5px' }}>
                          <strong style={{ fontSize: '1.2rem' }}>Total:</strong>
                        </td>
                        <td style={{ padding: '15px 0 5px', textAlign: 'right' }}>
                          <strong style={{ fontSize: '1.2rem', color: 'var(--primary-color)' }}>
                            $400.00
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-light)',
                    marginTop: '15px',
                    fontStyle: 'italic'
                  }}>
                    * Security deposit will be refunded within 14 days after your event
                  </p>
                </div>

                <div className="info-box">
                  <h4>🔒 Secure Payment</h4>
                  <p>
                    Payments are processed securely through Square. We accept all major
                    credit and debit cards. Your payment information is encrypted and secure.
                  </p>
                </div>
              </div>

              <div>
                <h2>Payment Method</h2>

                <form onSubmit={handlePayment}>
                  <div className="form-group">
                    <label>Select Payment Method</label>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      style={{ width: '100%' }}
                    >
                      <option value="card">Credit/Debit Card</option>
                      <option value="ach">ACH Bank Transfer</option>
                    </select>
                  </div>

                  {paymentMethod === 'card' && (
                    <div style={{
                      background: 'var(--background-light)',
                      padding: '30px',
                      borderRadius: '8px',
                      marginTop: '20px'
                    }}>
                      <h4 style={{ marginTop: 0 }}>Square Payment Form</h4>
                      <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>
                        [Square Web Payments SDK will be integrated here]
                      </p>

                      {/* Placeholder for Square payment form */}
                      <div className="form-group">
                        <label>Card Number</label>
                        <input
                          type="text"
                          placeholder="•••• •••• •••• ••••"
                          disabled
                        />
                      </div>

                      <div className="two-column" style={{ gridTemplateColumns: '1fr 1fr' }}>
                        <div className="form-group">
                          <label>Expiration</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            disabled
                          />
                        </div>

                        <div className="form-group">
                          <label>CVV</label>
                          <input
                            type="text"
                            placeholder="•••"
                            disabled
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Cardholder Name</label>
                        <input
                          type="text"
                          placeholder="Name on card"
                          disabled
                        />
                      </div>

                      <div className="form-group">
                        <label>Billing ZIP Code</label>
                        <input
                          type="text"
                          placeholder="12345"
                          disabled
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'ach' && (
                    <div style={{
                      background: 'var(--background-light)',
                      padding: '30px',
                      borderRadius: '8px',
                      marginTop: '20px'
                    }}>
                      <h4 style={{ marginTop: 0 }}>Bank Account Information</h4>
                      <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>
                        [Square ACH payment form will be integrated here]
                      </p>
                    </div>
                  )}

                  <div className="form-group" style={{ marginTop: '30px' }}>
                    <label style={{ display: 'flex', alignItems: 'start', gap: '10px' }}>
                      <input type="checkbox" required />
                      <span style={{ fontSize: '0.9rem' }}>
                        I authorize Thomas Jefferson Civic Center to charge the payment
                        method above for the total amount. I understand the cancellation
                        policy and agree to all terms of the rental agreement.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn"
                    style={{ width: '100%', marginTop: '20px' }}
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : 'Complete Payment'}
                  </button>
                </form>

                <div style={{
                  marginTop: '20px',
                  textAlign: 'center',
                  fontSize: '0.9rem',
                  color: 'var(--text-light)'
                }}>
                  <p>
                    By completing this payment, you agree to the rental agreement and
                    understand that you will receive a confirmation email with your
                    booking details and signed contract.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MakePayment;
