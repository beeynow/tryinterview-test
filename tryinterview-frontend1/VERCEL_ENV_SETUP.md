# Vercel Environment Variables Setup

## 🚀 How to Add Environment Variables in Vercel

### **Step-by-Step Guide:**

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your TryInterview project

2. **Navigate to Settings**
   - Click on **Settings** tab
   - Select **Environment Variables** from the sidebar

3. **Add Each Variable**
   
   Add these variables **ONE BY ONE**:

   | Variable Name | Value | Environments |
   |--------------|-------|--------------|
   | `REACT_APP_FIREBASE_API_KEY` | `AIzaSyAvPr3mVazhgNZO67zVKXj7RMG0_OQzM-c` | Production, Preview, Development |
   | `REACT_APP_FIREBASE_AUTH_DOMAIN` | `test-590a3.firebaseapp.com` | Production, Preview, Development |
   | `REACT_APP_FIREBASE_PROJECT_ID` | `test-590a3` | Production, Preview, Development |
   | `REACT_APP_FIREBASE_STORAGE_BUCKET` | `test-590a3.firebasestorage.app` | Production, Preview, Development |
   | `REACT_APP_FIREBASE_MESSAGING_SENDER_ID` | `708966463501` | Production, Preview, Development |
   | `REACT_APP_FIREBASE_APP_ID` | `1:708966463501:web:80a4e10962f9456e9e3d44` | Production, Preview, Development |
   | `REACT_APP_GA_TRACKING_ID` | `G-PDGK2KLX4S` | Production, Preview, Development |

4. **For Each Variable:**
   - Click "Add New" button
   - Enter the **Name** (e.g., `REACT_APP_FIREBASE_API_KEY`)
   - Enter the **Value** (from table above)
   - Select **All 3 environments**: Production, Preview, Development
   - Click **Save**

5. **Verify**
   - You should see all 7 variables listed
   - Each should show "Production, Preview, Development"

6. **Redeploy**
   - Go to **Deployments** tab
   - Click on your latest deployment
   - Click **Redeploy** button
   - Or just push a new commit

---

## 📋 Copy-Paste Values

**For quick copy-paste while adding in Vercel:**

```
Name: REACT_APP_FIREBASE_API_KEY
Value: AIzaSyAvPr3mVazhgNZO67zVKXj7RMG0_OQzM-c
```

```
Name: REACT_APP_FIREBASE_AUTH_DOMAIN
Value: test-590a3.firebaseapp.com
```

```
Name: REACT_APP_FIREBASE_PROJECT_ID
Value: test-590a3
```

```
Name: REACT_APP_FIREBASE_STORAGE_BUCKET
Value: test-590a3.firebasestorage.app
```

```
Name: REACT_APP_FIREBASE_MESSAGING_SENDER_ID
Value: 708966463501
```

```
Name: REACT_APP_FIREBASE_APP_ID
Value: 1:708966463501:web:80a4e10962f9456e9e3d44
```

```
Name: REACT_APP_GA_TRACKING_ID
Value: G-PDGK2KLX4S
```

---

## ✅ Verification Checklist

After adding all variables:

- [ ] All 7 environment variables added
- [ ] Each variable has all 3 environments selected
- [ ] No typos in variable names (must match exactly)
- [ ] No extra spaces in values
- [ ] Redeployment triggered

---

## 🔧 Alternative: Vercel CLI

If you prefer using the command line:

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Link to your project (if not already linked)
vercel link

# Add environment variables
vercel env add REACT_APP_FIREBASE_API_KEY production preview development
# Paste: AIzaSyAvPr3mVazhgNZO67zVKXj7RMG0_OQzM-c

vercel env add REACT_APP_FIREBASE_AUTH_DOMAIN production preview development
# Paste: test-590a3.firebaseapp.com

vercel env add REACT_APP_FIREBASE_PROJECT_ID production preview development
# Paste: test-590a3

vercel env add REACT_APP_FIREBASE_STORAGE_BUCKET production preview development
# Paste: test-590a3.firebasestorage.app

vercel env add REACT_APP_FIREBASE_MESSAGING_SENDER_ID production preview development
# Paste: 708966463501

vercel env add REACT_APP_FIREBASE_APP_ID production preview development
# Paste: 1:708966463501:web:80a4e10962f9456e9e3d44

vercel env add REACT_APP_GA_TRACKING_ID production preview development
# Paste: G-PDGK2KLX4S

# Deploy
vercel --prod
```

---

## 🐛 Troubleshooting

### Error: "Environment Variable references Secret which does not exist"

**Solution:** We've removed secret references from `vercel.json`. Just add environment variables directly as shown above.

### Authentication not working after deployment

**Checklist:**
1. ✅ All environment variables added in Vercel
2. ✅ No typos in variable names
3. ✅ Redeployed after adding variables
4. ✅ Firebase authorized domains includes your Vercel URL
5. ✅ Clear browser cache and test again

### How to add Vercel domain to Firebase authorized domains:

1. Go to Firebase Console
2. Select project: **test-590a3**
3. Go to **Authentication** → **Settings**
4. Click **Authorized domains** tab
5. Click **Add domain**
6. Enter your Vercel domain (e.g., `your-project.vercel.app`)
7. Click **Add**

---

## ✅ Final Check

After deployment, test your app:

1. Visit your Vercel URL
2. Click "Get Started" or "Sign In"
3. Try Google authentication
4. Try GitHub authentication
5. Check Google Analytics (should track visit)

If everything works, you're all set! 🎉

---

**Need help?** Check the main deployment guide: [DEPLOYMENT.md](./DEPLOYMENT.md)
