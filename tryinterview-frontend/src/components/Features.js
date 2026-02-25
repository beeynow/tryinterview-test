import React from 'react';
import './Pages.css';

function Features({ onBack }) {
  return (
    <div className="page-container">
      <button onClick={onBack} className="back-icon-button" aria-label="Back to Home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      <div className="page-content">
        <div className="page-hero">
          <h1 className="page-title">Features</h1>
          <p className="page-subtitle">Everything you need to ace your interviews</p>
        </div>

        <div className="features-grid">
          <div className="feature-card featured" onClick={() => window.location.href = '#question-bank'}>
            <div className="feature-icon">📚</div>
            <h3>Question Bank</h3>
            <p>Access 10,000+ interview questions across all industries and roles with expert answers and tips.</p>
            <button className="feature-btn">Explore Questions →</button>
          </div>

          <div className="feature-card featured" onClick={() => window.location.href = '#resume-analyzer'}>
            <div className="feature-icon">📄</div>
            <h3>Resume Analyzer</h3>
            <p>AI-powered resume analysis with ATS compatibility check, keyword optimization, and improvement suggestions.</p>
            <button className="feature-btn">Analyze Resume →</button>
          </div>

          <div className="feature-card featured" onClick={() => window.location.href = '#meeting-summarizer'}>
            <div className="feature-icon">🤖</div>
            <h3>AI Meeting Summarizer</h3>
            <p>Record, transcribe, and get AI-generated summaries of your practice interviews with action items.</p>
            <button className="feature-btn">Try Summarizer →</button>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>AI-Powered Mock Interviews</h3>
            <p>Practice with our advanced AI interviewer that simulates real interview scenarios with natural conversation flow.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Feedback</h3>
            <p>Get immediate, detailed feedback on your answers, body language, and communication skills after each session.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Performance Analytics</h3>
            <p>Track your progress over time with detailed analytics and insights on your strengths and areas for improvement.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎥</div>
            <h3>Video Recording</h3>
            <p>Record your mock interviews to review later and see yourself from the interviewer's perspective.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>24/7 Availability</h3>
            <p>Practice anytime, anywhere. Our platform is always available whenever you need to prepare.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Private</h3>
            <p>Your practice sessions and data are completely private and secure with enterprise-grade encryption.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
