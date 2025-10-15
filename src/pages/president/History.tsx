import '../PageStyles.css';

const History = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Know the History</h1>
          <p>The story of our community and civic center</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <h2>Our Heritage</h2>
            <p>
              The Thomas Jefferson Civic Center has been the cornerstone of community life
              in Jacksonville's Northside for decades. Our history is one of neighbors
              coming together, overcoming challenges, and building something lasting for
              future generations.
            </p>

            <div style={{
              background: 'var(--background-light)',
              padding: '30px',
              borderRadius: '8px',
              margin: '40px 0'
            }}>
              <h3 style={{ color: 'var(--primary-color)', marginTop: 0 }}>Timeline</h3>

              <div style={{ position: 'relative', paddingLeft: '40px', marginTop: '30px' }}>
                <div style={{
                  position: 'absolute',
                  left: '15px',
                  top: 0,
                  bottom: 0,
                  width: '3px',
                  background: 'var(--primary-color)'
                }} />

                {[
                  {
                    year: '1960s',
                    title: 'The Beginning',
                    description: 'Local residents recognized the need for a community gathering space and began organizing fundraising efforts.'
                  },
                  {
                    year: '1975',
                    title: 'Property Acquired',
                    description: 'Through community donations and local support, the land at 8237 Nevada St was purchased.'
                  },
                  {
                    year: '1978',
                    title: 'Civic Center Opens',
                    description: 'The Thomas Jefferson Civic Center officially opened its doors to the community with a grand celebration.'
                  },
                  {
                    year: '1985',
                    title: 'First Major Renovation',
                    description: 'Kitchen facilities were added, expanding event hosting capabilities.'
                  },
                  {
                    year: '1995',
                    title: '501(c)(3) Status',
                    description: 'Achieved non-profit status, allowing for tax-deductible donations and grant opportunities.'
                  },
                  {
                    year: '2005',
                    title: 'Facility Expansion',
                    description: 'Main hall was expanded to accommodate larger events, reaching 2,661 square feet.'
                  },
                  {
                    year: '2015',
                    title: 'Technology Upgrade',
                    description: 'Modern A/V equipment and WiFi installed to meet contemporary needs.'
                  },
                  {
                    year: '2020',
                    title: 'Community Resilience',
                    description: 'During challenging times, the center adapted to continue serving the community safely.'
                  },
                  {
                    year: '2025',
                    title: 'Looking Forward',
                    description: 'Continued improvements and expanded programming for our growing community.'
                  }
                ].map((event, index) => (
                  <div key={index} style={{ marginBottom: '40px', position: 'relative' }}>
                    <div style={{
                      position: 'absolute',
                      left: '-32px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'var(--secondary-color)',
                      border: '3px solid white'
                    }} />
                    <h4 style={{
                      color: 'var(--accent-color)',
                      marginBottom: '5px',
                      fontSize: '1.1rem'
                    }}>
                      {event.year}
                    </h4>
                    <h5 style={{ marginBottom: '10px' }}>{event.title}</h5>
                    <p style={{ margin: 0, color: 'var(--text-light)' }}>
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <h2>Community Impact</h2>
            <div className="card-grid">
              <div className="card">
                <h3 style={{ color: 'var(--primary-color)' }}>10,000+</h3>
                <p>Events Hosted</p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--primary-color)' }}>500+</h3>
                <p>Active Members</p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--primary-color)' }}>50+</h3>
                <p>Years of Service</p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--primary-color)' }}>1,000s</h3>
                <p>Volunteers</p>
              </div>
            </div>

            <h2 style={{ marginTop: '60px' }}>Our Mission Through the Years</h2>
            <p>
              Since our founding, our mission has remained consistent: to foster a strong,
              connected community by providing a welcoming space for residents to meet,
              celebrate, and work together. While our facilities have evolved and our
              programs have expanded, this core purpose continues to guide everything we do.
            </p>

            <div className="info-box" style={{ marginTop: '40px' }}>
              <h3>Share Your Memories</h3>
              <p>
                Do you have photos, stories, or memories of the Thomas Jefferson Civic
                Center? We'd love to hear from you! Your contributions help us preserve
                our community's history for future generations.
              </p>
              <a href="/about/contact" className="btn" style={{ marginTop: '15px' }}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
