# SIH 2024 - Sanskriti Setu Demo Launcher (PowerShell)
Write-Host ""
Write-Host " =========================================================" -ForegroundColor Green
Write-Host "  🚀 SIH 2024 - Sanskriti Setu Cultural Exchange Platform" -ForegroundColor Cyan
Write-Host "  📋 Problem Statement ID: 25130" -ForegroundColor Yellow
Write-Host "  🎯 Starting One-Click Demo Launch..." -ForegroundColor Magenta
Write-Host " =========================================================" -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js detected: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found! Please install Node.js first." -ForegroundColor Red
    Write-Host "   Download from: https://nodejs.org/" -ForegroundColor Yellow
    pause
    exit 1
}

# Install backend dependencies if needed
Write-Host "⏳ Checking backend dependencies..." -ForegroundColor Yellow
if (!(Test-Path "node_modules")) {
    Write-Host "📦 Installing backend dependencies..." -ForegroundColor Blue
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Backend installation failed" -ForegroundColor Red
        pause
        exit 1
    }
}

# Install frontend dependencies if needed
Write-Host "⏳ Checking frontend dependencies..." -ForegroundColor Yellow
if (!(Test-Path "client/node_modules")) {
    Write-Host "📦 Installing frontend dependencies..." -ForegroundColor Blue
    Set-Location client
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Frontend installation failed" -ForegroundColor Red
        pause
        exit 1
    }
    Set-Location ..
}

Write-Host ""
Write-Host "✅ All dependencies ready!" -ForegroundColor Green
Write-Host "🌐 Starting servers..." -ForegroundColor Cyan
Write-Host ""
Write-Host "📡 Backend will run on: http://localhost:5000" -ForegroundColor Blue
Write-Host "🎨 Frontend will run on: http://localhost:3000" -ForegroundColor Blue
Write-Host ""
Write-Host "🎮 DEMO INSTRUCTIONS:" -ForegroundColor Yellow
Write-Host "   1. Wait for both servers to start (about 10-15 seconds)" -ForegroundColor White
Write-Host "   2. Browser will auto-open to http://localhost:3000" -ForegroundColor White  
Write-Host "   3. Click 'Join Now' → 'Create Demo Profile'" -ForegroundColor White
Write-Host "   4. Explore: Dashboard → Discover → Cultural Showcase" -ForegroundColor White
Write-Host ""
Write-Host "⚠️  Keep this window open during demo!" -ForegroundColor Red
Write-Host "   Press Ctrl+C to stop all servers" -ForegroundColor Red
Write-Host ""

# Start backend server
Write-Host "🚀 Starting backend server..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; npm run server" -WindowStyle Minimized

# Wait a bit then start frontend
Start-Sleep -Seconds 3
Write-Host "🚀 Starting frontend server..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/client'; npm start" -WindowStyle Minimized

# Wait then open browser
Start-Sleep -Seconds 10
Write-Host "🌐 Opening browser..." -ForegroundColor Cyan
Start-Process "http://localhost:3000"

Write-Host ""
Write-Host "🎊 Demo launched successfully!" -ForegroundColor Green
Write-Host "🏆 Ready for SIH 2024 presentation!" -ForegroundColor Yellow
Write-Host ""
Write-Host "📋 Opening demo instructions..." -ForegroundColor Blue

# Create and open demo instructions
$instructions = @"
🎯 SIH 2024 Demo Instructions - Sanskriti Setu

DEMO FLOW FOR JUDGES:
====================

1. LANDING PAGE (30 seconds)
   - Highlight problem statement alignment
   - Show key features overview
   - Explain cultural bridge concept

2. REGISTRATION (15 seconds)
   - Click "Join Now"
   - Click "Create Demo Profile" 
   - Show instant profile creation

3. DASHBOARD (30 seconds)
   - Point out gamification stats
   - Show activity tracking
   - Highlight quick action cards

4. DISCOVER FEATURE (60 seconds) ⭐ MAIN DEMO
   - Click "Discover People"
   - Show cultural matching cards
   - Demonstrate swipe functionality
   - Highlight compatibility scores
   - Show match success messages

5. CULTURAL SHOWCASE (45 seconds)
   - Browse festivals, traditions, cuisine
   - Show state-wise content
   - Demonstrate category switching

6. PROFILE & GAMIFICATION (30 seconds)
   - View achievement system
   - Show points and levels
   - Explain community features

TALKING POINTS:
===============
✅ "This solves cultural disconnection in modern India"
✅ "AI-powered matching creates meaningful connections"
✅ "Gamification encourages heritage preservation"
✅ "Scalable across all 28+ Indian states"
✅ "Perfect alignment with Digital India initiative"

TECHNICAL HIGHLIGHTS:
====================
- MERN Stack with TypeScript
- Real-time Socket.io integration
- MongoDB for cultural data
- JWT authentication
- Responsive design
- AI matching algorithms

SUCCESS METRICS:
================
- Cultural bridge building
- Heritage preservation tracking
- User engagement analytics
- Cross-state connections

🏆 KEY MESSAGE: "Sanskriti Setu transforms cultural exchange 
from chance encounters to meaningful, AI-powered connections
that preserve and promote India's incredible diversity."

BACKUP DEMO DATA:
================
- 3 sample matches ready (Punjab, Kerala, Gujarat)
- Cultural content for Maharashtra loaded
- Gamification system active
- All features working offline-ready

Good luck! 🇮🇳
"@

$instructions | Out-File -FilePath "DEMO_INSTRUCTIONS.txt" -Encoding UTF8
Start-Process notepad "DEMO_INSTRUCTIONS.txt"

Write-Host ""
Write-Host "🔄 Demo is now running in background windows..." -ForegroundColor Blue
Write-Host "   Check minimized PowerShell windows if needed" -ForegroundColor Gray
Write-Host ""
Write-Host "Press any key to exit launcher (servers will continue running)..." -ForegroundColor White
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
