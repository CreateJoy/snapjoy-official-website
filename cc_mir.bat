@echo off
REM Claude Code Mirror Environment Setup for Windows
echo 🔄 Switching to Mirror environment...

REM Unset all Claude Code related environment variables
set ANTHROPIC_BASE_URL=
set ANTHROPIC_API_KEY=
set ANTHROPIC_AUTH_TOKEN=
set AWS_ACCESS_KEY_ID=
set AWS_SECRET_ACCESS_KEY=
set CLAUDE_CODE_USE_BEDROCK=
set AWS_REGION=
set ANTHROPIC_MODEL=
set ANTHROPIC_SMALL_FAST_MODEL=
set ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION=
set CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=
set API_TIMEOUT_MS=

REM Set Mirror environment variables
set ANTHROPIC_AUTH_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0MzcsImVtYWlsIjoiOTk4Mzc0N0BxcS5jb20iLCJzdWIiOiI0MzciLCJpYXQiOjE3NTQ0NjE3Njl9.3jG_Pohnzhzozh_zfA0qSa3KHh-ZgNtfCs_ZLXKorWs
set ANTHROPIC_BASE_URL=https://mirrorapi.o3pro.pro/api/claude
set CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
set API_TIMEOUT_MS=600000

echo ✅ Mirror Code environment activated
echo    ANTHROPIC_BASE_URL: %ANTHROPIC_BASE_URL%
echo    ANTHROPIC_AUTH_TOKEN: %ANTHROPIC_AUTH_TOKEN:~0,20%...
echo    CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: %CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC%
echo    API_TIMEOUT_MS: %API_TIMEOUT_MS%

REM Keep the environment variables for the current session
echo.
echo Environment variables have been set for the current session.
echo To make them permanent, add them to your system environment variables.
pause
