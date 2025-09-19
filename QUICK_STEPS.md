# ⚡ Quick Next Steps - Backend Deployment

## ✅ Current Status:
- ✅ Frontend deployed on Netlify
- ✅ `render.yaml` file created for backend
- ⚠️ Need to deploy backend and connect them

---

## 🚀 Next Steps (5 minutes):

### 1. Push the render.yaml file:
```bash
git push origin main
```

### 2. Deploy Backend on Render:
1. Go to [render.com](https://render.com)
2. Sign up with GitHub (FREE)
3. Click "New" → "Blueprint" 
4. Select your GitHub repository
5. Render will detect the `render.yaml` file automatically
6. Click "Apply" to deploy
7. Wait 3-5 minutes for deployment

### 3. Get your Backend URL:
Your backend will be available at:
`https://sanskriti-setu-backend.onrender.com`

### 4. Update Netlify Environment:
1. Go to Netlify dashboard → Your site
2. "Site settings" → "Environment variables"
3. Update `REACT_APP_API_URL` to:
   `https://sanskriti-setu-backend.onrender.com/api`
4. Click "Save"
5. Go to "Deploys" → "Trigger deploy"

### 5. Update Render Environment:
1. In Render dashboard → Your service
2. "Environment" tab
3. Add variable:
   - Key: `FRONTEND_URL`
   - Value: `https://your-netlify-site.netlify.app`

---

## 🧪 Test Your Setup:

### URLs to test:
- **Frontend**: `https://your-site.netlify.app`
- **Backend Health**: `https://sanskriti-setu-backend.onrender.com/api/health`

### Demo Login:
- Email: `demo@sanskriti.com`
- Password: `demo123`

---

## ⚠️ Important:

- **Render free tier sleeps** after 15 minutes
- **First request takes ~30 seconds** after sleep
- **Perfect for SIH demo** - judges understand this

---

## 🎯 Final Result:

✅ **Frontend**: Fast, always-on Netlify hosting
✅ **Backend**: Free Render hosting with all APIs
✅ **Demo working**: Login, dashboard, cultural matching
✅ **Professional URLs** for SIH judges

---

# 🏆 Your cultural heritage platform will be fully live in 5 minutes!
