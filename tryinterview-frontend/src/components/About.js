import React from 'react';
import './Pages.css';

function About({ onBack }) {
  return (
    <div className="page-container">
      <button onClick={onBack} className="back-icon-button" aria-label="Back to Home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      <div className="page-content">
        <div className="page-hero">
          <h1 className="page-title">About TryInterview</h1>
          <p className="page-subtitle">Empowering candidates to land their dream jobs</p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              At TryInterview, we believe that everyone deserves the opportunity to showcase their true potential in job interviews. 
              Our mission is to democratize interview preparation by providing affordable, accessible, and effective AI-powered mock 
              interview practice to candidates worldwide.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              TryInterview was born from a simple observation: talented individuals often fail job interviews not because they lack 
              skills, but because they lack proper preparation and practice opportunities. Traditional coaching is expensive and 
              time-consuming, making it inaccessible to many.
            </p>
            <p>
              We set out to change that. By leveraging cutting-edge AI technology, we've created a platform that provides realistic, 
              personalized mock interview experiences available 24/7 at a fraction of the cost of traditional coaching.
            </p>
          </section>

          <section className="about-section">
            <h2>What We Do</h2>
            <p>
              TryInterview provides:
            </p>
            <ul>
              <li><strong>AI-Powered Mock Interviews:</strong> Practice with our intelligent AI interviewer that adapts to your responses</li>
              <li><strong>Instant Feedback:</strong> Get detailed analysis of your performance immediately after each session</li>
              <li><strong>Industry-Specific Preparation:</strong> Access questions and scenarios tailored to your target industry and role</li>
              <li><strong>Progress Tracking:</strong> Monitor your improvement over time with comprehensive analytics</li>
              <li><strong>Expert Resources:</strong> Learn from curated tips, guides, and best practices from industry professionals</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>🎯 Excellence</h3>
                <p>We're committed to providing the highest quality interview preparation experience</p>
              </div>
              <div className="value-item">
                <h3>🤝 Accessibility</h3>
                <p>Everyone deserves access to great interview preparation, regardless of background or budget</p>
              </div>
              <div className="value-item">
                <h3>💡 Innovation</h3>
                <p>We continuously innovate to bring you the most advanced and effective preparation tools</p>
              </div>
              <div className="value-item">
                <h3>🔒 Privacy</h3>
                <p>Your practice sessions and data are completely private and secure</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Our Impact</h2>
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-number">50,000+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">98%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">1M+</div>
                <div className="stat-label">Practice Sessions</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">150+</div>
                <div className="stat-label">Countries Served</div>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Join Our Community</h2>
            <p>
              Join thousands of successful candidates who have used TryInterview to land their dream jobs. Whether you're a fresh 
              graduate, career changer, or experienced professional, we're here to help you succeed.
            </p>
            <p>
              Start your journey today and take the first step towards interview confidence and career success.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
