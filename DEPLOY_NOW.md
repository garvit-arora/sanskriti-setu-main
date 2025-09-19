# 🚀 Deploy Your Sanskriti Setu App NOW!

Your project is ready for deployment! Follow these simple steps:

## 🎯 Quick 5-Minute Deployment

### Step 1: Push to GitHub
1. Go to [GitHub.com](https://github.com) and create a new repository named `sanskriti-setu`
2. Copy the commands GitHub shows you and run them:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/sanskriti-setu.git
   git push -u origin main
   ```

### Step 2: Deploy Backend (Railway - Free)
1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your `sanskriti-setu` repository
5. After deployment, go to "Variables" and add:
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/sanskriti-setu
   JWT_SECRET=sih-2024-sanskriti-setu-production-jwt-secret
   ```
6. Copy your Railway URL (something like: `https://sanskriti-setu-production.up.railway.app`)

### Step 3: Deploy Frontend (Vercel - Free)
1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Import Project"
4. Select your GitHub repository
5. **Important**: Set "Root Directory" to `client`
6. Add environment variable:
   - Name: `REACT_APP_API_URL`
   - Value: `https://your-railway-url.up.railway.app/api`
7. Click "Deploy"

### Step 4: Update Backend CORS
1. In Railway dashboard, update the `FRONTEND_URL` variable:
   ```
   FRONTEND_URL=https://your-vercel-app.vercel.app
   ```
2. Wait for redeployment

## 🎉 Your App is Live!

- **Frontend**: `https://your-app-name.vercel.app`
- **Backend**: `https://your-app-name.railway.app/api/health`

## 🎮 For SIH 2024 Demo

Share these URLs with judges:
- **Main App**: Your Vercel URL
- **Demo Credentials**: 
  - Email: demo@sanskriti.com
  - Password: demo123

## 🔧 If You Need MongoDB (Optional)

For full functionality, set up MongoDB Atlas:
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create free cluster
3. Create user with username/password
4. Get connection string
5. Update `MONGODB_URI` in Railway

## 💡 Pro Tips

- **Free tiers** are perfect for SIH demo
- **Auto-deployment** from GitHub
- **HTTPS** enabled by default
- **No credit card** needed for basic deployment

**🏆 Your cultural heritage platform is ready for the world! 🏆**
