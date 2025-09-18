# Williams Collection Backend

## Описание
Backend API сервер для Williams Collection - новая независимая версия.

## Настройка

1. Установите зависимости:
```bash
npm install
```

2. Настройте переменные окружения в файле `.env`:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/williams_collection_new_db"
JWT_SECRET="your_jwt_secret_here"
PORT=3002
```

3. Запустите миграции базы данных:
```bash
npx prisma migrate dev
```

4. Запустите сервер:
```bash
npm run start:dev
```

## Порты и URLs
- Сервер работает на порту: **3002**
- API доступно по адресу: `http://localhost:3002`
- База данных: `williams_collection_new_db`

## Отличия от оригинальной версии
- Новый порт (3002 вместо 3001)
- Новая база данных (`williams_collection_new_db`)
- Новые JWT секреты
- Обновленные CORS настройки
- Новые домены в ALLOWED_ORIGINS

## API Endpoints
- `POST /auth/login` - Авторизация
- `POST /auth/signup` - Регистрация
- `GET /users/profile` - Профиль пользователя
- `PUT /users/profile` - Обновление профиля

Сервер полностью независим от оригинальной версии и может работать параллельно.