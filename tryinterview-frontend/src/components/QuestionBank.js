import React, { useState } from 'react';
import './FeaturePages.css';

function QuestionBank({ onBack }) {
  const [selectedCategory, setSelectedCategory] = useState('behavioral');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'behavioral', name: 'Behavioral', count: 250 },
    { id: 'technical', name: 'Technical', count: 300 },
    { id: 'leadership', name: 'Leadership', count: 150 },
    { id: 'situational', name: 'Situational', count: 200 },
    { id: 'industry', name: 'Industry-Specific', count: 180 },
  ];

  const questions = {
    behavioral: [
      { q: "Tell me about a time when you faced a challenging situation at work.", difficulty: "Medium" },
      { q: "Describe a situation where you had to work with a difficult team member.", difficulty: "Medium" },
      { q: "Give me an example of a goal you set and how you achieved it.", difficulty: "Easy" },
      { q: "Tell me about a time when you failed. What did you learn?", difficulty: "Hard" },
      { q: "Describe a situation where you showed leadership skills.", difficulty: "Medium" },
    ],
    technical: [
      { q: "Explain the difference between REST and GraphQL APIs.", difficulty: "Medium" },
      { q: "What is the time complexity of binary search?", difficulty: "Easy" },
      { q: "How would you design a scalable system for millions of users?", difficulty: "Hard" },
      { q: "Explain the concept of microservices architecture.", difficulty: "Medium" },
      { q: "What are the SOLID principles in software development?", difficulty: "Medium" },
    ],
    leadership: [
      { q: "How do you motivate a team during challenging times?", difficulty: "Hard" },
      { q: "Describe your leadership style.", difficulty: "Medium" },
      { q: "How do you handle conflicts within your team?", difficulty: "Medium" },
      { q: "Tell me about a time when you had to make a difficult decision.", difficulty: "Hard" },
      { q: "How do you prioritize tasks for your team?", difficulty: "Easy" },
    ],
    situational: [
      { q: "What would you do if you disagreed with your manager's decision?", difficulty: "Hard" },
      { q: "How would you handle a tight deadline with limited resources?", difficulty: "Medium" },
      { q: "What would you do if a project was failing?", difficulty: "Hard" },
      { q: "How would you approach learning a new technology quickly?", difficulty: "Medium" },
      { q: "What would you do if you made a mistake that affected the team?", difficulty: "Medium" },
    ],
    industry: [
      { q: "What trends are shaping the tech industry in 2024?", difficulty: "Medium" },
      { q: "How do you stay updated with industry developments?", difficulty: "Easy" },
      { q: "What makes a great product manager?", difficulty: "Medium" },
      { q: "How would you approach digital transformation in a traditional company?", difficulty: "Hard" },
      { q: "What's your understanding of cloud computing?", difficulty: "Easy" },
    ],
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return '#10b981';
      case 'Medium': return '#f59e0b';
      case 'Hard': return '#ef4444';
      default: return '#6b7280';
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
          <div className="feature-hero-icon">📚</div>
          <h1 className="feature-title">Question Bank</h1>
          <p className="feature-subtitle">Access 1000+ curated interview questions across all categories</p>
        </div>

        <div className="question-bank-layout">
          {/* Search Bar */}
          <div className="search-section">
            <input
              type="text"
              className="search-input"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="categories-grid">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-card ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <h3>{category.name}</h3>
                <span className="question-count">{category.count} questions</span>
              </button>
            ))}
          </div>

          {/* Questions List */}
          <div className="questions-section">
            <h2 className="section-heading">
              {categories.find(c => c.id === selectedCategory)?.name} Questions
            </h2>
            <div className="questions-list">
              {questions[selectedCategory]?.map((item, index) => (
                <div key={index} className="question-item">
                  <div className="question-header">
                    <span className="question-number">Q{index + 1}</span>
                    <span 
                      className="difficulty-badge"
                      style={{ backgroundColor: getDifficultyColor(item.difficulty) }}
                    >
                      {item.difficulty}
                    </span>
                  </div>
                  <p className="question-text">{item.q}</p>
                  <div className="question-actions">
                    <button className="action-btn practice-btn">Practice Now</button>
                    <button className="action-btn">View Sample Answer</button>
                    <button className="action-btn">Add to Favorites</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Panel */}
          <div className="stats-panel">
            <h3>Your Progress</h3>
            <div className="stat-item">
              <span className="stat-label">Questions Practiced</span>
              <span className="stat-value">47</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Success Rate</span>
              <span className="stat-value">85%</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Favorites</span>
              <span className="stat-value">23</span>
            </div>
            <button className="full-width-btn">View All Statistics</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionBank;
