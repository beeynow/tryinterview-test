import React, { useState } from 'react';
import './FeaturePages.css';

function MeetingSummarizer({ onBack }) {
  const [isRecording, setIsRecording] = useState(false);
  const [hasSummary, setHasSummary] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  const handleStartRecording = () => {
    setIsRecording(true);
    // Simulate recording timer
    const interval = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
    
    // Auto-stop after demo
    setTimeout(() => {
      clearInterval(interval);
      setIsRecording(false);
      setHasSummary(true);
    }, 5000);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setHasSummary(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const mockSummary = {
    duration: '25:43',
    participants: ['John Doe', 'Sarah Smith', 'Mike Johnson'],
    keyPoints: [
      'Discussed Q4 product roadmap priorities',
      'Decided to move forward with mobile app redesign',
      'Budget approved for hiring 2 new developers',
      'Next milestone: Complete wireframes by next Friday',
    ],
    actionItems: [
      { task: 'Create wireframes for mobile app', assignee: 'Sarah', deadline: 'Next Friday' },
      { task: 'Prepare budget breakdown document', assignee: 'John', deadline: '3 days' },
      { task: 'Schedule interview rounds', assignee: 'Mike', deadline: 'This week' },
    ],
    decisions: [
      'Approved mobile app redesign project',
      'Allocated $150K budget for Q4',
      'Chose React Native for mobile development',
    ],
    sentiment: 'Positive',
    topics: ['Product Roadmap', 'Mobile Development', 'Budget Planning', 'Hiring'],
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
          <div className="feature-hero-icon">🎙️</div>
          <h1 className="feature-title">AI Meeting Summarizer</h1>
          <p className="feature-subtitle">Never miss important details - Get AI-powered meeting summaries instantly</p>
        </div>

        <div className="meeting-layout">
          {/* Recording Section */}
          <div className="recording-section">
            <div className="recorder-card">
              <div className={`recording-visualizer ${isRecording ? 'active' : ''}`}>
                {isRecording ? (
                  <>
                    <div className="pulse-circle"></div>
                    <div className="recording-icon">🔴</div>
                  </>
                ) : (
                  <div className="mic-icon">🎙️</div>
                )}
              </div>
              
              {isRecording && (
                <div className="recording-time">{formatTime(recordingTime)}</div>
              )}

              {!isRecording && !hasSummary && (
                <>
                  <h3>Start Recording Your Meeting</h3>
                  <p>Click the button below to start recording and get instant AI summaries</p>
                  <button className="record-button" onClick={handleStartRecording}>
                    Start Recording
                  </button>
                </>
              )}

              {isRecording && (
                <>
                  <h3>Recording in Progress...</h3>
                  <p>AI is listening and analyzing in real-time</p>
                  <button className="stop-button" onClick={handleStopRecording}>
                    Stop Recording
                  </button>
                </>
              )}

              {hasSummary && (
                <>
                  <h3>✓ Meeting Recorded Successfully</h3>
                  <p>Your AI summary is ready below</p>
                  <button className="new-recording-btn" onClick={() => {
                    setHasSummary(false);
                    setRecordingTime(0);
                  }}>
                    Start New Recording
                  </button>
                </>
              )}
            </div>

            <div className="features-info">
              <h4>Smart Features:</h4>
              <ul>
                <li>✓ Real-time transcription</li>
                <li>✓ Speaker identification</li>
                <li>✓ Key points extraction</li>
                <li>✓ Action items tracking</li>
                <li>✓ Sentiment analysis</li>
                <li>✓ Multi-language support</li>
              </ul>
            </div>
          </div>

          {/* Summary Section */}
          {hasSummary && (
            <div className="summary-section">
              <div className="summary-header">
                <h2>Meeting Summary</h2>
                <div className="summary-meta">
                  <span>📅 {new Date().toLocaleDateString()}</span>
                  <span>⏱️ Duration: {mockSummary.duration}</span>
                  <span className="sentiment-badge positive">😊 {mockSummary.sentiment}</span>
                </div>
              </div>

              {/* Participants */}
              <div className="summary-card">
                <h3>👥 Participants ({mockSummary.participants.length})</h3>
                <div className="participants-list">
                  {mockSummary.participants.map((participant, index) => (
                    <div key={index} className="participant-chip">{participant}</div>
                  ))}
                </div>
              </div>

              {/* Key Points */}
              <div className="summary-card">
                <h3>📌 Key Discussion Points</h3>
                <ul className="key-points-list">
                  {mockSummary.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Action Items */}
              <div className="summary-card">
                <h3>✅ Action Items</h3>
                <div className="action-items-list">
                  {mockSummary.actionItems.map((item, index) => (
                    <div key={index} className="action-item">
                      <div className="action-checkbox">
                        <input type="checkbox" id={`action-${index}`} />
                        <label htmlFor={`action-${index}`}>{item.task}</label>
                      </div>
                      <div className="action-meta">
                        <span className="assignee">👤 {item.assignee}</span>
                        <span className="deadline">📅 {item.deadline}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decisions */}
              <div className="summary-card">
                <h3>🎯 Decisions Made</h3>
                <ul className="decisions-list">
                  {mockSummary.decisions.map((decision, index) => (
                    <li key={index}>{decision}</li>
                  ))}
                </ul>
              </div>

              {/* Topics */}
              <div className="summary-card">
                <h3>🏷️ Topics Discussed</h3>
                <div className="topics-list">
                  {mockSummary.topics.map((topic, index) => (
                    <span key={index} className="topic-tag">{topic}</span>
                  ))}
                </div>
              </div>

              {/* Export Options */}
              <div className="export-section">
                <h4>Export Summary:</h4>
                <div className="export-buttons">
                  <button className="export-btn">📄 Download PDF</button>
                  <button className="export-btn">📧 Email Summary</button>
                  <button className="export-btn">📋 Copy to Clipboard</button>
                  <button className="export-btn">💬 Share to Slack</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MeetingSummarizer;
