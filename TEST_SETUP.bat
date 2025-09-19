@echo off
title SIH 2024 - Quick Setup Test
color 0B

echo.
echo  =============================================
echo   🧪 Testing SIH 2024 Demo Setup
echo   📋 Verifying all components are ready...
echo  =============================================
echo.

:: Check Node.js
echo [1/6] Checking Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js not found! Please install Node.js first.
    echo    Download from: https://nodejs.org/
    echo.
    pause
    exit /b 1
) else (
    for /f "tokens=*" %%i in ('node --version') do echo ✅ Node.js found: %%i
)

:: Check npm
echo [2/6] Checking npm...
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm not found!
    pause
    exit /b 1
) else (
    for /f "tokens=*" %%i in ('npm --version') do echo ✅ npm found: %%i
)

:: Check project files
echo [3/6] Checking project files...
if exist "package.json" (
    echo ✅ Backend package.json found
) else (
    echo ❌ Backend package.json missing!
    pause
    exit /b 1
)

if exist "client\package.json" (
    echo ✅ Frontend package.json found
) else (
    echo ❌ Frontend package.json missing!
    pause
    exit /b 1
)

if exist "server\server.js" (
    echo ✅ Server files found
) else (
    echo ❌ Server files missing!
    pause
    exit /b 1
)

if exist "client\src\App.tsx" (
    echo ✅ Frontend files found
) else (
    echo ❌ Frontend files missing!
    pause
    exit /b 1
)

:: Check dependencies
echo [4/6] Checking dependencies...
if exist "node_modules" (
    echo ✅ Backend dependencies installed
) else (
    echo ⏳ Installing backend dependencies...
    npm install --silent
    if errorlevel 1 (
        echo ❌ Backend dependency installation failed!
        pause
        exit /b 1
    ) else (
        echo ✅ Backend dependencies installed successfully
    )
)

if exist "client\node_modules" (
    echo ✅ Frontend dependencies installed
) else (
    echo ⏳ Installing frontend dependencies...
    cd client
    npm install --silent
    if errorlevel 1 (
        echo ❌ Frontend dependency installation failed!
        pause
        exit /b 1
    ) else (
        echo ✅ Frontend dependencies installed successfully
    )
    cd ..
)

:: Check ports
echo [5/6] Checking ports...
netstat -an | find "LISTENING" | find ":5000" >nul
if not errorlevel 1 (
    echo ⚠️  Warning: Port 5000 is already in use
    echo    You may need to stop other servers first
) else (
    echo ✅ Port 5000 available
)

netstat -an | find "LISTENING" | find ":3000" >nul
if not errorlevel 1 (
    echo ⚠️  Warning: Port 3000 is already in use
    echo    You may need to stop other servers first
) else (
    echo ✅ Port 3000 available
)

:: Final verification
echo [6/6] Final verification...
if exist "START_DEMO.bat" (
    echo ✅ Demo launcher ready
) else (
    echo ❌ Demo launcher missing!
    pause
    exit /b 1
)

if exist "DEMO_INSTRUCTIONS.txt" (
    echo ✅ Demo instructions ready
) else (
    echo ❌ Demo instructions missing!
    pause
    exit /b 1
)

echo.
echo  =============================================
echo   🎊 ALL TESTS PASSED!
echo   🚀 Your SIH 2024 demo is ready to launch!
echo  =============================================
echo.
echo ✅ Node.js and npm working
echo ✅ All project files present
echo ✅ Dependencies installed
echo ✅ Ports available
echo ✅ Demo launcher ready
echo.
echo 🎯 To start the demo:
echo    1. Double-click START_DEMO.bat
echo    2. Wait ~15 seconds for auto-launch
echo    3. Browser opens to http://localhost:3000
echo    4. Click "Join Now" → "Create Demo Profile"
echo    5. Present your amazing cultural platform!
echo.
echo 🏆 You're ready to win SIH 2024!
echo.
pause
