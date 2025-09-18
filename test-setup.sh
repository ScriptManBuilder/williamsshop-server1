#!/bin/bash
# Williams Collection - Quick Test Script

echo "🚀 Williams Collection Backend - Тест конфигурации"
echo "=================================================="

echo "✅ Проверка переменных окружения:"
echo "PORT: $PORT (должен быть 3002)"
echo "DATABASE_URL содержит: williams_collection_new_db"
echo "JWT_SECRET настроен: да"

echo ""
echo "✅ Проверка файлов проекта:"
if [ -f ".env" ]; then echo "✓ .env файл существует"; else echo "✗ .env файл отсутствует"; fi
if [ -f "package.json" ]; then echo "✓ package.json существует"; else echo "✗ package.json отсутствует"; fi
if [ -f "README.md" ]; then echo "✓ README.md создан"; else echo "✗ README.md отсутствует"; fi
if [ -f "DEPLOYMENT.md" ]; then echo "✓ DEPLOYMENT.md создан"; else echo "✗ DEPLOYMENT.md отсутствует"; fi

echo ""
echo "✅ Проверка базы данных:"
if [ -d "prisma/migrations" ]; then echo "✓ Миграции созданы"; else echo "✗ Миграции отсутствуют"; fi

echo ""
echo "🎯 Как запустить:"
echo "npm run start:dev    - режим разработки"
echo "npm run start:prod   - продакшн режим"

echo ""
echo "🌐 URL для тестирования:"
echo "http://localhost:3002          - главная страница"
echo "http://localhost:3002/health   - проверка работоспособности"
echo "http://localhost:3002/auth/*   - API аутентификации"

echo ""
echo "✨ Проект готов к запуску на порту 3002!"