import React from 'react';
import './Pages.css';

function Terms({ onBack }) {
  return (
    <div className="page-container">
      <button onClick={onBack} className="back-icon-button" aria-label="Back to Home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      <div className="page-content">
        <div className="page-hero">
          <h1 className="page-title">Terms of Service</h1>
          <p className="page-subtitle">Last updated: February 19, 2024</p>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using TryInterview ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to these Terms of Service, please do not use the Service.
            </p>
          </section>

          <section className="terms-section">
            <h2>2. Use of Service</h2>
            <p>
              TryInterview provides an AI-powered mock interview platform designed to help users practice and improve their interview skills. 
              You agree to use the Service only for lawful purposes and in accordance with these Terms.
            </p>
            <ul>
              <li>You must be at least 13 years old to use this Service</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You agree not to reproduce, duplicate, copy, or resell any part of the Service</li>
              <li>You will not use the Service for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate, complete, and current information. 
              Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
          </section>

          <section className="terms-section">
            <h2>4. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are owned by TryInterview and are protected by 
              international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section className="terms-section">
            <h2>5. Content Ownership</h2>
            <p>
              You retain all rights to any content you submit, post, or display on or through the Service. By submitting content, 
              you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content.
            </p>
          </section>

          <section className="terms-section">
            <h2>6. Payment and Refunds</h2>
            <p>
              Some parts of the Service may be billed on a subscription basis. You will be billed in advance on a recurring basis. 
              Refunds are handled on a case-by-case basis in accordance with our refund policy.
            </p>
          </section>

          <section className="terms-section">
            <h2>7. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, 
              under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="terms-section">
            <h2>8. Limitation of Liability</h2>
            <p>
              In no event shall TryInterview, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable 
              for any indirect, incidental, special, consequential or punitive damages arising out of your use of the Service.
            </p>
          </section>

          <section className="terms-section">
            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 
              30 days' notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="terms-section">
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              <br /><br />
              Email: support@tryinterview.site
              <br />
              Website: www.tryinterview.site
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Terms;
