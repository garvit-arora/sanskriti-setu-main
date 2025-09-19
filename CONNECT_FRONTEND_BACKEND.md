# 🔗 Connect Your Netlify Frontend to Render Backend

## ✅ Great Progress! 
- ✅ Frontend deployed on Netlify
- ⚠️ Need to deploy backend on Render

---

## 🚀 Step 1: Deploy Backend to Render

### Push the render.yaml file first:
```bash
git add render.yaml
git commit -m "Add Render configuration for backend"
git push origin main
```

### Deploy on Render:
1. Go to [render.com](https://render.com)
2. Sign up/login with GitHub (FREE)
3. Click "New" → "Blueprint"
4. Connect your GitHub repository
5. Render will automatically detect the `render.yaml` file
6. Click "Apply" to deploy

### Your Render backend URL will be:
`https://sanskriti-setu-backend.onrender.com`

---

## 🔧 Step 2: Connect Frontend to Backend

### Update Netlify Environment Variables:

1. Go to your Netlify dashboard
2. Select your deployed site
3. Go to "Site settings" → "Environment variables"
4. Add/Update this variable:
   - **Key**: `REACT_APP_API_URL`
   - **Value**: `https://YOUR-RENDER-URL.onrender.com/api`

### Update Render Environment Variables:

1. In Render dashboard, go to your web service
2. Go to "Environment"  
3. Add this variable:
   - **Key**: `FRONTEND_URL`
   - **Value**: `https://YOUR-NETLIFY-URL.netlify.app`

---

## 🔄 Step 3: Redeploy Both

### Trigger Netlify Redeploy:
1. Go to Netlify dashboard → "Deploys"
2. Click "Trigger deploy" → "Deploy site"

### Render will auto-redeploy when you push changes

---

## 🧪 Step 4: Test Your Setup

### Test URLs:
- **Frontend**: `https://your-site.netlify.app`
- **Backend Health**: `https://your-backend.onrender.com/api/health`
- **Login Test**: Use `demo@sanskriti.com` / `demo123`

---

## ⚠️ Important Notes:

### Render Free Tier:
- **Sleeps after 15 minutes** of inactivity
- **First request after sleep** takes ~30 seconds
- **Perfect for SIH demo** - judges won't mind the initial delay

### CORS Setup:
The backend is configured to accept requests from your Netlify frontend.

---

## 🐛 If You Get CORS Errors:

1. Make sure `FRONTEND_URL` is set correctly in Render
2. Make sure `REACT_APP_API_URL` is set correctly in Netlify
3. Both should be the full URLs including `https://`

---

## 🎯 Final URLs for SIH Judges:

- **Main Demo**: `https://your-site.netlify.app`
- **Backend API**: `https://your-backend.onrender.com/api/health`

**Demo Credentials**:
- Email: `demo@sanskriti.com`
- Password: `demo123`

---

## 💡 Pro Tip:

If Render deployment fails, you can also use the manual setup:
1. In Render: "New" → "Web Service"
2. Connect GitHub repo
3. Settings:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Add the variables manually

---

# 🏆 Once both are connected, your SIH cultural platform will be fully functional for judges!
