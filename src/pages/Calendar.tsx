import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarComponent from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

interface BookedEvent {
  date: string;
  startTime: string;
  endTime: string;
  type: string;
}

const Calendar = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  // Placeholder for booked events - will be fetched from DynamoDB
  const [bookedEvents] = useState<BookedEvent[]>([
    {
      date: '2025-10-20',
      startTime: '10:00',
      endTime: '14:00',
      type: 'Wedding Reception'
    },
    {
      date: '2025-10-25',
      startTime: '18:00',
      endTime: '22:00',
      type: 'Birthday Party'
    }
  ]);

  const timeSlots = [
    { value: 'morning', label: 'Morning (8:00 AM - 12:00 PM)', time: '08:00-12:00' },
    { value: 'afternoon', label: 'Afternoon (12:00 PM - 5:00 PM)', time: '12:00-17:00' },
    { value: 'evening', label: 'Evening (5:00 PM - 10:00 PM)', time: '17:00-22:00' },
    { value: 'full-day', label: 'Full Day (8:00 AM - 10:00 PM)', time: '08:00-22:00' },
    { value: 'custom', label: 'Custom Time', time: 'custom' }
  ];

  const isDateBooked = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return bookedEvents.some(event => event.date === dateString);
  };

  const handleDateChange = (value: Date) => {
    setSelectedDate(value);
    setSelectedTimeSlot('');
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTimeSlot) {
      alert('Please select a date and time slot');
      return;
    }

    // Check if date is already booked
    if (isDateBooked(selectedDate)) {
      alert('This date is already booked. Please select another date.');
      return;
    }

    // Navigate to rental agreement
    navigate('/rentals/agreement', {
      state: {
        date: selectedDate,
        timeSlot: selectedTimeSlot
      }
    });
  };

  const getTileClassName = ({ date }: { date: Date }) => {
    if (isDateBooked(date)) {
      return 'booked-date';
    }
    return '';
  };

  const upcomingEvents = bookedEvents
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Event Calendar</h1>
          <p>View availability and book your event</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="calendar-wrapper">
            <div className="calendar-main">
              <h2>Select a Date</h2>
              <p>
                Choose your preferred date for the event. Dates marked in red are already
                booked.
              </p>

              <div className="calendar-container">
                <CalendarComponent
                  onChange={(value) => handleDateChange(value as Date)}
                  value={selectedDate}
                  minDate={new Date()}
                  tileClassName={getTileClassName}
                  className="custom-calendar"
                />
              </div>

              {selectedDate && (
                <div className="time-slot-selection">
                  <h3>Select Time Slot</h3>
                  <p>
                    Selected Date: <strong>{selectedDate.toLocaleDateString()}</strong>
                  </p>

                  <div className="time-slots">
                    {timeSlots.map((slot) => (
                      <label
                        key={slot.value}
                        className={`time-slot-option ${
                          selectedTimeSlot === slot.value ? 'selected' : ''
                        }`}
                      >
                        <input
                          type="radio"
                          name="timeSlot"
                          value={slot.value}
                          checked={selectedTimeSlot === slot.value}
                          onChange={(e) => setSelectedTimeSlot(e.target.value)}
                        />
                        <span>{slot.label}</span>
                      </label>
                    ))}
                  </div>

                  {selectedTimeSlot === 'custom' && (
                    <div className="custom-time-inputs">
                      <div className="form-group">
                        <label>Start Time</label>
                        <input type="time" className="time-input" />
                      </div>
                      <div className="form-group">
                        <label>End Time</label>
                        <input type="time" className="time-input" />
                      </div>
                    </div>
                  )}

                  <button
                    className="btn"
                    style={{ width: '100%', marginTop: '20px' }}
                    onClick={handleBooking}
                  >
                    Continue to Rental Agreement
                  </button>
                </div>
              )}
            </div>

            <div className="calendar-sidebar">
              <div className="info-card">
                <h3>📅 Upcoming Events</h3>
                {upcomingEvents.length > 0 ? (
                  <ul className="events-list">
                    {upcomingEvents.map((event, index) => (
                      <li key={index} className="event-item">
                        <div className="event-date">
                          {new Date(event.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="event-details">
                          <strong>{event.type}</strong>
                          <div className="event-time">
                            {event.startTime} - {event.endTime}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No upcoming events scheduled</p>
                )}
              </div>

              <div className="info-card">
                <h3>🕐 Hours of Operation</h3>
                <p>
                  <strong>Monday - Sunday:</strong><br />
                  8:00 AM - 10:00 PM
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '10px' }}>
                  Extended hours may be available for special events. Contact us for details.
                </p>
              </div>

              <div className="info-card">
                <h3>📋 Legend</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '10px' }}>
                    <span style={{
                      display: 'inline-block',
                      width: '15px',
                      height: '15px',
                      background: '#fee',
                      border: '1px solid #c33',
                      marginRight: '10px',
                      verticalAlign: 'middle'
                    }}></span>
                    Booked
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <span style={{
                      display: 'inline-block',
                      width: '15px',
                      height: '15px',
                      background: '#fff',
                      border: '1px solid var(--border-color)',
                      marginRight: '10px',
                      verticalAlign: 'middle'
                    }}></span>
                    Available
                  </li>
                  <li>
                    <span style={{
                      display: 'inline-block',
                      width: '15px',
                      height: '15px',
                      background: 'var(--primary-color)',
                      marginRight: '10px',
                      verticalAlign: 'middle'
                    }}></span>
                    Selected
                  </li>
                </ul>
              </div>

              <div className="info-card">
                <h3>ℹ️ Need Help?</h3>
                <p>
                  Questions about availability or booking? Contact us and we'll be happy
                  to assist!
                </p>
                <a href="/about/contact" className="btn btn-secondary" style={{ marginTop: '15px', display: 'block' }}>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calendar;
