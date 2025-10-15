import '../PageStyles.css';

const Board = () => {
  const boardMembers = [
    {
      name: 'John Smith',
      position: 'President',
      email: 'president@example.com',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Passionate about community development and neighborhood engagement.'
    },
    {
      name: 'Jane Doe',
      position: 'Vice President',
      email: 'vp@example.com',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dedicated to bringing neighbors together and fostering community spirit.'
    },
    {
      name: 'Robert Johnson',
      position: 'Treasurer',
      email: 'treasurer@example.com',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Managing finances and ensuring responsible stewardship of resources.'
    },
    {
      name: 'Mary Williams',
      position: 'Secretary',
      email: 'secretary@example.com',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Keeping records and maintaining communication with members.'
    },
    {
      name: 'David Brown',
      position: 'Board Member',
      email: 'board1@example.com',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Committed to community improvement and event planning.'
    },
    {
      name: 'Sarah Davis',
      position: 'Board Member',
      email: 'board2@example.com',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Focused on youth programs and family-friendly activities.'
    }
  ];

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>The 2025 Board</h1>
          <p>Meet our dedicated leadership team</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <h2>Board of Directors</h2>
            <p>
              Our volunteer board of directors works tirelessly to serve the Thomas Jefferson
              community. Each member brings unique skills and perspectives to help guide our
              organization and plan events that bring neighbors together.
            </p>

            <div className="card-grid" style={{ marginTop: '40px' }}>
              {boardMembers.map((member, index) => (
                <div key={index} className="card">
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'var(--background-light)',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem'
                  }}>
                    👤
                  </div>
                  <h3 style={{ textAlign: 'center', marginBottom: '5px' }}>{member.name}</h3>
                  <p style={{
                    textAlign: 'center',
                    color: 'var(--accent-color)',
                    fontWeight: '600',
                    marginBottom: '15px'
                  }}>
                    {member.position}
                  </p>
                  <p style={{ textAlign: 'center', fontSize: '0.95rem' }}>
                    {member.bio}
                  </p>
                  <p style={{ textAlign: 'center', marginTop: '15px' }}>
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                  </p>
                </div>
              ))}
            </div>

            <div className="info-box" style={{ marginTop: '60px' }}>
              <h3>Interested in Board Service?</h3>
              <p>
                Board positions are elected annually at our general membership meeting. If
                you're interested in serving on the board and making a difference in our
                community, we'd love to hear from you!
              </p>
              <p style={{ marginTop: '15px' }}>
                <strong>Requirements:</strong>
              </p>
              <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
                <li>Current member in good standing</li>
                <li>Willingness to attend monthly board meetings</li>
                <li>Commitment to community service</li>
                <li>Ability to volunteer time and energy</li>
              </ul>
              <a href="/about/contact" className="btn" style={{ marginTop: '20px' }}>
                Contact Us to Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Board;
