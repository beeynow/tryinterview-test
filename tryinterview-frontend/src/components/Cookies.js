import React from 'react';
import './Pages.css';

const Cookies = () => {
  return (
    <div className="page-container">
      <button onClick={() => window.location.hash = ''} className="back-icon-button" aria-label="Back to Home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      <div className="page-content cookies-redesign">
        <div className="cookies-hero">
          <svg className="cookie-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="9" cy="9" r="1" fill="currentColor"/>
            <circle cx="15" cy="9" r="1" fill="currentColor"/>
            <circle cx="12" cy="15" r="1" fill="currentColor"/>
            <circle cx="8" cy="14" r="1" fill="currentColor"/>
            <circle cx="16" cy="14" r="1" fill="currentColor"/>
          </svg>
          <h1>Cookie Policy</h1>
          <p className="last-updated">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            Last updated: February 24, 2026
          </p>
        </div>

        <div className="cookies-content">
          <section className="cookie-intro">
            <p>
              At TryInterview, we use cookies to enhance your experience and provide personalized features. 
              This policy explains what cookies are, how we use them, and your choices regarding cookies.
            </p>
          </section>

          <section className="cookie-section">
            <h2>🍪 What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit our website. They help us 
              remember your preferences, understand how you use our platform, and improve your overall experience.
            </p>
          </section>

          <section className="cookie-section">
            <h2>📊 Types of Cookies We Use</h2>
            
            <div className="cookie-types-grid">
              <div className="cookie-type-card">
                <div className="cookie-type-icon">⚙️</div>
                <h3>Essential Cookies</h3>
                <p>Required for basic website functionality like authentication and security.</p>
                <span className="cookie-duration">Duration: Session</span>
              </div>

              <div className="cookie-type-card">
                <div className="cookie-type-icon">📈</div>
                <h3>Analytics Cookies</h3>
                <p>Help us understand how visitors interact with our website and improve performance.</p>
                <span className="cookie-duration">Duration: Up to 2 years</span>
              </div>

              <div className="cookie-type-card">
                <div className="cookie-type-icon">🎯</div>
                <h3>Functionality Cookies</h3>
                <p>Remember your preferences and settings for a personalized experience.</p>
                <span className="cookie-duration">Duration: Up to 1 year</span>
              </div>

              <div className="cookie-type-card">
                <div className="cookie-type-icon">📢</div>
                <h3>Marketing Cookies</h3>
                <p>Track your activity to deliver relevant ads and measure campaign effectiveness.</p>
                <span className="cookie-duration">Duration: Up to 90 days</span>
              </div>
            </div>
          </section>

          <section className="cookie-section">
            <h2>🔧 Third-Party Services</h2>
            <div className="third-party-list">
              <div className="third-party-card">
                <h4>Google Analytics</h4>
                <p>Performance and analytics tracking</p>
              </div>
              <div className="third-party-card">
                <h4>Firebase</h4>
                <p>Authentication and real-time database</p>
              </div>
              <div className="third-party-card">
                <h4>Stripe</h4>
                <p>Payment processing</p>
              </div>
            </div>
          </section>

          <section className="cookie-section">
            <h2>⚡ Managing Your Cookies</h2>
            <p>
              You can control and manage cookies in your browser settings. Note that disabling certain 
              cookies may affect your experience on our platform.
            </p>
            
            <div className="browser-controls">
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="browser-link">
                Chrome Settings
              </a>
              <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="browser-link">
                Firefox Settings
              </a>
              <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="browser-link">
                Safari Settings
              </a>
              <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="browser-link">
                Edge Settings
              </a>
            </div>
          </section>

          <section className="cookie-section">
            <h2>📞 Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="contact-card">
              <p><strong>Email:</strong> privacy@tryinterview.com</p>
              <p><strong>Address:</strong> 123 Innovation Street, San Francisco, CA 94102</p>
            </div>
          </section>

          <div className="cookie-consent-notice">
            <p>
              By continuing to use TryInterview, you consent to our use of cookies as described in this policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
