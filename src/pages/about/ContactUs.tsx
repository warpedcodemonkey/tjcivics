import { useState } from 'react';
import '../PageStyles.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    alert('Thank you for contacting us! We will get back to you soon.');
    console.log('Contact form data:', formData);
  };

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-column">
            <div>
              <h2>Get in Touch</h2>
              <p>
                Have questions about membership, facility rentals, or upcoming events?
                We're here to help! Reach out to us using the form or contact information
                below.
              </p>

              <div className="info-card" style={{ marginTop: '30px' }}>
                <h3>📍 Address</h3>
                <p>
                  8237 Nevada St<br />
                  Jacksonville, FL 32220
                </p>
              </div>

              <div className="info-card">
                <h3>📧 Email</h3>
                <p>
                  <a href="mailto:TJCivicClub@gmail.com">TJCivicClub@gmail.com</a>
                </p>
              </div>

              <div className="info-card">
                <h3>📞 Phone</h3>
                <p>
                  <a href="tel:9044241873">(904) 424-1873</a>
                </p>
              </div>

              <div className="info-card">
                <h3>🕐 Office Hours</h3>
                <p>
                  By appointment only<br />
                  Community meetings: First Thursday of every month at 7:00 PM
                </p>
              </div>

              <div className="info-card">
                <h3>📱 Social Media</h3>
                <p>
                  Follow us on Facebook for the latest updates and community news!
                </p>
                <a href="#" style={{ display: 'inline-block', marginTop: '10px' }}>
                  Facebook →
                </a>
              </div>
            </div>

            <div>
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="rental">Facility Rental</option>
                    <option value="event">Event Information</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="sponsor">Sponsorship/Donation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                </div>

                <button type="submit" className="btn" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--background-light)', padding: '40px 0' }}>
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <div style={{
            background: 'var(--border-color)',
            height: '400px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            color: 'var(--text-light)'
          }}>
            [Google Maps Integration Placeholder]<br />
            8237 Nevada St, Jacksonville, FL 32220
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
