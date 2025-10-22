import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import squarePaymentService from '../../services/square-service';
import '../PageStyles.css';

interface BookingData {
  eventId?: string;
  date?: string;
  startTime?: string;
  endTime?: string;
  customerName?: string;
  customerEmail?: string;
  isMember?: boolean;
  duration?: 'half-day' | 'full-day' | 'weekend';
  additionalServices?: string[];
}

const MakePayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = (location.state as BookingData) || {};

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Calculate payment amount
  const paymentAmount = squarePaymentService.calculateRentalAmount({
    isMember: bookingData.isMember || false,
    duration: bookingData.duration || 'full-day',
    additionalServices: bookingData.additionalServices || [],
  });

  // Initialize Square payment form
  useEffect(() => {
    const initSquare = async () => {
      if (paymentMethod === 'card') {
        try {
          await squarePaymentService.initialize();
          setIsInitialized(true);
          setError(null);
        } catch (err: any) {
          console.error('Failed to initialize Square:', err);
          setError('Unable to load payment form. Please refresh the page and try again.');
        }
      }
    };

    initSquare();

    // Cleanup on unmount
    return () => {
      squarePaymentService.destroy();
    };
  }, [paymentMethod]);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);

    try {
      if (paymentMethod === 'card') {
        const result = await squarePaymentService.processPayment({
          eventId: bookingData.eventId || 'test-event-' + Date.now(),
          customerName: bookingData.customerName || 'Test Customer',
          customerEmail: bookingData.customerEmail || 'test@example.com',
          amount: paymentAmount,
          description: `Facility Rental - ${bookingData.date || 'TBD'}`,
        });

        if (result.success) {
          setSuccess(true);
          // Navigate to confirmation page after 2 seconds
          setTimeout(() => {
            navigate('/rentals/pricing', {
              state: {
                success: true,
                transactionId: result.transactionId
              }
            });
          }, 2000);
        } else {
          setError(result.error || 'Payment failed. Please try again.');
        }
      } else {
        // ACH payment would be handled here
        setError('ACH payments are not yet implemented. Please use a credit/debit card.');
      }
    } catch (err: any) {
      console.error('Payment error:', err);
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
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
                          {bookingData.date || 'Not specified'}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)' }}>
                          <strong>Time:</strong>
                        </td>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)', textAlign: 'right' }}>
                          {bookingData.startTime && bookingData.endTime
                            ? `${bookingData.startTime} - ${bookingData.endTime}`
                            : 'Not specified'}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)' }}>
                          Facility Rental {bookingData.isMember && '(Member Rate)'}
                        </td>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)', textAlign: 'right' }}>
                          {squarePaymentService.formatAmount({
                            amount: paymentAmount.amount - 15000 -
                              (bookingData.additionalServices?.includes('setup') ? 7500 : 0) -
                              (bookingData.additionalServices?.includes('cleaning') ? 5000 : 0),
                            currency: 'USD'
                          })}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)' }}>
                          Security Deposit (Refundable)
                        </td>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)', textAlign: 'right' }}>
                          $150.00
                        </td>
                      </tr>
                      {bookingData.additionalServices && bookingData.additionalServices.length > 0 && (
                        <tr>
                          <td style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)' }}>
                            Additional Services
                          </td>
                          <td style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)', textAlign: 'right' }}>
                            {squarePaymentService.formatAmount({
                              amount: (bookingData.additionalServices?.includes('setup') ? 7500 : 0) +
                                     (bookingData.additionalServices?.includes('cleaning') ? 5000 : 0),
                              currency: 'USD'
                            })}
                          </td>
                        </tr>
                      )}
                      <tr>
                        <td style={{ padding: '15px 0 5px' }}>
                          <strong style={{ fontSize: '1.2rem' }}>Total:</strong>
                        </td>
                        <td style={{ padding: '15px 0 5px', textAlign: 'right' }}>
                          <strong style={{ fontSize: '1.2rem', color: 'var(--primary-color)' }}>
                            {squarePaymentService.formatAmount(paymentAmount)}
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
                      <h4 style={{ marginTop: 0 }}>Card Payment</h4>

                      {error && (
                        <div style={{
                          background: '#fee',
                          border: '1px solid #fcc',
                          color: '#c33',
                          padding: '15px',
                          borderRadius: '5px',
                          marginBottom: '20px'
                        }}>
                          {error}
                        </div>
                      )}

                      {success && (
                        <div style={{
                          background: '#efe',
                          border: '1px solid #cfc',
                          color: '#3c3',
                          padding: '15px',
                          borderRadius: '5px',
                          marginBottom: '20px'
                        }}>
                          Payment successful! Redirecting to confirmation...
                        </div>
                      )}

                      {!isInitialized && !error && (
                        <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>
                          Loading payment form...
                        </p>
                      )}

                      {/* Square Card Payment Form Container */}
                      <div
                        id="card-container"
                        style={{
                          minHeight: '150px',
                          marginBottom: '20px'
                        }}
                      ></div>

                      {isInitialized && (
                        <p style={{
                          fontSize: '0.85rem',
                          color: 'var(--text-light)',
                          fontStyle: 'italic',
                          marginTop: '10px'
                        }}>
                          Test Mode: Use card number 4111 1111 1111 1111 with any future expiration date and CVV
                        </p>
                      )}
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
                    disabled={isProcessing || !isInitialized || success}
                  >
                    {isProcessing ? 'Processing Payment...' : success ? 'Payment Successful!' : 'Complete Payment'}
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
