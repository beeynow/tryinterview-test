import React from 'react';
import './Pages.css';

const Help = () => {

  const helpCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      articles: [
        'How to create an account',
        'Setting up your profile',
        'Taking your first mock interview',
        'Understanding your dashboard'
      ]
    },
    {
      title: 'Mock Interviews',
      icon: '🎤',
      articles: [
        'How to start a mock interview',
        'Interview question types',
        'Recording and reviewing interviews',
        'Using AI feedback effectively'
      ]
    },
    {
      title: 'Features & Tools',
      icon: '🛠️',
      articles: [
        'Question Bank overview',
        'Resume Analyzer guide',
        'Meeting Summarizer tutorial',
        'Analytics and progress tracking'
      ]
    },
    {
      title: 'Account & Billing',
      icon: '💳',
      articles: [
        'Subscription plans explained',
        'How to upgrade your account',
        'Billing and payment options',
        'Cancellation and refunds'
      ]
    },
    {
      title: 'Technical Support',
      icon: '⚙️',
      articles: [
        'Browser compatibility',
        'Audio/video troubleshooting',
        'Connection issues',
        'Clearing cache and cookies'
      ]
    },
    {
      title: 'Privacy & Security',
      icon: '🔒',
      articles: [
        'Data privacy policy',
        'How we protect your data',
        'Account security tips',
        'Managing your privacy settings'
      ]
    }
  ];

  const popularArticles = [
    { title: 'How to ace your first mock interview with TryInterview', views: '15.2K', time: '8 min read' },
    { title: 'Mastering the STAR method for behavioral questions', views: '12.8K', time: '10 min read' },
    { title: 'Complete guide to technical interview preparation', views: '11.4K', time: '15 min read' },
    { title: 'Troubleshooting common video and audio issues', views: '9.6K', time: '5 min read' },
    { title: 'Understanding and leveraging AI-powered feedback', views: '8.9K', time: '7 min read' }
  ];

  return (
    <div className="page-container">
      <button onClick={() => window.location.hash = ''} className="back-icon-button" aria-label="Back to Home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      <div className="page-content">
        <section className="popular-section">
          <h2>🔥 Most Popular Articles</h2>
          <p className="section-subtitle">Our most-read guides to help you succeed</p>
          <div className="popular-articles">
            {popularArticles.map((article, index) => (
              <div key={index} className="popular-article">
                <div className="article-number">{index + 1}</div>
                <div className="article-info">
                  <h3>{article.title}</h3>
                  <div className="article-meta">
                    <span className="views">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      {article.views} views
                    </span>
                    <span className="read-time">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {article.time}
                    </span>
                  </div>
                </div>
                <button className="read-btn">
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="categories-section">
          <h2>Browse by Category</h2>
          <div className="help-categories">
            {helpCategories.map((category, index) => (
              <div key={index} className="help-category">
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3>{category.title}</h3>
                </div>
                <ul className="article-list">
                  {category.articles.map((article, idx) => (
                    <li key={idx}>
                      <a href="#article">{article}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-support">
          <h2>Can't Find What You're Looking For?</h2>
          <p>Our dedicated support team is available 24/7 to assist you with any questions or concerns.</p>
          <div className="support-actions">
            <button className="action-btn primary" onClick={() => window.location.hash = 'contact'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Contact Support Team
            </button>
            <button className="action-btn secondary" onClick={() => window.location.hash = 'faq'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              Browse FAQs
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Help;
