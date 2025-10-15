import '../PageStyles.css';

const Directory = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>2025 Directory</h1>
          <p>Connect with your neighbors and local businesses</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <div className="info-box">
              <h3>📖 Community Directory</h3>
              <p>
                Our annual community directory is available exclusively to members. The
                directory includes contact information for members, local businesses, and
                important community resources.
              </p>
              <p style={{ marginTop: '15px' }}>
                <strong>Not a member yet?</strong> Join today to receive your copy of the
                directory and access to all member benefits!
              </p>
              <a href="/membership/join" className="btn" style={{ marginTop: '15px' }}>
                Become a Member
              </a>
            </div>

            <h2 style={{ marginTop: '60px' }}>What's in the Directory?</h2>

            <div className="card-grid">
              <div className="card">
                <div className="card-icon">👨‍👩‍👧‍👦</div>
                <h3>Member Listings</h3>
                <p>
                  Contact information for individual and family members who have opted
                  to be included in the directory.
                </p>
              </div>

              <div className="card">
                <div className="card-icon">🏢</div>
                <h3>Business Members</h3>
                <p>
                  Directory of local businesses with descriptions, contact info, and
                  services offered.
                </p>
              </div>

              <div className="card">
                <div className="card-icon">👥</div>
                <h3>Board & Committees</h3>
                <p>
                  Contact information for board members and committee chairs for easy
                  communication.
                </p>
              </div>

              <div className="card">
                <div className="card-icon">📞</div>
                <h3>Important Numbers</h3>
                <p>
                  Emergency services, city offices, utilities, and other essential
                  community contacts.
                </p>
              </div>

              <div className="card">
                <div className="card-icon">📅</div>
                <h3>Event Calendar</h3>
                <p>
                  Schedule of upcoming community events, meetings, and important dates
                  for the year.
                </p>
              </div>

              <div className="card">
                <div className="card-icon">🗺️</div>
                <h3>Neighborhood Map</h3>
                <p>
                  Detailed map of the Thomas Jefferson neighborhood with key landmarks
                  and facilities.
                </p>
              </div>
            </div>

            <h2 style={{ marginTop: '60px' }}>Get Your Copy</h2>

            <div className="two-column">
              <div>
                <h3>Digital Directory</h3>
                <p>
                  Members can access the digital version of the directory online through
                  our member portal. The digital version includes:
                </p>
                <ul className="benefits-list">
                  <li>Searchable member database</li>
                  <li>Real-time updates</li>
                  <li>Mobile-friendly access</li>
                  <li>Direct links to email and phone</li>
                </ul>
              </div>

              <div>
                <h3>Print Directory</h3>
                <p>
                  Prefer a physical copy? Print directories are available for members:
                </p>
                <ul className="benefits-list">
                  <li>Pick up at monthly meetings</li>
                  <li>Available at the civic center</li>
                  <li>Can be mailed for small fee</li>
                  <li>Published annually in January</li>
                </ul>
              </div>
            </div>

            <div style={{
              background: 'var(--background-light)',
              padding: '30px',
              borderRadius: '8px',
              marginTop: '40px'
            }}>
              <h3>Update Your Listing</h3>
              <p>
                Current members: Make sure your information in the directory is accurate!
                If you've moved, changed your phone number, or want to update your listing,
                please let us know.
              </p>

              <h4 style={{ marginTop: '20px' }}>Privacy Options</h4>
              <p>
                You control what information appears in the directory. Options include:
              </p>
              <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
                <li>Full listing (name, address, phone, email)</li>
                <li>Limited listing (name and email only)</li>
                <li>Unlisted (excluded from directory)</li>
              </ul>

              <a href="/about/forms" className="btn" style={{ marginTop: '20px' }}>
                Update Your Information
              </a>
            </div>

            <div className="info-box" style={{ marginTop: '40px' }}>
              <h3>Questions About the Directory?</h3>
              <p>
                Contact us if you have questions about the community directory, need help
                accessing your member login, or want to update your listing information.
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

export default Directory;
