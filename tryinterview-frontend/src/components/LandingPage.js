import React, { useEffect } from 'react';
import './LandingPage.css';
import { CompanyLogos } from './CompanyLogos';

const LandingPage = ({ onGetStarted }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [showVideoModal, setShowVideoModal] = React.useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && hash !== 'home') {
        const newPage = hash;
        if (['features', 'terms', 'about', 'founder', 'privacy', 'question-bank', 'resume-analyzer', 'meeting-summarizer'].includes(newPage)) {
          window.location.href = `#${newPage}`;
        }
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const openVideoModal = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  return (
    <div className="landing-page">
      {/* Video Modal */}
      {showVideoModal && (
        <div className="video-modal-overlay" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideoModal} aria-label="Close video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="video-wrapper">
              <video 
                controls 
                autoPlay
                className="demo-video"
                src={`${process.env.PUBLIC_URL}/demo.mp4`}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo-section">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="TryInterview Logo" className="logo-img" />
            <span className="brand-name">TryInterview</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-menu">
              <li><button onClick={() => window.location.href = '#features'}>Features</button></li>
              <li><button onClick={() => window.location.href = '#terms'}>Terms</button></li>
              <li><button onClick={() => window.location.href = '#about'}>About</button></li>
              <li><button onClick={() => window.location.href = '#privacy'}>Privacy</button></li>
            </ul>
          </nav>

          <button className="cta-button desktop-cta" onClick={onGetStarted}>
            Start Free Trial
          </button>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-button" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            <button onClick={() => { window.location.href = '#features'; closeMobileMenu(); }}>Features</button>
            <button onClick={() => { window.location.href = '#terms'; closeMobileMenu(); }}>Terms</button>
            <button onClick={() => { window.location.href = '#about'; closeMobileMenu(); }}>About</button>
            <button onClick={() => { window.location.href = '#privacy'; closeMobileMenu(); }}>Privacy</button>
            <button className="mobile-cta" onClick={() => { onGetStarted(); closeMobileMenu(); }}>
              Start Free Trial
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-content">
          <div className="hero-text-container">
            <h1 className="hero-title">
              Master Your Interview Skills with <span className="gradient-text">AI-Powered Practice</span>
            </h1>
            <p className="hero-description">
              Transform your interview preparation with TryInterview's intelligent mock interviews, 
              instant feedback, and comprehensive analytics. Join 50,000+ successful candidates.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn" onClick={onGetStarted}>Get Started Free</button>
              <button className="secondary-btn" onClick={openVideoModal}>Watch Demo</button>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">✓</span>
              <span>50,000+ Users Trust TryInterview</span>
            </div>
          </div>
          
          <div className="hero-image-container">
            <img 
              src={`${process.env.PUBLIC_URL}/practice-interview-online.png`}
              alt="Practice interviews online with TryInterview" 
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="content-section" id="problem">
        <div className="section-wrapper">
          <div className="text-container">
            <h2 className="section-title">Feeling Confused About Interview Prep?</h2>
            <p className="section-description">
              Finding the perfect mock interview platform shouldn't be complicated. Many candidates struggle 
              with where to start, what to practice, and how to improve effectively.
            </p>
            <ul className="feature-list">
              <li>❌ Generic interview questions that don't match your industry</li>
              <li>❌ No personalized feedback on your responses</li>
              <li>❌ Lack of real-time practice opportunities</li>
              <li>❌ Expensive coaching that breaks the bank</li>
            </ul>
          </div>
          
          <div className="image-container">
            <img 
              src={`${process.env.PUBLIC_URL}/confuse-to-get-perfect-mock-interview-platform-.png`}
              alt="Confused about finding the perfect interview platform" 
              className="section-image"
            />
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="content-section" id="pain-point">
        <div className="section-wrapper reverse">
          <div className="image-container">
            <img 
              src={`${process.env.PUBLIC_URL}/failed-Interview.png`}
              alt="Failed interview experience" 
              className="section-image"
            />
          </div>
          
          <div className="text-container">
            <h2 className="section-title">Don't Let Failed Interviews Define You</h2>
            <p className="section-description">
              We understand the frustration of interview rejections. Every "no" feels personal, 
              but it's often just a matter of better preparation and practice.
            </p>
            <ul className="feature-list">
              <li>💔 Interview anxiety affecting your performance</li>
              <li>💔 Struggling to articulate your experience</li>
              <li>💔 Missing opportunities due to lack of preparation</li>
              <li>💔 Feeling unprepared for technical or behavioral questions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="content-section" id="solution">
        <div className="section-wrapper">
          <div className="text-container">
            <h2 className="section-title">Build Unshakeable Interview Confidence</h2>
            <p className="section-description">
              TryInterview transforms nervous candidates into confident professionals. 
              Our AI-powered platform provides the practice and feedback you need to excel.
            </p>
            <ul className="feature-list">
              <li>✅ Industry-specific interview simulations</li>
              <li>✅ Real-time AI feedback on your answers</li>
              <li>✅ Personalized improvement recommendations</li>
              <li>✅ Track your progress with detailed analytics</li>
            </ul>
          </div>
          
          <div className="image-container">
            <img 
              src={`${process.env.PUBLIC_URL}/confidence-with-interview.png`}
              alt="Build confidence with interview practice" 
              className="section-image"
            />
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="content-section" id="practice">
        <div className="section-wrapper reverse">
          <div className="image-container">
            <img 
              src={`${process.env.PUBLIC_URL}/practice-interview-online.png`}
              alt="Practice interviews online anytime" 
              className="section-image"
            />
          </div>
          
          <div className="text-container">
            <h2 className="section-title">Practice Anytime, Anywhere</h2>
            <p className="section-description">
              No scheduling headaches. No time zone conflicts. Practice interviews 24/7 
              at your own pace with our AI-powered platform.
            </p>
            <ul className="feature-list">
              <li>🎯 Unlimited practice sessions</li>
              <li>🎯 Question bank with 10,000+ questions</li>
              <li>🎯 Resume analysis and optimization</li>
              <li>🎯 AI meeting summarizer for post-interview review</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="content-section" id="questions">
        <div className="section-wrapper">
          <div className="text-container">
            <h2 className="section-title">Master Common Interview Questions</h2>
            <p className="section-description">
              Access our comprehensive database of interview questions used by top companies. 
              Practice with real questions from Google, Amazon, Microsoft, and more.
            </p>
            <ul className="feature-list">
              <li>📚 Technical interview questions</li>
              <li>📚 Behavioral interview scenarios</li>
              <li>📚 Case study questions</li>
              <li>📚 System design challenges</li>
            </ul>
          </div>
          
          <div className="image-container">
            <img 
              src={`${process.env.PUBLIC_URL}/common-interview-questions.png`}
              alt="Common interview questions database" 
              className="section-image"
            />
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section className="content-section" id="success">
        <div className="section-wrapper reverse">
          <div className="image-container">
            <img 
              src={`${process.env.PUBLIC_URL}/sit-for-interview-after-using-tryinterview.png`}
              alt="Ready for interview after using TryInterview" 
              className="section-image"
            />
          </div>
          
          <div className="text-container">
            <h2 className="section-title">Walk Into Interviews With Confidence</h2>
            <p className="section-description">
              After using TryInterview, you'll sit for interviews feeling prepared, confident, 
              and ready to showcase your best self. Join thousands who've transformed their careers.
            </p>
            <ul className="feature-list">
              <li>🌟 98% of users report increased confidence</li>
              <li>🌟 Average 3x improvement in interview performance</li>
              <li>🌟 50,000+ successful job placements</li>
              <li>🌟 Trusted by candidates at Fortune 500 companies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="content-section" id="results">
        <div className="section-wrapper">
          <div className="text-container">
            <h2 className="section-title">Join 50,000+ Successful Candidates</h2>
            <p className="section-description">
              Don't just take our word for it. See the results our users achieve when they 
              commit to mastering their interview skills with TryInterview.
            </p>
            <ul className="feature-list">
              <li>🎊 Land your dream job faster</li>
              <li>🎊 Get higher salary offers</li>
              <li>🎊 Stand out from other candidates</li>
              <li>🎊 Build lifelong interview skills</li>
            </ul>
          </div>
          
          <div className="image-container">
            <img 
              src={`${process.env.PUBLIC_URL}/successed-interview-with-tryinterview.site.png`}
              alt="Success with TryInterview platform" 
              className="section-image"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Ace Your Next Interview?</h2>
          <p className="cta-description">
            Join TryInterview today and start practicing with AI-powered mock interviews. 
            Your dream job is just one successful interview away.
          </p>
          <button className="cta-btn" onClick={onGetStarted}>
            Start Your Free Trial
          </button>
          <p className="cta-note">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="trusted-companies">
        <div className="trusted-container">
          <p className="trusted-subtitle">Trusted by professionals at leading companies worldwide</p>
          
          <div className="logos-scroll-wrapper">
            <div className="logos-scroll">
              <CompanyLogos />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand-section">
            <div className="footer-logo">
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="TryInterview" className="footer-logo-img" />
              <span className="footer-brand-name">TryInterview</span>
            </div>
            <p className="footer-tagline">AI-Powered Interview Preparation Platform</p>
            <p className="footer-description">
              Master your interview skills with our intelligent mock interviews, 
              instant feedback, and comprehensive analytics. Join thousands of successful candidates.
            </p>
            <div className="footer-social">
              <a href="https://twitter.com/tryinterview" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/tryinterview" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://github.com/beeyoow" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#question-bank">Question Bank</a></li>
                <li><a href="#resume-analyzer">Resume Analyzer</a></li>
                <li><a href="#meeting-summarizer">Meeting Summarizer</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 TryInterview by Beeynow. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy</a>
            <span>•</span>
            <a href="#terms">Terms</a>
            <span>•</span>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
