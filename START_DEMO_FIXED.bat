@echo off
echo ======================================
echo   Sanskriti Setu - Cultural Platform
echo   SIH 2024 - Problem Statement 25130
echo ======================================
echo.
echo Starting development servers...
echo - Backend will run on http://localhost:5003
echo - Frontend will run on http://localhost:3001
echo.
echo Note: MongoDB connection will gracefully fail (demo mode)
echo The frontend will still work for UI demonstration
echo.
pause
echo.
echo Starting servers...
start /b cmd /c "cd /d "%~dp0" && npm run server"
timeout /t 3 /nobreak >nul
start /b cmd /c "cd /d "%~dp0client" && npm start"
echo.
echo Servers starting... Frontend should open automatically in browser.
echo.
echo Press any key to show instructions...
pause >nul
echo.
echo ==========================================
echo DEMO INSTRUCTIONS:
echo ==========================================
echo 1. Frontend URL: http://localhost:3001
echo 2. Backend URL: http://localhost:5003
echo 3. Use demo credentials on login page:
echo    Email: demo@sanskriti.com
echo    Password: demo123
echo.
echo 4. Features to demonstrate:
echo    - Landing page with cultural theme
echo    - Registration/Login flow
echo    - Dashboard with cultural stats
echo    - Discover page (Tinder-like matching)
echo    - Cultural showcase
echo    - Profile management
echo.
echo Press CTRL+C to stop servers when done
pause
