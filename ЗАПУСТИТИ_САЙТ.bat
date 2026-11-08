@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Сайт CBA Suites: http://localhost:5250  (закрийте це вікно, щоб зупинити)
start "" http://localhost:5250
python -m http.server 5250 --bind 127.0.0.1 --directory dist
