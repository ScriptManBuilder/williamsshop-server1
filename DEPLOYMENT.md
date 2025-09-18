# Williams Collection Backend - Deployment Guide

## Production Environment Variables

```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/williams_collection_prod_db"

# JWT
JWT_SECRET="super_secure_production_jwt_secret_williams_2024"
JWT_EXPIRES_IN="7d"

# Server
PORT=3002
NODE_ENV=production

# CORS
ALLOWED_ORIGINS="https://williams-collection-new.com,https://www.williams-collection-new.com,https://api.williams-collection-new.com"

# Email (если нужно)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="noreply@williams-collection-new.com"
SMTP_PASS="app_password_here"
```

## Deployment Steps

1. **Database Setup**
   - Создайте новую PostgreSQL базу данных: `williams_collection_prod_db`
   - Обновите DATABASE_URL с production параметрами

2. **Environment Variables**
   - Установите все переменные окружения на production сервере
   - Убедитесь что JWT_SECRET уникален и безопасен

3. **Build & Deploy**
   ```bash
   npm install
   npm run build
   npm run start:prod
   ```

4. **Database Migration**
   ```bash
   npx prisma migrate deploy
   ```

## Monitoring
- Сервер будет доступен на порту 3002
- Логи доступны через: `pm2 logs` (если используете PM2)

## Security Notes
- Используйте HTTPS в production
- Регулярно обновляйте JWT_SECRET
- Ограничьте CORS только нужными доменами
- Используйте SSL для подключения к базе данных