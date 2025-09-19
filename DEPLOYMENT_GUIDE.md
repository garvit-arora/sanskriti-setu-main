# 🚀 Sanskriti Setu - Public Deployment Guide

## 🎯 Quick Deployment (Recommended for SIH Demo)

### Option 1: Free Deployment (No Credit Card Required)
- **Frontend**: Vercel (Free)
- **Backend**: Railway (Free tier)
- **Database**: MongoDB Atlas (Free tier)

### Option 2: Alternative Free Options
- **Frontend**: Netlify (Free)
- **Backend**: Render (Free tier)
- **Database**: MongoDB Atlas (Free tier)

---

## 📋 Step-by-Step Deployment Instructions

### 1. 🗄️ Setup MongoDB Atlas (Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster (free tier)
4. Create database user:
   - Username: `sanskriti-user`
   - Password: `SIH2024` (or generate secure password)
5. Whitelist IP addresses (0.0.0.0/0 for development)
6. Get connection string and update it in deployment configs

### 2. 🖥️ Deploy Backend (Railway - Recommended)

#### A. Using Railway (Easy & Free)

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit for SIH 2024"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/sanskriti-setu.git
   git push -u origin main
   ```

2. **Deploy to Railway**:
   - Go to [Railway.app](https://railway.app)
   - Sign up with GitHub
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Railway will auto-detect Node.js and deploy

3. **Set Environment Variables** in Railway dashboard:
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=mongodb+srv://sanskriti-user:SIH2024@cluster0.xxxxx.mongodb.net/sanskriti-setu
   JWT_SECRET=sih-2024-sanskriti-setu-production-jwt-secret
   FRONTEND_URL=https://your-app-name.vercel.app
   ```

4. **Get your backend URL**: `https://your-app-name.railway.app`

#### B. Alternative: Using Render

1. Go to [Render.com](https://render.com)
2. Sign up with GitHub
3. Create new "Web Service"
4. Connect your GitHub repo
5. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add environment variables (same as Railway)

### 3. 🌐 Deploy Frontend (Vercel - Recommended)

1. **Update Frontend Environment**:
   ```bash
   cd client
   echo "REACT_APP_API_URL=https://your-backend-url.railway.app/api" > .env.production
   ```

2. **Deploy to Vercel**:
   - Go to [Vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "Import Project"
   - Select your repository
   - Set root directory to `client/`
   - Vercel will auto-build and deploy

3. **Configure Environment Variable** in Vercel dashboard:
   - `REACT_APP_API_URL`: `https://your-backend-url.railway.app/api`

4. **Get your frontend URL**: `https://your-app-name.vercel.app`

### 4. ✅ Update Backend CORS

Update your backend's `.env` or Railway environment variables:
```
FRONTEND_URL=https://your-app-name.vercel.app
```

---

## 🛠️ Alternative Deployment Commands

### Deploy Backend to Multiple Platforms:

#### Heroku (If you have account):
```bash
# Install Heroku CLI first
heroku create sanskriti-setu-backend
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI="your-mongo-connection-string"
heroku config:set JWT_SECRET="your-jwt-secret"
heroku config:set FRONTEND_URL="https://your-frontend.vercel.app"
git push heroku main
```

#### Docker + Any Cloud Provider:
```bash
# Build Docker image
docker build -t sanskriti-setu-backend .

# Run locally to test
docker run -p 5000:5000 -e NODE_ENV=production sanskriti-setu-backend

# Deploy to cloud provider of choice (AWS, Google Cloud, etc.)
```

---

## 🌟 Quick Start Deployment (5 Minutes)

For fastest deployment for your SIH demo:

### Step 1: Create GitHub Repository
```bash
cd C:\Users\gauta\SIH_MVP_Sanskriti_Setu
git init
git add .
git commit -m "SIH 2024 - Sanskriti Setu Cultural Platform"
# Push to your GitHub account
```

### Step 2: Deploy Backend (Railway)
1. Go to [Railway.app](https://railway.app)
2. Connect GitHub repo
3. Auto-deploy backend
4. Add environment variables

### Step 3: Deploy Frontend (Vercel)
1. Go to [Vercel.com](https://vercel.com)
2. Import project from GitHub
3. Set root directory to `client/`
4. Add `REACT_APP_API_URL` environment variable
5. Deploy

### Step 4: Setup Database
1. Create MongoDB Atlas cluster
2. Update Railway environment with connection string

**Total Time: ~5-10 minutes for full public deployment!**

---

## 📱 Public URLs for SIH Demo

After deployment, you'll have:

- **🌐 Frontend**: `https://sanskriti-setu.vercel.app`
- **🔧 Backend API**: `https://sanskriti-setu-backend.railway.app/api`
- **💚 Health Check**: `https://sanskriti-setu-backend.railway.app/api/health`

---

## 🔧 Environment Variables Summary

### Backend (.env or Cloud Service):
```
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/sanskriti-setu
JWT_SECRET=your-super-secure-jwt-secret-key
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

### Frontend (.env.production):
```
REACT_APP_API_URL=https://your-backend-domain.railway.app/api
GENERATE_SOURCEMAP=false
```

---

## 🧪 Testing Public Deployment

1. **Test Health Check**: Visit `https://your-backend.railway.app/api/health`
2. **Test Frontend**: Visit `https://your-frontend.vercel.app`
3. **Test Features**:
   - Landing page loads
   - Registration/Login flows
   - Dashboard displays
   - Discover page works (swipe functionality)
   - Cultural showcase displays

---

## 🎯 For SIH 2024 Judges

Your deployed application will be accessible at public URLs:
- **Demo URL**: `https://sanskriti-setu.vercel.app`
- **API Documentation**: `https://sanskriti-setu-backend.railway.app/api/health`

**Demo Credentials**:
- Email: `demo@sanskriti.com`
- Password: `demo123`

**Features to Demonstrate**:
1. Cultural heritage landing page
2. User registration/authentication
3. Cultural matching algorithm (Tinder-like)
4. Dashboard with gamification
5. Cultural showcase (festivals, food, traditions)
6. Real-time chat capabilities
7. State-wise cultural connections

---

## 💡 Pro Tips

1. **Free Tiers are Perfect** for SIH demo (no payment needed)
2. **Auto-deployment** from GitHub makes updates easy
3. **Environment variables** keep secrets secure
4. **MongoDB Atlas** provides reliable cloud database
5. **HTTPS by default** on Vercel/Railway for security

**🏆 Ready to showcase your cultural heritage platform to SIH 2024 judges! 🏆**
