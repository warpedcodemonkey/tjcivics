import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../PageStyles.css';

const PlanEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    guestCount: '',
    isMember: 'no',
    additionalServices: [] as string[],
    specialRequests: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter((s) => s !== service)
        : [...prev.additionalServices, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the form data and proceed to calendar
    console.log('Event planning data:', formData);
    // Navigate to calendar for date/time selection
    navigate('/calendar');
  };

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Plan Your Event</h1>
          <p>Tell us about your event and we'll help make it memorable</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <form onSubmit={handleSubmit} className="event-form">
              <h2>Event Information</h2>

              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
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
                <label htmlFor="email">Email Address *</label>
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
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="eventType">Event Type *</label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Event Type</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="wedding">Wedding/Reception</option>
                  <option value="baby-shower">Baby Shower</option>
                  <option value="business">Business Meeting</option>
                  <option value="workshop">Educational Workshop</option>
                  <option value="fundraiser">Fundraising Event</option>
                  <option value="community">Community Gathering</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="eventDate">Preferred Event Date *</label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="two-column" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div className="form-group">
                  <label htmlFor="startTime">Start Time *</label>
                  <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="endTime">End Time *</label>
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="guestCount">Expected Number of Guests *</label>
                <input
                  type="number"
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  min="1"
                  max="150"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="isMember">Are you a member? *</label>
                <select
                  id="isMember"
                  name="isMember"
                  value={formData.isMember}
                  onChange={handleChange}
                  required
                >
                  <option value="no">No</option>
                  <option value="yes">Yes - Individual Member</option>
                  <option value="business">Yes - Business Member</option>
                </select>
              </div>

              <div className="form-group">
                <label>Additional Services</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontWeight: 'normal' }}>
                    <input
                      type="checkbox"
                      checked={formData.additionalServices.includes('setup')}
                      onChange={() => handleCheckboxChange('setup')}
                      style={{ marginRight: '10px' }}
                    />
                    Event Setup Assistance ($75)
                  </label>
                  <label style={{ fontWeight: 'normal' }}>
                    <input
                      type="checkbox"
                      checked={formData.additionalServices.includes('cleaning')}
                      onChange={() => handleCheckboxChange('cleaning')}
                      style={{ marginRight: '10px' }}
                    />
                    Additional Cleaning Service ($50)
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="specialRequests">Special Requests or Notes</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about any special requirements or requests for your event..."
                />
              </div>

              <div className="info-box">
                <h4>Next Steps</h4>
                <p>
                  After submitting this form, you'll be taken to our calendar to confirm
                  availability and complete your booking with payment and rental agreement
                  signature.
                </p>
              </div>

              <button type="submit" className="btn" style={{ width: '100%', marginTop: '20px' }}>
                Continue to Calendar
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanEvent;
