# 🎯 TryInterview - AI-Powered Mock Interview Platform

> Transform your interview preparation with AI-powered practice sessions, instant feedback, and comprehensive analytics.

![TryInterview](./public/logo.png)

## 🌟 Features

### Core Features
- ✅ **AI-Powered Mock Interviews** - Practice with intelligent AI interviewers
- ✅ **Question Bank** - 10,000+ curated interview questions
- ✅ **Resume Analyzer** - AI-powered resume analysis and optimization
- ✅ **Meeting Summarizer** - Automated interview session summaries
- ✅ **Real-time Feedback** - Instant performance insights
- ✅ **Performance Analytics** - Track your progress over time

### Authentication
- 🔐 **Google Sign-In** - Quick OAuth authentication
- 🔐 **GitHub Sign-In** - Developer-friendly login
- 🎯 **Smart Onboarding** - Personalized setup for new users

### User Experience
- 🎨 **Beautiful UI** - Modern glassmorphism design
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Fast & Smooth** - Optimized performance
- 🎬 **Lottie Animations** - Professional loading states

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ and npm
- Firebase project (for authentication)

### Installation

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd tryinterview
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Firebase credentials.

4. **Start development server:**
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
```

Creates optimized production build in `build/` folder.

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2: GitHub Integration
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Deploy automatically

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.**

## 🛠️ Tech Stack

- **Frontend:** React 19, JavaScript
- **Authentication:** Firebase Auth (Google, GitHub)
- **Animations:** Lottie, CSS animations
- **Styling:** Custom CSS with Glassmorphism
- **Hosting:** Vercel (recommended)
- **Build Tool:** Create React App

## 📁 Project Structure

```
tryinterview/
├── public/
│   ├── logo.png
│   ├── founder-1.jpg
│   ├── founder-2.jpg
│   └── *.png (3D images)
├── src/
│   ├── components/
│   │   ├── LandingPage.js
│   │   ├── AuthModal.js
│   │   ├── OnboardingModal.js
│   │   ├── Dashboard.js
│   │   ├── QuestionBank.js
│   │   ├── ResumeAnalyzer.js
│   │   ├── MeetingSummarizer.js
│   │   ├── Features.js
│   │   ├── About.js
│   │   ├── Founder.js
│   │   ├── Terms.js
│   │   ├── Privacy.js
│   │   └── Loading.js
│   ├── firebaseConfig.js
│   ├── App.js
│   └── index.js
├── vercel.json
├── package.json
└── README.md
```

## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project
2. Enable Authentication (Google & GitHub)
3. Add authorized domains:
   - `localhost` (for development)
   - `your-vercel-domain.vercel.app` (for production)
4. Copy config to `.env.local`

### Vercel Environment Variables

Add these in Vercel dashboard → Settings → Environment Variables:

- `REACT_APP_FIREBASE_API_KEY`
- `REACT_APP_FIREBASE_AUTH_DOMAIN`
- `REACT_APP_FIREBASE_PROJECT_ID`
- `REACT_APP_FIREBASE_STORAGE_BUCKET`
- `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
- `REACT_APP_FIREBASE_APP_ID`

## 🎨 Features Overview

### Landing Page
- 7 sections with 3D images
- Feature highlights
- Statistics showcase
- Call-to-action buttons

### Onboarding
- 3-step personalized setup
- Skills and goals collection
- Only shown to new users

### Dashboard
- User profile
- Recent activity
- Performance metrics
- Quick access to features

### Premium Features (Authentication Required)
- Question Bank
- Resume Analyzer
- AI Meeting Summarizer

## 👨‍💼 About the Founder

**Muhammad Yakubu Usman** - Founder & CEO
- Entrepreneur and Innovator
- Founder of Beeynow
- Career Transformation Advocate
- Helped 50,000+ job seekers

[Learn more about the founder →](/#founder)

## 📄 License

This project is proprietary software owned by Beeynow.

## 🤝 Support

For support, email support@tryinterview.com

---

**Built with ❤️ by Muhammad Yakubu Usman**

*Empowering careers through innovation*
