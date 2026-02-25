import React from 'react';
import './Pages.css';

function Privacy({ onBack }) {
  return (
    <div className="page-container">
      <button onClick={onBack} className="back-icon-button" aria-label="Back to Home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      <div className="page-content">
        <div className="page-hero">
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-subtitle">Last updated: February 19, 2024</p>
        </div>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2>1. Introduction</h2>
            <p>
              At TryInterview ("we", "our", or "us"), we are committed to protecting your privacy. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you use our service.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not 
              access the service.
            </p>
          </section>

          <section className="privacy-section">
            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Register for an account</li>
              <li>Use our mock interview services</li>
              <li>Contact us for support</li>
              <li>Subscribe to our newsletter</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name and email address</li>
              <li>Profile information</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Interview practice sessions and recordings</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you access our service, we automatically collect certain information, including:</p>
            <ul>
              <li>Log data (IP address, browser type, pages visited)</li>
              <li>Device information</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions and manage your account</li>
              <li>Send you updates, notifications, and marketing communications (with your consent)</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Analyze usage patterns and improve user experience</li>
              <li>Detect, prevent, and address technical issues and fraudulent activities</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>4. Data Storage and Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information. 
              Your data is encrypted both in transit and at rest using industry-standard protocols.
            </p>
            <p>
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to 
              use commercially acceptable means to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="privacy-section">
            <h2>5. Data Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
            <ul>
              <li><strong>With your consent:</strong> When you explicitly agree to share your information</li>
              <li><strong>Service providers:</strong> With third-party vendors who perform services on our behalf</li>
              <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>6. Your Data Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
            </ul>
            <p>To exercise these rights, please contact us at privacy@tryinterview.site</p>
          </section>

          <section className="privacy-section">
            <h2>7. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our service and store certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            <p>Types of cookies we use:</p>
            <ul>
              <li><strong>Essential cookies:</strong> Necessary for the service to function</li>
              <li><strong>Analytics cookies:</strong> Help us understand how users interact with our service</li>
              <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>8. Third-Party Services</h2>
            <p>
              Our service may contain links to third-party websites or services. We are not responsible for the privacy practices 
              of these third parties. We encourage you to read their privacy policies.
            </p>
            <p>Third-party services we use include:</p>
            <ul>
              <li>Google Analytics for website analytics</li>
              <li>Firebase for authentication and database services</li>
              <li>Payment processors for secure payment handling</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>9. Children's Privacy</h2>
            <p>
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal information 
              from children under 13. If you are a parent or guardian and believe your child has provided us with personal 
              information, please contact us.
            </p>
          </section>

          <section className="privacy-section">
            <h2>10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and maintained on servers located outside of your country. We ensure that 
              appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="privacy-section">
            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
              Policy on this page and updating the "Last updated" date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are 
              effective when they are posted on this page.
            </p>
          </section>

          <section className="privacy-section">
            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>Email: privacy@tryinterview.site</li>
              <li>Website: www.tryinterview.site</li>
              <li>Address: TryInterview Privacy Team</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
