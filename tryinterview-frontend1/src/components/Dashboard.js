import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { createCheckoutSession, STRIPE_PRICES, isStripeConfigured } from '../services/stripeService';

const Dashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState(() => {
    // Get initial tab from URL hash
    const hash = window.location.hash.replace('#dashboard/', '').split('?')[0];
    return hash || 'interview';
  });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loadingCheckout, setLoadingCheckout] = useState(false);
  const [currentSubscription, setCurrentSubscription] = useState(null);
  const [loadingSubscription, setLoadingSubscription] = useState(true);

  // Fetch user's current subscription
  useEffect(() => {
    if (user?.uid) {
      fetchSubscription();
    }
  }, [user]);

  const fetchSubscription = async () => {
    try {
      setLoadingSubscription(true);
      const response = await fetch(`http://localhost:3002/api/check-subscription?userId=${user.uid}`);
      const data = await response.json();
      
      if (data.hasSubscription && data.status === 'active') {
        setCurrentSubscription(data);
        console.log('✅ Active subscription found:', data);
      } else {
        setCurrentSubscription(null);
        console.log('ℹ️ No active subscription');
      }
    } catch (error) {
      console.error('Error fetching subscription:', error);
      setCurrentSubscription(null);
    } finally {
      setLoadingSubscription(false);
    }
  };

  // Get plan name from price ID
  const getPlanFromPriceId = (priceId) => {
    if (!priceId) return 'Free';
    
    if (priceId === STRIPE_PRICES.STARTER) return 'Starter';
    if (priceId === STRIPE_PRICES.PROFESSIONAL) return 'Professional';
    if (priceId === STRIPE_PRICES.PREMIUM) return 'Premium';
    if (priceId === STRIPE_PRICES.ENTERPRISE) return 'Enterprise';
    
    return 'Unknown Plan';
  };

  // Handle subscription purchase
  const handleSubscribe = async (plan, priceId) => {
    if (!isStripeConfigured()) {
      alert('⚠️ Stripe Setup Required\n\nYour Stripe publishable key is not configured.\n\n1. Go to https://dashboard.stripe.com/test/apikeys\n2. Copy your publishable key\n3. Add it to .env.local file\n4. Restart the server\n\nSee STRIPE_SETUP.md for detailed instructions.');
      return;
    }

    // Check if priceId looks like a placeholder
    if (!priceId || !priceId.startsWith('price_') || priceId.length < 20) {
      const message = `⚠️ Stripe Product Setup Required\n\nYou need to create the ${plan} plan in Stripe:\n\n1. Go to https://dashboard.stripe.com/test/products\n2. Click "+ Add product"\n3. Create a product for this plan\n4. Copy the Price ID (starts with "price_")\n5. Update .env.local:\n   REACT_APP_STRIPE_PRICE_${plan.toUpperCase()}=price_xxxxx\n6. Server will auto-reload\n\nCurrent placeholder: ${priceId}\n\nSee STRIPE_SETUP.md for step-by-step guide.`;
      alert(message);
      return;
    }

    // Check if user already has this plan
    if (currentSubscription && currentSubscription.priceId === priceId) {
      alert('✅ You already have this plan!\n\nYou are currently subscribed to the ' + plan + ' plan.');
      return;
    }

    try {
      setLoadingCheckout(true);
      await createCheckoutSession(priceId, user);
      // Subscription will be updated via webhook after successful payment
    } catch (error) {
      alert('❌ Payment Error\n\nFailed to start checkout. Please try again.\n\nIf the problem persists, check:\n• Your internet connection\n• Stripe Dashboard for any issues\n• Browser console for error details');
    } finally {
      setLoadingCheckout(false);
    }
  };

  // Check if current plan is active
  const isCurrentPlan = (priceId) => {
    return currentSubscription && currentSubscription.priceId === priceId;
  };

  // Handle tab changes and update URL
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.location.hash = `dashboard/${tabId}`;
  };

  // Listen for hash changes
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#dashboard/', '');
      if (hash && hash !== activeTab) {
        setActiveTab(hash);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activeTab]);

  const mainNavItems = [
    { 
      id: 'interview', 
      label: 'Mock Interview', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    },
    { 
      id: 'meeting', 
      label: 'Meeting Summarizer', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    },
    { 
      id: 'history', 
      label: 'Interview History', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    },
    { 
      id: 'resume', 
      label: 'Resume Analyzer', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    },
    { 
      id: 'questions', 
      label: 'Question Bank', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    },
    { 
      id: 'achievements', 
      label: 'Achievements', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
        <path d="M4 22h16"/>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
      </svg>
    },
    { 
      id: 'certificate', 
      label: 'Certificates', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    },
    { 
      id: 'referrals', 
      label: 'Referrals', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    },
    { 
      id: 'subscription', 
      label: 'Subscription', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    }
  ];

  const bottomNavItems = [
    { 
      id: 'profile', 
      label: 'Profile', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M1 12h6m6 0h6m-13.2 5.2l4.2-4.2m0-6l-4.2-4.2"/>
      </svg>
    },
    { 
      id: 'docs', 
      label: 'Documentation', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'interview':
        return (
          <div className="content-section">
            <div className="section-header">
              <h1>🎤 Mock Interview</h1>
              <p>Practice your interview skills with AI-powered mock interviews</p>
            </div>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">💼</div>
                <h3>Technical Interview</h3>
                <p>Practice coding and system design questions</p>
                <button className="feature-btn">Start Interview</button>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💬</div>
                <h3>Behavioral Interview</h3>
                <p>Master STAR method and communication skills</p>
                <button className="feature-btn">Start Interview</button>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Case Study Interview</h3>
                <p>Solve business problems and analyze data</p>
                <button className="feature-btn">Start Interview</button>
              </div>
            </div>
          </div>
        );
      
      case 'meeting':
        return (
          <div className="content-section">
            <div className="section-header">
              <h1>📊 Meeting Summarizer</h1>
              <p>Get AI-powered summaries of your meetings and interviews</p>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">24</div>
                <div className="stat-label">Meetings Summarized</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">156</div>
                <div className="stat-label">Key Points Extracted</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">92%</div>
                <div className="stat-label">Accuracy Rate</div>
              </div>
            </div>
            <button className="primary-action-btn">Upload New Meeting</button>
          </div>
        );
      
      case 'history':
        return (
          <div className="content-section">
            <div className="section-header">
              <h1>📜 Interview History</h1>
              <p>Review your past interview performances and feedback</p>
            </div>
            <div className="history-list">
              <div className="history-item">
                <div className="history-icon">💼</div>
                <div className="history-info">
                  <h3>Technical Interview - Frontend Developer</h3>
                  <p>Score: 85/100 • Duration: 45 minutes</p>
                  <span className="history-date">2 days ago</span>
                </div>
                <button className="view-btn">View Details</button>
              </div>
              <div className="history-item">
                <div className="history-icon">💬</div>
                <div className="history-info">
                  <h3>Behavioral Interview - Team Lead Position</h3>
                  <p>Score: 92/100 • Duration: 30 minutes</p>
                  <span className="history-date">5 days ago</span>
                </div>
                <button className="view-btn">View Details</button>
              </div>
            </div>
          </div>
        );
      
      case 'resume':
        return (
          <div className="content-section">
            <div className="section-header">
              <h1>📄 Resume Analyzer</h1>
              <p>Get AI-powered insights to improve your resume</p>
            </div>
            <div className="upload-zone">
              <div className="upload-icon">📤</div>
              <h3>Drop your resume here</h3>
              <p>Supports PDF, DOC, DOCX files up to 5MB</p>
              <button className="upload-btn">Browse Files</button>
            </div>
          </div>
        );
      
      case 'questions':
        return (
          <div className="content-section">
            <div className="section-header">
              <h1>❓ Question Bank</h1>
              <p>Access 10,000+ curated interview questions</p>
            </div>
            <div className="question-categories">
              <div className="category-card">
                <h3>Technical Questions</h3>
                <p>3,450 questions</p>
              </div>
              <div className="category-card">
                <h3>Behavioral Questions</h3>
                <p>2,890 questions</p>
              </div>
              <div className="category-card">
                <h3>Case Study Questions</h3>
                <p>1,670 questions</p>
              </div>
            </div>
          </div>
        );
      
      case 'achievements':
        return (
          <div className="content-section">
            <div className="section-header">
              <h1>🏆 Achievements</h1>
              <p>Track your progress and celebrate your wins</p>
            </div>
            <div className="achievements-grid">
              <div className="achievement-card unlocked">
                <div className="achievement-badge">🎯</div>
                <h3>First Interview</h3>
                <p>Completed your first mock interview</p>
              </div>
              <div className="achievement-card unlocked">
                <div className="achievement-badge">🔥</div>
                <h3>5 Day Streak</h3>
                <p>Practiced for 5 consecutive days</p>
              </div>
              <div className="achievement-card locked">
                <div className="achievement-badge">⭐</div>
                <h3>Perfect Score</h3>
                <p>Get 100/100 in an interview</p>
              </div>
            </div>
          </div>
        );
      
      case 'certificate':
        return (
          <div className="content-section">
            <div className="section-header">
              <h1>📜 Certificates</h1>
              <p>Earn and download your achievement certificates</p>
            </div>
            <div className="certificate-grid">
              <div className="certificate-card earned">
                <div className="certificate-icon">✓</div>
                <h3>Interview Mastery</h3>
                <p>Completed 10 mock interviews</p>
                <div className="certificate-date">Earned: Jan 15, 2026</div>
                <button className="download-cert-btn">Download Certificate</button>
              </div>
              <div className="certificate-card earned">
                <div className="certificate-icon">✓</div>
                <h3>Resume Expert</h3>
                <p>Analyzed 5 resumes successfully</p>
                <div className="certificate-date">Earned: Jan 20, 2026</div>
                <button className="download-cert-btn">Download Certificate</button>
              </div>
              <div className="certificate-card locked">
                <div className="certificate-icon">🔒</div>
                <h3>Question Master</h3>
                <p>Complete 100 questions from the bank</p>
                <div className="certificate-progress">Progress: 45/100</div>
              </div>
            </div>
          </div>
        );
      
      case 'referrals':
        return (
          <div className="content-section">
            <div className="section-header">
              <h1>🤝 Referrals</h1>
              <p>Invite friends and earn rewards</p>
            </div>
            <div className="referral-box">
              <h3>Your Referral Code</h3>
              <div className="referral-code">TRY-{user.uid?.substring(0, 8).toUpperCase()}</div>
              <button className="copy-btn">Copy Code</button>
              <div className="referral-stats">
                <div className="referral-stat">
                  <span className="stat-number">5</span>
                  <span className="stat-text">Referrals</span>
                </div>
                <div className="referral-stat">
                  <span className="stat-number">$50</span>
                  <span className="stat-text">Earned</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'subscription':
        return (
          <div className="content-section">
            <div className="section-header">
              <h1>💳 Subscription Plans</h1>
              <p>Choose the perfect plan for your interview preparation journey</p>
            </div>
            
            {!isStripeConfigured() && (
              <div className="stripe-setup-notice">
                <h3>⚠️ Stripe Setup Required</h3>
                <p>To enable payments, you need to configure Stripe. See <strong>STRIPE_SETUP.md</strong> for instructions.</p>
                <a href="https://dashboard.stripe.com/test/products" target="_blank" rel="noopener noreferrer" className="setup-link">
                  Open Stripe Dashboard →
                </a>
              </div>
            )}
            
            <div className="pricing-grid">
              <div className={`pricing-card ${isCurrentPlan(STRIPE_PRICES.STARTER) ? 'current-plan' : ''}`}>
                <div className="plan-name">Starter {isCurrentPlan(STRIPE_PRICES.STARTER) && <span className="current-badge">✓</span>}</div>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">9</span>
                  <span className="period">/month</span>
                </div>
                <ul className="plan-features">
                  <li>✓ 5 mock interviews/month</li>
                  <li>✓ Basic AI feedback</li>
                  <li>✓ Resume analysis (1/month)</li>
                  <li>✓ 100 practice questions</li>
                  <li>✓ Email support</li>
                </ul>
                <button 
                  className={`plan-btn ${isCurrentPlan(STRIPE_PRICES.STARTER) ? 'active' : ''}`}
                  onClick={() => handleSubscribe('Starter', STRIPE_PRICES.STARTER)}
                  disabled={loadingCheckout || isCurrentPlan(STRIPE_PRICES.STARTER)}
                >
                  {isCurrentPlan(STRIPE_PRICES.STARTER) ? 'Current Plan' : loadingCheckout ? 'Loading...' : 'Choose Plan'}
                </button>
              </div>

              <div className={`pricing-card popular ${isCurrentPlan(STRIPE_PRICES.PROFESSIONAL) ? 'current-plan' : ''}`}>
                <div className="popular-badge">Most Popular</div>
                <div className="plan-name">Professional {isCurrentPlan(STRIPE_PRICES.PROFESSIONAL) && <span className="current-badge">✓</span>}</div>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">25</span>
                  <span className="period">/month</span>
                </div>
                <ul className="plan-features">
                  <li>✓ Unlimited mock interviews</li>
                  <li>✓ Advanced AI feedback</li>
                  <li>✓ Unlimited resume analysis</li>
                  <li>✓ Full question bank access</li>
                  <li>✓ Priority support</li>
                  <li>✓ Interview history</li>
                </ul>
                <button 
                  className={`plan-btn ${isCurrentPlan(STRIPE_PRICES.PROFESSIONAL) ? 'active' : ''}`}
                  onClick={() => handleSubscribe('Professional', STRIPE_PRICES.PROFESSIONAL)}
                  disabled={loadingCheckout || isCurrentPlan(STRIPE_PRICES.PROFESSIONAL)}
                >
                  {isCurrentPlan(STRIPE_PRICES.PROFESSIONAL) ? 'Current Plan' : loadingCheckout ? 'Loading...' : 'Choose Plan'}
                </button>
              </div>

              <div className={`pricing-card ${isCurrentPlan(STRIPE_PRICES.PREMIUM) ? 'current-plan' : ''}`}>
                <div className="plan-name">Premium {isCurrentPlan(STRIPE_PRICES.PREMIUM) && <span className="current-badge">✓</span>}</div>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">50</span>
                  <span className="period">/month</span>
                </div>
                <ul className="plan-features">
                  <li>✓ Everything in Professional</li>
                  <li>✓ 1-on-1 coaching sessions</li>
                  <li>✓ Custom interview preparation</li>
                  <li>✓ Career path guidance</li>
                  <li>✓ LinkedIn profile review</li>
                  <li>✓ Priority job referrals</li>
                </ul>
                <button 
                  className={`plan-btn ${isCurrentPlan(STRIPE_PRICES.PREMIUM) ? 'active' : ''}`}
                  onClick={() => handleSubscribe('Premium', STRIPE_PRICES.PREMIUM)}
                  disabled={loadingCheckout || isCurrentPlan(STRIPE_PRICES.PREMIUM)}
                >
                  {isCurrentPlan(STRIPE_PRICES.PREMIUM) ? 'Current Plan' : loadingCheckout ? 'Loading...' : 'Choose Plan'}
                </button>
              </div>

              <div className="pricing-card enterprise">
                <div className="plan-name">Enterprise</div>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">99</span>
                  <span className="period">/month</span>
                </div>
                <ul className="plan-features">
                  <li>✓ Everything in Premium</li>
                  <li>✓ Dedicated account manager</li>
                  <li>✓ Company-specific training</li>
                  <li>✓ Team collaboration tools</li>
                  <li>✓ Custom integrations</li>
                  <li>✓ Quarterly success reviews</li>
                  <li>✓ Guaranteed job placement support</li>
                </ul>
                <button 
                  className="plan-btn" 
                  onClick={() => handleSubscribe('enterprise', STRIPE_PRICES.enterprise)}
                  disabled={loadingCheckout}
                >
                  {loadingCheckout ? 'Loading...' : 'Contact Sales'}
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'profile':
        return (
          <div className="content-section">
            <div className="section-header">
              <h1>👤 Profile</h1>
              <p>Manage your personal information</p>
            </div>
            <div className="profile-form">
              <div className="profile-avatar-section">
                <img src={user.photoURL || 'https://via.placeholder.com/120'} alt="Profile" className="profile-avatar-large" />
                <button className="change-avatar-btn">Change Photo</button>
              </div>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={user.displayName || ''} readOnly />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={user.email || ''} readOnly />
              </div>
              <div className="form-group">
                <label>Member Since</label>
                <input type="text" value={new Date(user.metadata?.creationTime).toLocaleDateString()} readOnly />
              </div>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div className="content-section">
            <div className="section-header">
              <h1>⚙️ Settings</h1>
              <p>Customize your experience</p>
            </div>
            <div className="settings-list">
              <div className="setting-item">
                <div className="setting-info">
                  <h3>Email Notifications</h3>
                  <p>Receive updates about your interviews</p>
                </div>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <h3>Dark Mode</h3>
                  <p>Switch between light and dark themes</p>
                </div>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        );
      
      case 'docs':
        return (
          <div className="content-section">
            <div className="section-header">
              <h1>📚 Documentation</h1>
              <p>Learn how to use TryInterview effectively</p>
            </div>
            <div className="docs-grid">
              <div className="doc-card">
                <div className="doc-icon">📖</div>
                <h3>Getting Started Guide</h3>
                <p>Learn the basics of TryInterview</p>
                <button className="doc-link" onClick={() => alert('Documentation coming soon!')}>Read More →</button>
              </div>
              <div className="doc-card">
                <div className="doc-icon">🎓</div>
                <h3>Interview Tips</h3>
                <p>Master your interview skills</p>
                <button className="doc-link" onClick={() => alert('Documentation coming soon!')}>Read More →</button>
              </div>
            </div>
          </div>
        );
      
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="modern-dashboard">
      {/* Left Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="TryInterview" />
            {!sidebarCollapsed && <span>TryInterview</span>}
          </div>
          <button className="collapse-btn" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={sidebarCollapsed ? "M9 18l6-6-6-6" : "M15 18l-6-6 6-6"} />
            </svg>
          </button>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            {mainNavItems.map(item => (
              <button
                key={item.id}
                className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => handleTabChange(item.id)}
                title={item.label}
              >
                <span className="nav-icon">{item.icon}</span>
                {!sidebarCollapsed && <span className="nav-label">{item.label}</span>}
              </button>
            ))}
          </div>

          <div className="nav-divider"></div>

          <div className="nav-section">
            {bottomNavItems.map(item => (
              <button
                key={item.id}
                className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => handleTabChange(item.id)}
                title={item.label}
              >
                <span className="nav-icon">{item.icon}</span>
                {!sidebarCollapsed && <span className="nav-label">{item.label}</span>}
              </button>
            ))}
            
            <button className="nav-item logout-item" onClick={onLogout} title="Logout">
              <span className="nav-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
              </span>
              {!sidebarCollapsed && <span className="nav-label">Logout</span>}
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <div className="content-header">
          <div className="header-left">
            <h2>Welcome back, {user.displayName?.split(' ')[0]}!</h2>
            <p>{user.email}</p>
          </div>
          <div className="header-right">
            <img src={user.photoURL || 'https://via.placeholder.com/40'} alt="User" className="user-avatar" />
          </div>
        </div>

        <div className="content-body">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
