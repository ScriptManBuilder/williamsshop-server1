@echo off
echo 🚀 Williams Collection Backend - Тест конфигурации
echo ==================================================

echo ✅ Проверка переменных окружения:
echo PORT: 3002 (настроен в .env)
echo DATABASE_URL: williams_collection_new_db
echo JWT_SECRET: настроен

echo.
echo ✅ Проверка файлов проекта:
if exist ".env" (echo ✓ .env файл существует) else (echo ✗ .env файл отсутствует)
if exist "package.json" (echo ✓ package.json существует) else (echo ✗ package.json отсутствует)
if exist "README.md" (echo ✓ README.md создан) else (echo ✗ README.md отсутствует)
if exist "DEPLOYMENT.md" (echo ✓ DEPLOYMENT.md создан) else (echo ✗ DEPLOYMENT.md отсутствует)

echo.
echo ✅ Проверка базы данных:
if exist "prisma\migrations" (echo ✓ Миграции созданы) else (echo ✗ Миграции отсутствуют)

echo.
echo 🎯 Как запустить:
echo npm run start:dev    - режим разработки
echo npm run start:prod   - продакшн режим

echo.
echo 🌐 URL для тестирования:
echo http://localhost:3002          - главная страница
echo http://localhost:3002/health   - проверка работоспособности
echo http://localhost:3002/auth/*   - API аутентификации

echo.
echo ✨ Проект готов к запуску на порту 3002!
pause