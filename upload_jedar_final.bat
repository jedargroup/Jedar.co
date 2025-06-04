
@echo off
echo === بدء رفع منصة Jedar.co إلى GitHub ===

REM تهيئة Git في المجلد
git init

REM إضافة كل الملفات
git add .

REM أول Commit
git commit -m "أول رفع لموقع Jedar.co"

REM تعيين الفرع الرئيسي
git branch -M main

REM ربط المستودع على GitHub
git remote add origin https://github.com/jedargroup/Jedar.co.git

REM رفع الملفات إلى GitHub
git push -u origin main

echo === تم الرفع بنجاح إلى https://jedargroup.github.io/Jedar.co/ ===
pause
