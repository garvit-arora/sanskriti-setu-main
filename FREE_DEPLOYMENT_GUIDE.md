# 🆓 100% FREE Deployment - No Credit Card Required!

## 🎯 Completely Free Options (Updated 2024)

### ✅ Free Backend Options:
- **Render.com** (Free tier - 750 hours/month)
- **Glitch.com** (Free, no limits for small projects)
- **Heroku alternatives** - Fl0.com, Cyclic.sh
- **Vercel** (can host backend too with serverless functions)

### ✅ Free Frontend Options:
- **Vercel** (Unlimited for personal projects)
- **Netlify** (Free tier with 100GB bandwidth)
- **GitHub Pages** (Free static hosting)

---

## 🚀 Method 1: Render + Vercel (RECOMMENDED - 100% Free)

### Step 1: Deploy Backend to Render (FREE)

1. **Push to GitHub First**:
   ```bash
   cd C:\Users\gauta\SIH_MVP_Sanskriti_Setu
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/sanskriti-setu.git
   git push -u origin main
   ```

2. **Deploy to Render**:
   - Go to [render.com](https://render.com)
   - Sign up with GitHub (FREE)
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - **Settings**:
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Environment**: Node
   
3. **Add Environment Variables**:
   ```
   NODE_ENV=production
   PORT=10000
   MONGODB_URI=mongodb://localhost:27017/sanskriti-setu
   JWT_SECRET=sih-2024-sanskriti-setu-production-jwt-secret
   ```

4. **Get your FREE backend URL**: `https://your-app-name.onrender.com`

### Step 2: Deploy Frontend to Vercel (FREE)

1. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub (FREE)
   - Click "Import Project"
   - Select your GitHub repository

2. **Configure Vercel**:
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

3. **Add Environment Variable**:
   - **Name**: `REACT_APP_API_URL`
   - **Value**: `https://your-render-url.onrender.com/api`

4. **Deploy**: Click Deploy button

5. **Get your FREE frontend URL**: `https://your-app.vercel.app`

---

## 🚀 Method 2: Glitch (Super Easy & Free)

### Backend on Glitch:

1. Go to [glitch.com](https://glitch.com)
2. Sign up (FREE)
3. Click "New Project" → "Import from GitHub"
4. Add your repository URL
5. Glitch auto-deploys!
6. URL: `https://your-project-name.glitch.me`

### Frontend on Vercel:
- Same as Method 1 above
- Just update API URL to your Glitch URL

---

## 🚀 Method 3: All-in-One Vercel (Backend + Frontend)

Vercel can host both! Let me create serverless API routes:

### Step 1: Convert Backend to Vercel Functions

1. **Create `api` folder in root**:
   ```bash
   mkdir api
   ```

2. **Create Vercel config**:
   ```json
   {
     "version": 2,
     "builds": [
       { "src": "server/server.js", "use": "@vercel/node" },
       { "src": "client/package.json", "use": "@vercel/static-build" }
     ],
     "routes": [
       { "src": "/api/(.*)", "dest": "/server/server.js" },
       { "src": "/(.*)", "dest": "/client/build/$1" }
     ]
   }
   ```

---

## 🆓 Recommended: Render + Vercel Setup

This is the **easiest and most reliable** free option:

### Quick Commands:

```bash
# 1. Push to GitHub
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sanskriti-setu.git
git push -u origin main

# 2. Deploy backend to Render.com (free)
# 3. Deploy frontend to Vercel.com (free)
# 4. Update environment variables
```

### Free Tier Limits (More than enough for SIH):
- **Render**: 750 hours/month, sleeps after 15min inactivity
- **Vercel**: Unlimited static hosting, 100GB bandwidth
- **Total Cost**: $0.00

---

## 🔧 Environment Variables for Free Deployment:

### Render (Backend):
```
NODE_ENV=production
PORT=10000
MONGODB_URI=mongodb://localhost:27017/sanskriti-setu
JWT_SECRET=sih-2024-sanskriti-setu-production-jwt-secret-key
FRONTEND_URL=https://your-vercel-app.vercel.app
```

### Vercel (Frontend):
```
REACT_APP_API_URL=https://your-render-app.onrender.com/api
```

---

## 🎮 Expected FREE Public URLs:

- **Frontend**: `https://sanskriti-setu.vercel.app`
- **Backend**: `https://sanskriti-setu.onrender.com`
- **Health Check**: `https://sanskriti-setu.onrender.com/api/health`

---

## 💡 Pro Tips for Free Deployment:

1. **Render sleeps after 15min** - First request might be slow (30 seconds)
2. **Vercel is instant** - Frontend always fast
3. **Both have HTTPS** by default
4. **Auto-deploy** from GitHub
5. **Perfect for SIH demo** - Judges won't notice any limitations

---

## 🏆 For SIH 2024 Judges:

**Demo URLs** (after deployment):
- **Main App**: Your Vercel URL
- **API Health**: Your Render URL + `/api/health`

**Demo Credentials**:
- Email: `demo@sanskriti.com`  
- Password: `demo123`

---

# 🎯 Total Cost: $0.00 - Perfect for SIH Competition!

**No credit card, no payment, no trial periods - just free hosting for your cultural heritage platform!**
