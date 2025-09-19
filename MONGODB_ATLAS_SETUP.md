# 🗄️ MongoDB Atlas Setup (FREE Database)

## 🎯 Set Up Your FREE MongoDB Database

### Step 1: Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Click **"Try Free"**
3. Sign up with email (FREE - no credit card needed)

### Step 2: Create Cluster
1. Choose **"M0 Sandbox"** (FREE forever)
2. Select **"AWS"** provider
3. Choose region closest to you
4. Cluster Name: `sanskriti-setu-cluster`
5. Click **"Create"**

### Step 3: Create Database User
1. Go to **"Database Access"** in left menu
2. Click **"Add New Database User"**
3. **Username**: `sanskriti-user`
4. **Password**: `SIH2024secure!` (or generate secure password)
5. **Role**: "Read and write to any database"
6. Click **"Add User"**

### Step 4: Whitelist IP Addresses
1. Go to **"Network Access"** in left menu
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (0.0.0.0/0)
4. Comment: "SIH 2024 Demo Access"
5. Click **"Confirm"**

### Step 5: Get Connection String
1. Go to **"Database"** (main dashboard)
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string - it looks like:
   ```
   mongodb+srv://sanskriti-user:SIH2024secure!@sanskriti-setu-cluster.xxxxx.mongodb.net/sanskriti-setu?retryWrites=true&w=majority
   ```

### Step 6: Update Environment Variables

**For Render.com backend:**
1. Go to Render dashboard → Your service
2. Environment tab
3. Update `MONGODB_URI` to your connection string

**For local development:**
Update your `.env` file:
```
MONGODB_URI=mongodb+srv://sanskriti-user:SIH2024secure!@sanskriti-setu-cluster.xxxxx.mongodb.net/sanskriti-setu?retryWrites=true&w=majority
```

---

## 🧪 Test Connection:

Your backend health check will show:
- **Connected**: ✅ True
- **Status**: "connected"

Visit: `https://your-backend.onrender.com/api/health`

---

## 💡 Free Tier Benefits:
- **512 MB storage** (plenty for SIH demo)
- **Unlimited connections**
- **No time limit**
- **High availability**
- **Professional features**

Perfect for your SIH 2024 cultural platform!
