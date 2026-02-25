import React, { useState } from 'react';
import './FeaturePages.css';

function ResumeAnalyzer({ onBack }) {
  const [file, setFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      // Simulate analysis
      setAnalyzing(true);
      setTimeout(() => {
        setAnalyzing(false);
        setResults({
          score: 78,
          strengths: [
            'Clear and concise professional summary',
            'Quantifiable achievements with metrics',
            'Relevant technical skills highlighted',
            'Well-structured work experience section',
          ],
          improvements: [
            'Add more action verbs to bullet points',
            'Include certifications section',
            'Optimize keywords for ATS systems',
            'Add links to portfolio/projects',
          ],
          atsScore: 82,
          keywords: ['React', 'JavaScript', 'Team Leadership', 'Agile', 'Problem Solving'],
        });
      }, 2000);
    }
  };

  return (
    <div className="feature-page-container">
      <header className="feature-page-header">
        <div className="feature-header-content">
          <button className="back-button" onClick={onBack}>← Back to Home</button>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="TryInterview Logo" className="page-logo" />
          <span className="page-brand">TryInterview</span>
        </div>
      </header>

      <div className="feature-page-content">
        <div className="feature-hero">
          <div className="feature-hero-icon">📄</div>
          <h1 className="feature-title">AI Resume Analyzer</h1>
          <p className="feature-subtitle">Get instant AI-powered feedback to improve your resume</p>
        </div>

        <div className="analyzer-layout">
          {/* Upload Section */}
          <div className="upload-section">
            <div className="upload-card">
              <div className="upload-icon">📤</div>
              <h3>Upload Your Resume</h3>
              <p>Support for PDF, DOC, DOCX formats (Max 5MB)</p>
              <label className="upload-button">
                Choose File
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                />
              </label>
              {file && (
                <div className="file-info">
                  <span className="file-name">📎 {file.name}</span>
                  <span className="file-size">({(file.size / 1024).toFixed(2)} KB)</span>
                </div>
              )}
            </div>

            <div className="features-list">
              <h4>What We Analyze:</h4>
              <ul>
                <li>✓ ATS (Applicant Tracking System) compatibility</li>
                <li>✓ Keyword optimization</li>
                <li>✓ Format and structure</li>
                <li>✓ Content quality and clarity</li>
                <li>✓ Grammar and spelling</li>
                <li>✓ Achievement quantification</li>
              </ul>
            </div>
          </div>

          {/* Results Section */}
          {analyzing && (
            <div className="analyzing-state">
              <div className="spinner"></div>
              <p>Analyzing your resume...</p>
            </div>
          )}

          {results && !analyzing && (
            <div className="results-section">
              {/* Score Overview */}
              <div className="score-overview">
                <div className="score-circle">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="#3b82f6" 
                      strokeWidth="8"
                      strokeDasharray={`${results.score * 2.827} 282.7`}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="score-text">
                    <span className="score-number">{results.score}</span>
                    <span className="score-label">/100</span>
                  </div>
                </div>
                <div className="score-details">
                  <h3>Overall Score</h3>
                  <p>Your resume is performing well! Here's what we found:</p>
                  <div className="ats-score">
                    <span>ATS Compatibility:</span>
                    <strong>{results.atsScore}%</strong>
                  </div>
                </div>
              </div>

              {/* Strengths */}
              <div className="analysis-card strengths-card">
                <h3>💪 Strengths</h3>
                <ul>
                  {results.strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>

              {/* Improvements */}
              <div className="analysis-card improvements-card">
                <h3>🎯 Areas for Improvement</h3>
                <ul>
                  {results.improvements.map((improvement, index) => (
                    <li key={index}>{improvement}</li>
                  ))}
                </ul>
              </div>

              {/* Keywords */}
              <div className="analysis-card keywords-card">
                <h3>🔑 Detected Keywords</h3>
                <div className="keywords-list">
                  {results.keywords.map((keyword, index) => (
                    <span key={index} className="keyword-tag">{keyword}</span>
                  ))}
                </div>
                <p className="keyword-tip">
                  <strong>Tip:</strong> Make sure your resume includes keywords relevant to the job you're applying for.
                </p>
              </div>

              {/* Actions */}
              <div className="actions-section">
                <button className="action-btn primary">Download Detailed Report</button>
                <button className="action-btn">Analyze Another Resume</button>
                <button className="action-btn">Get Resume Templates</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResumeAnalyzer;
