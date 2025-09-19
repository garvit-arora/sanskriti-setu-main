@echo off
echo Creating desktop shortcut for SIH 2024 Demo...

set SCRIPT_DIR=%~dp0
set DESKTOP=%USERPROFILE%\Desktop

:: Create a PowerShell script to create the shortcut
echo $WshShell = New-Object -comObject WScript.Shell > "%TEMP%\createshortcut.ps1"
echo $Shortcut = $WshShell.CreateShortcut("%DESKTOP%\🚀 SIH 2024 - Sanskriti Setu Demo.lnk") >> "%TEMP%\createshortcut.ps1"
echo $Shortcut.TargetPath = "%SCRIPT_DIR%START_DEMO.bat" >> "%TEMP%\createshortcut.ps1"
echo $Shortcut.WorkingDirectory = "%SCRIPT_DIR%" >> "%TEMP%\createshortcut.ps1"
echo $Shortcut.Description = "SIH 2024 - Sanskriti Setu Cultural Exchange Platform Demo" >> "%TEMP%\createshortcut.ps1"
echo $Shortcut.IconLocation = "%SCRIPT_DIR%START_DEMO.bat,0" >> "%TEMP%\createshortcut.ps1"
echo $Shortcut.Save() >> "%TEMP%\createshortcut.ps1"

:: Execute the PowerShell script
powershell -ExecutionPolicy Bypass -File "%TEMP%\createshortcut.ps1"

:: Clean up
del "%TEMP%\createshortcut.ps1"

echo.
echo ✅ Desktop shortcut created!
echo 🖥️ Look for "🚀 SIH 2024 - Sanskriti Setu Demo" on your desktop
echo.
pause
