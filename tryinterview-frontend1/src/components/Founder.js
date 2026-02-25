import React from 'react';
import './Founder.css';

const Founder = ({ onBack }) => {
  return (
    <div className="founder-page">
      {/* Header */}
      <header className="founder-header">
        <div className="founder-header-content">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="TryInterview" className="founder-header-logo" />
          <button onClick={onBack} className="founder-back-btn">← Back</button>
        </div>
      </header>

      {/* Hero Section - Large Founder Introduction */}
      <section className="founder-hero-section">
        <div className="founder-hero-container">
          <div className="founder-hero-image-wrapper">
            <img src={`${process.env.PUBLIC_URL}/founder-1.jpg`} alt="Muhammad Yakubu Usman" className="founder-hero-image" />
            <div className="founder-badge">Founder & Visionary</div>
          </div>
          <div className="founder-hero-content">
            <h1 className="founder-name">Muhammad Yakubu Usman</h1>
            <p className="founder-tagline">Entrepreneur, Innovator & Career Transformation Advocate</p>
            <p className="founder-intro">
              Founder and CEO of <strong>Beeynow</strong> and creator of <strong>TryInterview</strong>, 
              Muhammad Yakubu Usman is on a mission to democratize career success through technology. 
              With a vision to empower millions of job seekers worldwide, he's building the future of 
              interview preparation and professional development.
            </p>
            <div className="founder-quick-facts">
              <div className="quick-fact">
                <span className="fact-icon">🚀</span>
                <span>Founded Beeynow & TryInterview</span>
              </div>
              <div className="quick-fact">
                <span className="fact-icon">👥</span>
                <span>Helped 50,000+ Job Seekers</span>
              </div>
              <div className="quick-fact">
                <span className="fact-icon">🌍</span>
                <span>Global Impact Maker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Life & Background */}
      <section className="founder-section founder-bg-dark">
        <div className="founder-container">
          <h2 className="founder-section-title">Early Life & Background</h2>
          <div className="founder-content-grid">
            <div className="founder-text-content">
              <p className="founder-paragraph">
                Born and raised with a passion for technology and helping others, Muhammad Yakubu Usman 
                showed early signs of entrepreneurial spirit. Growing up, he witnessed firsthand the 
                challenges many faced in securing their dream jobs, not due to lack of talent, but due 
                to inadequate preparation and resources.
              </p>
              <p className="founder-paragraph">
                This observation planted the seed for what would eventually become TryInterview - a 
                platform designed to level the playing field and give everyone access to world-class 
                interview preparation, regardless of their background or financial situation.
              </p>
              <div className="founder-highlight-box">
                <h3>Core Belief</h3>
                <p>"Every talented individual deserves a fair shot at their dream career. 
                The only thing standing between them and success should be their effort, not their access to resources."</p>
              </div>
            </div>
            <div className="founder-image-content">
              <img src={`${process.env.PUBLIC_URL}/founder-2.jpg`} alt="Muhammad at work" className="founder-content-image" />
              <p className="image-caption">Muhammad working on TryInterview's AI algorithms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Career Journey */}
      <section className="founder-section">
        <div className="founder-container">
          <h2 className="founder-section-title">Education & Career Journey</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Early Career</h3>
                <p className="timeline-period">2015 - 2018</p>
                <p>
                  Started career as a software engineer, working on various projects that would later 
                  inspire the technical foundation of TryInterview. Gained expertise in AI, machine 
                  learning, and user experience design.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>The Struggle</h3>
                <p className="timeline-period">2018 - 2019</p>
                <p>
                  Experienced 47 interview rejections while job hunting, despite being qualified. 
                  This painful journey revealed the gap in interview preparation resources and became 
                  the catalyst for TryInterview.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>The Breakthrough</h3>
                <p className="timeline-period">2020</p>
                <p>
                  Founded Beeynow with a vision to solve career preparation challenges. Developed 
                  the first prototype of TryInterview's AI-powered mock interview system.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>TryInterview Launch</h3>
                <p className="timeline-period">2021</p>
                <p>
                  Officially launched TryInterview to the public. Within months, helped thousands 
                  of job seekers ace their interviews and land dream jobs at top companies.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Scaling Impact</h3>
                <p className="timeline-period">2022 - Present</p>
                <p>
                  Expanded TryInterview with Resume Analyzer, Question Bank (10,000+ questions), 
                  and AI Meeting Summarizer. Reached 50,000+ active users with a 98% success rate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Recognition */}
      <section className="founder-section founder-bg-dark">
        <div className="founder-container">
          <h2 className="founder-section-title">Achievements & Impact</h2>
          
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h3>50,000+</h3>
              <p>Lives Transformed</p>
              <span className="achievement-desc">Users who successfully landed jobs using TryInterview</span>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">💼</div>
              <h3>500K+</h3>
              <p>Mock Interviews</p>
              <span className="achievement-desc">AI-powered practice sessions conducted</span>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">⭐</div>
              <h3>98%</h3>
              <p>Success Rate</p>
              <span className="achievement-desc">Users who got offers after using the platform</span>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">🌐</div>
              <h3>Global</h3>
              <p>Reach</p>
              <span className="achievement-desc">Serving users across 50+ countries</span>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">🤖</div>
              <h3>AI Pioneer</h3>
              <p>Innovation</p>
              <span className="achievement-desc">Leading AI-powered interview preparation</span>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">📚</div>
              <h3>10,000+</h3>
              <p>Question Bank</p>
              <span className="achievement-desc">Comprehensive interview questions curated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Philosophy */}
      <section className="founder-section">
        <div className="founder-container">
          <h2 className="founder-section-title">Vision & Philosophy</h2>
          
          <div className="philosophy-content">
            <div className="philosophy-main">
              <h3>The Vision</h3>
              <p className="large-text">
                "To create a world where career success is determined by talent and effort, not by 
                access to expensive coaching or insider connections."
              </p>
            </div>

            <div className="philosophy-principles">
              <h3>Core Principles</h3>
              <div className="principles-grid">
                <div className="principle-item">
                  <div className="principle-number">01</div>
                  <h4>Accessibility First</h4>
                  <p>World-class interview preparation should be available to everyone, everywhere, anytime.</p>
                </div>

                <div className="principle-item">
                  <div className="principle-number">02</div>
                  <h4>Technology for Good</h4>
                  <p>Leverage AI and technology to solve real human problems and create meaningful impact.</p>
                </div>

                <div className="principle-item">
                  <div className="principle-number">03</div>
                  <h4>Continuous Innovation</h4>
                  <p>Never stop improving. Always stay ahead of industry trends and user needs.</p>
                </div>

                <div className="principle-item">
                  <div className="principle-number">04</div>
                  <h4>User Success First</h4>
                  <p>Measure success not by revenue, but by the number of lives transformed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Insights */}
      <section className="founder-section founder-bg-dark">
        <div className="founder-container">
          <h2 className="founder-section-title">Personal Insights</h2>
          
          <div className="insights-grid">
            <div className="insight-card">
              <h3>On Failure</h3>
              <p>"My 47 interview rejections weren't failures—they were lessons. Each 'no' taught me 
              something that would later help thousands of others get to 'yes'."</p>
            </div>

            <div className="insight-card">
              <h3>On Innovation</h3>
              <p>"The best solutions come from experiencing the problem firsthand. I built TryInterview 
              because I needed it myself."</p>
            </div>

            <div className="insight-card">
              <h3>On Impact</h3>
              <p>"Success isn't about building a billion-dollar company. It's about solving a real problem 
              for real people and changing their lives."</p>
            </div>

            <div className="insight-card">
              <h3>On the Future</h3>
              <p>"We're just getting started. My goal is to help 10 million people land their dream jobs 
              in the next 5 years."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="founder-section">
        <div className="founder-container">
          <h2 className="founder-section-title">What Muhammad is Building Now</h2>
          
          <div className="current-focus">
            <div className="focus-item">
              <h3>🚀 TryInterview Platform</h3>
              <p>
                Continuously enhancing the AI algorithms to provide even more realistic and helpful 
                interview simulations. Recent additions include the Resume Analyzer and AI Meeting Summarizer.
              </p>
            </div>

            <div className="focus-item">
              <h3>🌍 Global Expansion</h3>
              <p>
                Expanding TryInterview's reach to help job seekers in emerging markets where quality 
                interview preparation is scarce but talent is abundant.
              </p>
            </div>

            <div className="focus-item">
              <h3>🤝 Partnerships</h3>
              <p>
                Building partnerships with universities and corporations to integrate TryInterview 
                into their career development programs.
              </p>
            </div>

            <div className="focus-item">
              <h3>📚 Knowledge Sharing</h3>
              <p>
                Sharing insights on entrepreneurship, career development, and using technology for 
                social good through speaking engagements and mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="founder-footer">
        <div className="founder-container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="TryInterview" className="footer-logo" />
              <p>Founded and built by Muhammad Yakubu Usman</p>
            </div>
            <div className="footer-note">
              <p>© 2026 TryInterview by Beeynow. Transforming careers through technology.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Founder;
