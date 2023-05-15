@echo off
echo Git Add, Commit and Push.
set /p input= Commit message? 
@REM echo Input is: %input%
git add .
git commit -m %input%
git push