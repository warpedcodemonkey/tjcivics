import '../PageStyles.css';

const Forms = () => {
  const forms = [
    {
      category: 'Membership',
      items: [
        { name: 'Individual Membership Application', format: 'PDF' },
        { name: 'Business Membership Application', format: 'PDF' },
        { name: 'Membership Renewal Form', format: 'PDF' },
      ]
    },
    {
      category: 'Facility Rental',
      items: [
        { name: 'Facility Rental Application', format: 'PDF' },
        { name: 'Rental Agreement & Contract', format: 'PDF' },
        { name: 'Event Planning Worksheet', format: 'PDF' },
        { name: 'Liability Waiver Form', format: 'PDF' },
      ]
    },
    {
      category: 'Volunteer',
      items: [
        { name: 'Volunteer Application Form', format: 'PDF' },
        { name: 'Volunteer Interest Survey', format: 'PDF' },
        { name: 'Background Check Authorization', format: 'PDF' },
      ]
    },
    {
      category: 'Donations & Sponsorship',
      items: [
        { name: 'Sponsorship Application Form', format: 'PDF' },
        { name: 'Donation Form', format: 'PDF' },
        { name: 'In-Kind Donation Form', format: 'PDF' },
      ]
    },
    {
      category: 'General',
      items: [
        { name: 'Contact Information Update Form', format: 'PDF' },
        { name: 'Event Proposal Form', format: 'PDF' },
        { name: 'Vendor Application', format: 'PDF' },
      ]
    }
  ];

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Forms & Applications</h1>
          <p>Download the forms you need</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <div className="info-box">
              <h3>📄 How to Use These Forms</h3>
              <p>
                Download the appropriate form(s) below. Fill them out completely and either:
              </p>
              <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
                <li>Email to: <a href="mailto:TJCivicClub@gmail.com">TJCivicClub@gmail.com</a></li>
                <li>Mail to: 8237 Nevada St, Jacksonville, FL 32220</li>
                <li>Bring to our monthly meeting (First Thursday at 7:00 PM)</li>
              </ul>
            </div>

            {forms.map((category, categoryIndex) => (
              <div key={categoryIndex} style={{ marginTop: '50px' }}>
                <h2>{category.category}</h2>
                <div style={{
                  background: 'white',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  marginTop: '20px'
                }}>
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px',
                        borderBottom: itemIndex < category.items.length - 1 ? '1px solid var(--border-color)' : 'none',
                        transition: 'background-color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--background-light)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                    >
                      <div style={{ flex: 1 }}>
                        <h4 style={{ margin: 0, marginBottom: '5px' }}>{item.name}</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-light)' }}>
                          Format: {item.format}
                        </p>
                      </div>
                      <button className="btn" style={{ marginLeft: '20px' }}>
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="info-box" style={{ marginTop: '60px' }}>
              <h3>Need Help?</h3>
              <p>
                If you need assistance filling out any forms or have questions about which
                form to use, please don't hesitate to contact us. We're here to help!
              </p>
              <a href="/about/contact" className="btn" style={{ marginTop: '15px' }}>
                Contact Us
              </a>
            </div>

            <div style={{
              background: 'var(--background-light)',
              padding: '30px',
              borderRadius: '8px',
              marginTop: '40px',
              textAlign: 'center'
            }}>
              <h3>Prefer Paper Forms?</h3>
              <p>
                Paper copies of all forms are available at the civic center during events
                and monthly meetings. You can also request forms by phone at{' '}
                <a href="tel:9044241873">(904) 424-1873</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forms;
