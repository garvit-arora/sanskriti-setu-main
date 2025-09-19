@echo off
title SIH 2024 - Stop Sanskriti Setu Demo
color 0C

echo.
echo  =========================================
echo   🛑 Stopping Sanskriti Setu Demo
echo   🔄 Killing all Node.js processes...
echo  =========================================
echo.

:: Kill all Node.js processes
taskkill /F /IM node.exe >nul 2>&1
taskkill /F /IM npm.exe >nul 2>&1

:: Kill any PowerShell processes that might be running the servers
for /f "tokens=1" %%i in ('wmic process where "name='powershell.exe' and commandline like '%%npm run%%'" get processid /value ^| find "ProcessId"') do (
    for /f "tokens=2 delims==" %%j in ("%%i") do (
        taskkill /F /PID %%j >nul 2>&1
    )
)

:: Close any opened browser tabs (optional)
:: taskkill /F /IM chrome.exe >nul 2>&1
:: taskkill /F /IM msedge.exe >nul 2>&1
:: taskkill /F /IM firefox.exe >nul 2>&1

echo ✅ All demo servers stopped!
echo 🧹 Cleanup complete.
echo.
echo Press any key to close this window...
pause >nul
