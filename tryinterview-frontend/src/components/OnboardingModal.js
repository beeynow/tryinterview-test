import React, { useState } from 'react';
import './OnboardingModal.css';

const OnboardingModal = ({ user, onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: user?.displayName || '',
    profession: '',
    experience: '',
    skills: '',
    interviewType: '',
    goals: '',
    availability: '',
    notifications: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(formData);
  };

  const isStepValid = () => {
    switch(step) {
      case 1:
        return formData.fullName && formData.profession && formData.experience;
      case 2:
        return formData.skills && formData.interviewType;
      case 3:
        return formData.availability;
      default:
        return false;
    }
  };

  return (
    <div className="onboarding-overlay">
      <div className="onboarding-modal">
        <div className="onboarding-header">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="TryInterview" className="onboarding-logo" />
          <h2>Welcome to TryInterview! 🎉</h2>
          <p>Let's personalize your interview prep experience</p>
        </div>

        <div className="progress-bar">
          <div className="progress-steps">
            {[1, 2, 3].map(num => (
              <div key={num} className={`progress-step ${step >= num ? 'active' : ''} ${step > num ? 'completed' : ''}`}>
                <div className="step-circle">{step > num ? '✓' : num}</div>
                <div className="step-label">
                  {num === 1 ? 'Profile' : num === 2 ? 'Goals' : 'Preferences'}
                </div>
              </div>
            ))}
          </div>
          <div className="progress-line">
            <div className="progress-fill" style={{width: `${((step - 1) / 2) * 100}%`}}></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="onboarding-form">
          {step === 1 && (
            <div className="form-step">
              <h3>📝 Tell us about yourself</h3>
              
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Current Role *</label>
                  <select name="profession" value={formData.profession} onChange={handleInputChange} required>
                    <option value="">Select your role</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Designer">Designer</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Student">Student</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Experience *</label>
                  <select name="experience" value={formData.experience} onChange={handleInputChange} required>
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-8">5-8 years</option>
                    <option value="8+">8+ years</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form-step">
              <h3>🎯 What are your goals?</h3>
              
              <div className="form-group">
                <label>Primary Skills *</label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder="e.g., JavaScript, React, Python"
                  required
                />
                <span className="hint">Separate multiple skills with commas</span>
              </div>

              <div className="form-group">
                <label>Interview Type *</label>
                <select name="interviewType" value={formData.interviewType} onChange={handleInputChange} required>
                  <option value="">Select type</option>
                  <option value="Technical">Technical</option>
                  <option value="Behavioral">Behavioral</option>
                  <option value="Case Study">Case Study</option>
                  <option value="System Design">System Design</option>
                  <option value="All Types">All Types</option>
                </select>
              </div>

              <div className="form-group">
                <label>Your Goals</label>
                <textarea
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  placeholder="What do you want to achieve? (e.g., Land a FAANG job, Improve confidence)"
                  rows="3"
                ></textarea>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="form-step">
              <h3>⚙️ Final setup</h3>
              
              <div className="form-group">
                <label>Practice Availability *</label>
                <select name="availability" value={formData.availability} onChange={handleInputChange} required>
                  <option value="">How often can you practice?</option>
                  <option value="Daily">Daily</option>
                  <option value="3-4 times/week">3-4 times a week</option>
                  <option value="1-2 times/week">1-2 times a week</option>
                  <option value="Weekends">Weekends only</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="notifications"
                    checked={formData.notifications}
                    onChange={handleInputChange}
                  />
                  <span>Send me practice reminders and tips</span>
                </label>
              </div>

              <div className="summary-card">
                <h4>✨ Your Profile Summary</h4>
                <div className="summary-items">
                  <div className="summary-item">
                    <span className="summary-label">Name:</span>
                    <span className="summary-value">{formData.fullName}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Role:</span>
                    <span className="summary-value">{formData.profession}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Skills:</span>
                    <span className="summary-value">{formData.skills || 'Not specified'}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Focus:</span>
                    <span className="summary-value">{formData.interviewType}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="form-actions">
            {step > 1 && (
              <button type="button" onClick={handleBack} className="btn btn-secondary">
                ← Back
              </button>
            )}
            {step < 3 ? (
              <button 
                type="button" 
                onClick={handleNext} 
                className="btn btn-primary"
                disabled={!isStepValid()}
              >
                Next →
              </button>
            ) : (
              <button type="submit" className="btn btn-success">
                🚀 Start Your Journey
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnboardingModal;
