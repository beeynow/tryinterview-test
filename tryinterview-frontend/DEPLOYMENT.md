# TryInterview - Vercel Deployment Guide

## 🚀 Quick Deploy to Vercel productional

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Deploy to Production:**
```bash
vercel --prod
```

---

### Method 2: GitHub Integration (Easiest)

1. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit - TryInterview"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect React and configure everything
   - Click "Deploy"

---

### Method 3: Vercel Dashboard

1. **Build your project locally:**
```bash
npm run build
```

2. **Go to Vercel Dashboard:**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Drag and drop your `build` folder
   - Click "Deploy"

---

## 🔐 Environment Variables Setup

### **Required for Vercel Deployment:**

In your Vercel project settings, add these environment variables:

```bash
REACT_APP_FIREBASE_API_KEY=AIzaSyAvPr3mVazhgNZO67zVKXj7RMG0_OQzM-c
REACT_APP_FIREBASE_AUTH_DOMAIN=test-590a3.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=test-590a3
REACT_APP_FIREBASE_STORAGE_BUCKET=test-590a3.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=708966463501
REACT_APP_FIREBASE_APP_ID=1:708966463501:web:80a4e10962f9456e9e3d44
REACT_APP_GA_TRACKING_ID=G-PDGK2KLX4S
```

**How to add in Vercel:**
1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add each variable above
4. Select "Production", "Preview", and "Development"
5. Click "Save"

**Where to find these:**
- Firebase values: Firebase Console → Project Settings → General → Your apps
- GA Tracking ID: Already set to G-PDGK2KLX4S

**Note:** These values are already configured in your `.env.local` file for local development.

---

## 📝 Pre-Deployment Checklist

- [x] `vercel.json` created ✅
- [x] `.vercelignore` created ✅
- [x] Build script configured ✅
- [ ] Firebase environment variables set
- [ ] Test production build locally: `npm run build`
- [ ] Verify all features work

---

## 🧪 Test Production Build Locally

Before deploying, test the production build:

```bash
# Build the project
npm run build

# Serve the build folder
npx serve -s build
```

Open http://localhost:3000 and test all features.

---

## 🌐 Custom Domain Setup (Optional)

After deployment:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., tryinterview.com)
4. Follow DNS configuration instructions

---

## 📊 Post-Deployment

After successful deployment, Vercel will provide:

- **Production URL:** `https://your-project.vercel.app`
- **Preview URLs:** For each git push
- **Analytics:** Built-in performance monitoring

---

## 🔄 Automatic Deployments

Once connected to GitHub:

- **Every push to `main`** → Production deployment
- **Every PR** → Preview deployment
- **Rollback support** → One-click rollback in dashboard

---

## 🐛 Troubleshooting

### Build fails on Vercel:
- Check Node version compatibility
- Ensure all dependencies are in `package.json`
- Check Vercel build logs

### Firebase auth not working:
- Add Vercel domain to Firebase authorized domains
- Firebase Console → Authentication → Settings → Authorized domains
- Add: `your-project.vercel.app`

### Routes not working:
- `vercel.json` handles SPA routing
- All routes redirect to `index.html`

---

## 💡 Tips

- Use Vercel's preview deployments for testing
- Enable automatic deployments from GitHub
- Set up environment variables before deploying
- Use Vercel Analytics for performance monitoring

---

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Firebase Docs: https://firebase.google.com/docs

**Your TryInterview app is now ready for Vercel! 🎉**
