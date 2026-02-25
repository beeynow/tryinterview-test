import React, { useState } from 'react';
import './Pages.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What is TryInterview?',
          a: 'TryInterview is an AI-powered interview preparation platform that helps you practice mock interviews, get instant feedback, and improve your interview skills. We offer realistic interview simulations, comprehensive question banks, and detailed analytics to help you land your dream job.'
        },
        {
          q: 'How does TryInterview work?',
          a: 'Simply sign up, choose your interview type (technical, behavioral, or case study), and start practicing. Our AI interviewer asks relevant questions, records your responses, and provides instant feedback on your performance, communication skills, and areas for improvement.'
        },
        {
          q: 'Is TryInterview free?',
          a: 'We offer a 14-day free trial with no credit card required. After the trial, you can choose from our flexible subscription plans starting at $19/month. All plans include unlimited practice interviews and full access to our features.'
        }
      ]
    },
    {
      category: 'Features',
      questions: [
        {
          q: 'What types of interviews can I practice?',
          a: 'We support technical interviews (coding, system design), behavioral interviews (STAR method), case study interviews, and industry-specific interviews for roles in tech, finance, consulting, healthcare, and more.'
        },
        {
          q: 'How accurate is the AI feedback?',
          a: 'Our AI is trained on thousands of successful interviews and continuously improves. It analyzes your responses for content quality, communication clarity, body language (if video enabled), and provides actionable feedback with 95%+ accuracy.'
        },
        {
          q: 'Can I use TryInterview on mobile devices?',
          a: 'Yes! TryInterview is fully responsive and works on all devices including smartphones, tablets, laptops, and desktops. We recommend using a desktop for the best video interview experience.'
        },
        {
          q: 'What is the Question Bank?',
          a: 'Our Question Bank contains 10,000+ curated interview questions from top companies like Google, Amazon, Microsoft, and more. Questions are categorized by role, difficulty, and company, helping you prepare strategically.'
        }
      ]
    },
    {
      category: 'Account & Billing',
      questions: [
        {
          q: 'How do I cancel my subscription?',
          a: 'You can cancel your subscription anytime from your account settings. Click on "Billing" > "Manage Subscription" > "Cancel Subscription". You\'ll retain access until the end of your billing period.'
        },
        {
          q: 'Do you offer refunds?',
          a: 'We offer a 30-day money-back guarantee. If you\'re not satisfied within the first 30 days, contact our support team for a full refund, no questions asked.'
        },
        {
          q: 'Can I upgrade or downgrade my plan?',
          a: 'Yes! You can change your plan anytime from your account settings. Upgrades take effect immediately, while downgrades apply at the next billing cycle.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. All payments are processed securely through Stripe.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          q: 'What are the system requirements?',
          a: 'TryInterview works on any modern browser (Chrome, Firefox, Safari, Edge) with an internet connection. For video interviews, you\'ll need a webcam and microphone. We recommend Chrome for the best experience.'
        },
        {
          q: 'My video/audio isn\'t working. What should I do?',
          a: 'First, check that your browser has permission to access your camera and microphone. Try refreshing the page, clearing your browser cache, or using a different browser. If issues persist, contact our support team.'
        },
        {
          q: 'Is my data secure?',
          a: 'Absolutely! We use bank-level encryption (AES-256) to protect your data. All video recordings are stored securely and are only accessible by you. We never share your personal information with third parties. Read our Privacy Policy for details.'
        },
        {
          q: 'Can I download my interview recordings?',
          a: 'Yes! All your interview recordings can be downloaded in MP4 format. Go to your Dashboard > Interview History > Select interview > Download. Recordings are stored for 90 days on free plans and unlimited on paid plans.'
        }
      ]
    },
    {
      category: 'Success & Results',
      questions: [
        {
          q: 'How long does it take to see improvement?',
          a: 'Most users see noticeable improvement after 5-10 practice interviews. Consistent practice (2-3 sessions per week) typically leads to significant confidence and performance gains within 2-3 weeks.'
        },
        {
          q: 'What is the success rate of TryInterview users?',
          a: '98% of our users report increased interview confidence, and 87% receive job offers within 3 months of using TryInterview. Over 50,000 professionals have landed jobs at top companies using our platform.'
        },
        {
          q: 'Do you provide job placement assistance?',
          a: 'While we don\'t directly place candidates, we partner with leading companies and recruiters. High-performing users may receive interview opportunities through our network. We also provide resume optimization and LinkedIn profile tips.'
        }
      ]
    }
  ];

  return (
    <div className="page-container">
      <button onClick={() => window.location.hash = ''} className="back-icon-button" aria-label="Back to Home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      <div className="page-content">
        {faqs.map((category, catIndex) => (
          <div key={catIndex} className="faq-category">
            <h2 className="category-title">{category.category}</h2>
            <div className="faq-list">
              {category.questions.map((faq, qIndex) => {
                const index = `${catIndex}-${qIndex}`;
                const isOpen = openIndex === index;
                
                return (
                  <div key={qIndex} className={`faq-item ${isOpen ? 'open' : ''}`}>
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span>{faq.q}</span>
                      <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="faq-footer">
          <div className="faq-footer-content">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <h3>Still Have Questions?</h3>
            <p>Can't find what you're looking for? Our friendly support team is here to help you 24/7.</p>
            <div className="faq-footer-buttons">
              <button className="contact-btn primary" onClick={() => window.location.hash = 'contact'}>
                Contact Support Team
              </button>
              <button className="contact-btn secondary" onClick={() => window.location.hash = 'help'}>
                Visit Help Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
