@echo off
title SIH 2024 - Sanskriti Setu Demo Launcher
color 0A

echo.
echo  =========================================================
echo   🚀 SIH 2024 - Sanskriti Setu Cultural Exchange Platform
echo   📋 Problem Statement ID: 25130
echo   🎯 Starting One-Click Demo Launch...
echo  =========================================================
echo.

echo ⏳ Checking dependencies...
if not exist node_modules (
    echo 📦 Installing backend dependencies...
    call npm install
    if errorlevel 1 (
        echo ❌ Backend installation failed
        pause
        exit /b 1
    )
)

if not exist client\node_modules (
    echo 📦 Installing frontend dependencies...
    cd client
    call npm install
    if errorlevel 1 (
        echo ❌ Frontend installation failed
        pause
        exit /b 1
    )
    cd ..
)

echo.
echo ✅ Dependencies ready!
echo 🌐 Starting servers...
echo.
echo 📡 Backend will run on: http://localhost:5000
echo 🎨 Frontend will run on: http://localhost:3000
echo.
echo 🎮 DEMO INSTRUCTIONS:
echo    1. Wait for both servers to start (about 10-15 seconds)
echo    2. Browser will auto-open to http://localhost:3000
echo    3. Click "Join Now" → "Create Demo Profile"
echo    4. Explore: Dashboard → Discover → Cultural Showcase
echo.
echo ⚠️  Keep this window open during demo!
echo    Press Ctrl+C to stop all servers
echo.

:: Start both servers concurrently
start "Sanskriti Setu Backend" /min cmd /k "npm run server"
timeout /t 3 /nobreak >nul
start "Sanskriti Setu Frontend" /min cmd /k "cd client && npm start"

:: Wait a bit then open browser
timeout /t 10 /nobreak >nul
start http://localhost:3000

echo 🎊 Demo launched successfully!
echo 🏆 Ready for SIH 2024 presentation!
echo.
echo Press any key to open demo instructions...
pause >nul

:: Open instructions
start notepad DEMO_INSTRUCTIONS.txt

echo.
echo 🔄 Demo is running in background...
echo    Backend: Check "Sanskriti Setu Backend" window
echo    Frontend: Check "Sanskriti Setu Frontend" window
echo.
echo Press any key to exit launcher (servers will continue running)...
pause >nul
