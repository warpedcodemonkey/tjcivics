import '../PageStyles.css';

const PresidentMessage = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>From the President</h1>
          <p>A message from our community leader</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
              gap: '40px',
              marginBottom: '40px'
            }}>
              <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'var(--background-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '5rem'
              }}>
                👤
              </div>
              <div>
                <h2 style={{ marginTop: 0 }}>John Smith</h2>
                <p style={{ color: 'var(--accent-color)', fontWeight: '600', fontSize: '1.1rem' }}>
                  President, Thomas Jefferson Civic Center
                </p>
                <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
                  "Together, we are building a stronger, more connected community where
                  everyone feels welcome and valued."
                </p>
              </div>
            </div>

            <div style={{
              background: 'var(--background-light)',
              padding: '40px',
              borderRadius: '8px',
              borderLeft: '4px solid var(--primary-color)'
            }}>
              <h3 style={{ marginTop: 0 }}>Dear Neighbors,</h3>

              <p>
                Welcome to the Thomas Jefferson Civic Center! It is my honor and privilege
                to serve as your president and to work alongside such dedicated community
                members who share a vision of a vibrant, connected neighborhood.
              </p>

              <p>
                As we look ahead to 2025, I'm excited about the opportunities before us.
                Our civic center continues to be the heart of our community – a place where
                neighbors become friends, where celebrations create memories, and where
                we come together to support one another.
              </p>

              <p>
                This year, we have ambitious plans:
              </p>

              <ul style={{ marginLeft: '20px', marginTop: '15px' }}>
                <li>
                  <strong>Facility Improvements:</strong> We're upgrading our kitchen facilities
                  and enhancing our outdoor spaces to better serve your needs.
                </li>
                <li>
                  <strong>Expanded Programming:</strong> New workshops, classes, and activities
                  for all ages are in development.
                </li>
                <li>
                  <strong>Community Events:</strong> From our annual summer festival to monthly
                  gatherings, we're bringing neighbors together more than ever.
                </li>
                <li>
                  <strong>Youth Initiatives:</strong> Special programs designed to engage our
                  younger residents and foster the next generation of community leaders.
                </li>
              </ul>

              <p>
                None of this would be possible without the support of members like you. Your
                membership dues, volunteer hours, and participation in our events fuel
                everything we do. Whether you're a longtime resident or new to the neighborhood,
                there's a place for you here.
              </p>

              <p>
                I encourage you to get involved – attend our monthly meetings, volunteer for
                an event, join a committee, or simply stop by to say hello. Your voice matters,
                and your participation makes our community stronger.
              </p>

              <p>
                Thank you for being part of the Thomas Jefferson community. Together, we're
                not just maintaining a facility – we're building a legacy of neighborliness,
                cooperation, and civic pride that will benefit generations to come.
              </p>

              <p style={{ marginTop: '30px' }}>
                <strong>With gratitude and community spirit,</strong>
              </p>

              <p style={{ fontFamily: 'cursive', fontSize: '1.5rem', marginTop: '10px' }}>
                John Smith
              </p>

              <p style={{ marginTop: '10px' }}>
                President, Thomas Jefferson Civic Center<br />
                <a href="mailto:president@example.com">president@example.com</a>
              </p>
            </div>

            <div className="info-box" style={{ marginTop: '40px' }}>
              <h3>Join Us at Our Monthly Meeting</h3>
              <p>
                <strong>When:</strong> First Thursday of every month at 7:00 PM<br />
                <strong>Where:</strong> Thomas Jefferson Civic Center<br />
                8237 Nevada St, Jacksonville, FL 32220
              </p>
              <p style={{ marginTop: '15px' }}>
                All community members are welcome! Come share your ideas, learn about
                upcoming events, and meet your neighbors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PresidentMessage;
