@echo off
echo Batch Script to take input.
set /p input= Commit message?
echo Input is: %input%
git add .
git commit -m %input%
git push