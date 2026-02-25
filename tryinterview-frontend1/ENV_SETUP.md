# Environment Variables Setup Guide

## 📋 Quick Reference

Your TryInterview app uses environment variables to keep sensitive Firebase configuration secure.

---

## 🔐 Environment Variables

### **Local Development (.env.local)**

Already created and configured! File: `.env.local`

```bash
REACT_APP_FIREBASE_API_KEY=AIzaSyAvPr3mVazhgNZO67zVKXj7RMG0_OQzM-c
REACT_APP_FIREBASE_AUTH_DOMAIN=test-590a3.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=test-590a3
REACT_APP_FIREBASE_STORAGE_BUCKET=test-590a3.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=708966463501
REACT_APP_FIREBASE_APP_ID=1:708966463501:web:80a4e10962f9456e9e3d44
REACT_APP_GA_TRACKING_ID=G-PDGK2KLX4S
```

✅ **Status:** Already configured and ready to use!

---

## 🚀 Vercel Deployment Setup

### **Step 1: Add Environment Variables in Vercel**

1. Go to [vercel.com](https://vercel.com)
2. Select your TryInterview project
3. Click **Settings** → **Environment Variables**
4. Add each variable below:

| Variable Name | Value |
|--------------|-------|
| `REACT_APP_FIREBASE_API_KEY` | `AIzaSyAvPr3mVazhgNZO67zVKXj7RMG0_OQzM-c` |
| `REACT_APP_FIREBASE_AUTH_DOMAIN` | `test-590a3.firebaseapp.com` |
| `REACT_APP_FIREBASE_PROJECT_ID` | `test-590a3` |
| `REACT_APP_FIREBASE_STORAGE_BUCKET` | `test-590a3.firebasestorage.app` |
| `REACT_APP_FIREBASE_MESSAGING_SENDER_ID` | `708966463501` |
| `REACT_APP_FIREBASE_APP_ID` | `1:708966463501:web:80a4e10962f9456e9e3d44` |
| `REACT_APP_GA_TRACKING_ID` | `G-PDGK2KLX4S` |

5. For each variable, select: **Production**, **Preview**, and **Development**
6. Click **Save**

### **Step 2: Redeploy (if already deployed)**

If you've already deployed, trigger a new deployment:
- Go to **Deployments** tab
- Click **Redeploy** on the latest deployment
- Or push a new commit to trigger auto-deployment

---

## 🔧 Vercel CLI Method (Alternative)

You can also add environment variables using Vercel CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Link to your project
vercel link

# Add environment variables
vercel env add REACT_APP_FIREBASE_API_KEY
# Paste: AIzaSyAvPr3mVazhgNZO67zVKXj7RMG0_OQzM-c
# Select: Production, Preview, Development

# Repeat for all variables...
```

---

## ✅ Verification

### **Local Development:**
```bash
npm start
```
Open http://localhost:3000 and test authentication

### **Production:**
After deploying to Vercel, test:
1. Visit your live URL
2. Click "Get Started" or "Sign In"
3. Try Google or GitHub authentication
4. Should work perfectly!

---

## 🔒 Security Notes

### **Why use environment variables?**
- ✅ Keeps sensitive data out of source code
- ✅ Different configs for dev/staging/production
- ✅ Easy to update without code changes
- ✅ Follows security best practices

### **Files to NEVER commit:**
- ❌ `.env.local` - Contains real values
- ✅ `.env.example` - Template only (safe to commit)

### **Already protected:**
- `.env.local` is in `.gitignore` ✅
- Firebase keys are environment variables ✅
- Production build uses Vercel env vars ✅

---

## 📝 Firebase Console Access

If you ever need to rotate keys or add new Firebase features:

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Select project: **test-590a3**
3. Go to **Project Settings** (gear icon)
4. Scroll to **Your apps** → **Web apps**
5. Click on your app
6. Copy new config values
7. Update `.env.local` and Vercel env vars

---

## 🎯 Google Analytics

Your Google Analytics tracking ID is also in environment variables:

- **Tracking ID:** G-PDGK2KLX4S
- **Dashboard:** [analytics.google.com](https://analytics.google.com)

---

## 🆘 Troubleshooting

### **Authentication not working locally:**
```bash
# Check if .env.local exists
ls -la .env.local

# Verify variables are loaded
npm start
# Should see: "webpack compiled successfully"

# Restart dev server if you just added .env.local
Ctrl+C
npm start
```

### **Authentication not working on Vercel:**
1. Verify all env vars are added in Vercel dashboard
2. Check spellings (must start with `REACT_APP_`)
3. Redeploy after adding env vars
4. Check Firebase authorized domains include your Vercel URL

---

## ✅ Current Status

- ✅ `.env.local` created with all Firebase credentials
- ✅ `.env.example` updated as template
- ✅ `firebaseConfig.js` updated to use env vars
- ✅ `.gitignore` includes `.env.local`
- ✅ Google Analytics ID included
- ✅ Ready for Vercel deployment

**Everything is configured and ready to go!** 🚀
