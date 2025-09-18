# API Testing Examples

Примеры запросов для тестирования API endpoints вашего NestJS backend.

## 🔍 Тестирование с помощью curl или Postman

### 1. Проверка состояния сервера
```bash
curl -X GET http://localhost:3000/health
```

### 2. Главная страница
```bash
curl -X GET http://localhost:3000/
```

### 3. Регистрация нового пользователя
```bash
curl -X POST http://localhost:3000/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123",
    "firstName": "John",
    "lastName": "Doe"
  }'
```

### 4. Авторизация пользователя
```bash
curl -X POST http://localhost:3000/auth/signin \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### 5. Получение профиля (защищенный роут)
```bash
# Замените YOUR_JWT_TOKEN на токен, полученный при signin
curl -X GET http://localhost:3000/auth/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### 6. Тестовый защищенный роут
```bash
# Замените YOUR_JWT_TOKEN на токен, полученный при signin
curl -X GET http://localhost:3000/auth/test \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 📊 Postman Collection JSON

Скопируйте этот JSON в Postman для быстрого импорта всех запросов:

```json
{
  "info": {
    "name": "NestJS Auth API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Health Check",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "{{baseUrl}}/health",
          "host": ["{{baseUrl}}"],
          "path": ["health"]
        }
      }
    },
    {
      "name": "Sign Up",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"email\": \"john@example.com\",\n  \"password\": \"password123\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\"\n}"
        },
        "url": {
          "raw": "{{baseUrl}}/auth/signup",
          "host": ["{{baseUrl}}"],
          "path": ["auth", "signup"]
        }
      }
    },
    {
      "name": "Sign In",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"email\": \"john@example.com\",\n  \"password\": \"password123\"\n}"
        },
        "url": {
          "raw": "{{baseUrl}}/auth/signin",
          "host": ["{{baseUrl}}"],
          "path": ["auth", "signin"]
        }
      }
    },
    {
      "name": "Get Profile",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "Authorization",
            "value": "Bearer {{accessToken}}"
          }
        ],
        "url": {
          "raw": "{{baseUrl}}/auth/profile",
          "host": ["{{baseUrl}}"],
          "path": ["auth", "profile"]
        }
      }
    },
    {
      "name": "Test Protected Route",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "Authorization",
            "value": "Bearer {{accessToken}}"
          }
        ],
        "url": {
          "raw": "{{baseUrl}}/auth/test",
          "host": ["{{baseUrl}}"],
          "path": ["auth", "test"]
        }
      }
    }
  ],
  "variable": [
    {
      "key": "baseUrl",
      "value": "http://localhost:3000"
    },
    {
      "key": "accessToken",
      "value": ""
    }
  ]
}
```

## 🏃‍♂️ Быстрый тест

Выполните эти команды последовательно для проверки работы API:

1. **Регистрация:**
```bash
curl -X POST http://localhost:3000/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "password123", "firstName": "Test"}'
```

2. **Сохраните токен из ответа и используйте его:**
```bash
# Замените TOKEN_HERE на полученный токен
curl -X GET http://localhost:3000/auth/profile \
  -H "Authorization: Bearer TOKEN_HERE"
```

## 📋 Ожидаемые ответы

### Успешная регистрация:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "test@example.com",
    "firstName": "Test",
    "createdAt": "2025-09-14T...",
    "updatedAt": "2025-09-14T..."
  }
}
```

### Ошибка дублирования email:
```json
{
  "message": "User with this email already exists",
  "error": "Conflict",
  "statusCode": 409
}
```

### Неправильные данные входа:
```json
{
  "message": "Invalid credentials",
  "error": "Unauthorized",
  "statusCode": 401
}
```

### Отсутствующий или недействительный токен:
```json
{
  "message": "Unauthorized",
  "statusCode": 401
}
```