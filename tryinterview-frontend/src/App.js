import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';
import LandingPage from './components/LandingPage';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import Terms from './components/Terms';
import About from './components/About';
import Founder from './components/Founder';
import Privacy from './components/Privacy';
import QuestionBank from './components/QuestionBank';
import ResumeAnalyzer from './components/ResumeAnalyzer';
import MeetingSummarizer from './components/MeetingSummarizer';
import Contact from './components/Contact';
import Help from './components/Help';
import FAQ from './components/FAQ';
import Cookies from './components/Cookies';
import Loading from './components/Loading';
import OnboardingModal from './components/OnboardingModal';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Handle hash-based routing
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      const newPage = hash || 'home';
      
      if (newPage !== currentPage) {
        setCurrentPage(newPage);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

  // Open auth modal
  const handleGetStarted = () => setShowAuthModal(true);

  // Handle successful authentication
  const handleAuthSuccess = (userData, isNewUser) => {
    setUser(userData);
    setShowAuthModal(false);
    if (isNewUser) setShowOnboarding(true);
  };

  // Handle onboarding completion
  const handleOnboardingComplete = (data) => {
    if (user) {
      localStorage.setItem(`user_${user.uid}_onboarded`, 'true');
      if (data) localStorage.setItem(`user_${user.uid}_data`, JSON.stringify(data));
    }
    setShowOnboarding(false);
  };

  // Close auth modal
  const handleCloseModal = () => setShowAuthModal(false);

  // Sign out
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      alert('Logout failed. Try again.');
    }
  };

  // Navigate back to home
  const handleBackToHome = () => {
    window.location.hash = '';
    setCurrentPage('home');
  };

  if (loading) {
    return <Loading />;
  }

  // If user is logged in, show dashboard (unless onboarding is active)
  if (user && !showOnboarding) {
    return (
      <div className="App">
        <Dashboard user={user} onLogout={handleLogout} />
      </div>
    );
  }

  // If onboarding is active, show it
  if (showOnboarding && user) {
    return (
      <div className="App">
        <OnboardingModal 
          user={user}
          onComplete={handleOnboardingComplete}
        />
      </div>
    );
  }

  // Check if page requires authentication
  const requiresAuth = (page) => {
    return ['question-bank', 'resume-analyzer', 'meeting-summarizer'].includes(page);
  };

  // Render appropriate page based on currentPage state
  const renderPage = () => {
    // If page requires auth and user is not logged in, show landing page with auth modal
    if (requiresAuth(currentPage) && !user) {
      setShowAuthModal(true);
      setCurrentPage('home');
      return <LandingPage onGetStarted={handleGetStarted} />;
    }

    switch (currentPage) {
      case 'features':
        return <Features onBack={handleBackToHome} />;
      case 'terms':
        return <Terms onBack={handleBackToHome} />;
      case 'about':
        return <About onBack={handleBackToHome} />;
      case 'founder':
        return <Founder onBack={handleBackToHome} />;
      case 'privacy':
        return <Privacy onBack={handleBackToHome} />;
      case 'question-bank':
        return <QuestionBank onBack={handleBackToHome} user={user} />;
      case 'resume-analyzer':
        return <ResumeAnalyzer onBack={handleBackToHome} user={user} />;
      case 'meeting-summarizer':
        return <MeetingSummarizer onBack={handleBackToHome} user={user} />;
      case 'contact':
        return <Contact onBack={handleBackToHome} />;
      case 'help':
        return <Help onBack={handleBackToHome} />;
      case 'faq':
        return <FAQ onBack={handleBackToHome} />;
      case 'cookies':
        return <Cookies onBack={handleBackToHome} />;
      default:
        return <LandingPage onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
      {showAuthModal && (
        <AuthModal 
          onClose={handleCloseModal} 
          onAuthSuccess={handleAuthSuccess}
        />
      )}
    </div>
  );
}

export default App;