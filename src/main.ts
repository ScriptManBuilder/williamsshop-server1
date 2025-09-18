import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Получаем разрешенные origins из переменных окружения
  const allowedOrigins = process.env.ALLOWED_ORIGINS 
    ? process.env.ALLOWED_ORIGINS.split(',')
    : [
        'https://willcol.com',
        'https://www.willcol.com',
        'https://api.willcol.com',
        'https://www.williams-collection-new.com',
        'https://williams-collection-new.com', 
        'https://api.williams-collection-new.com',
        'https://williams-collection-server-new.onrender.com',
        'http://localhost:3000',
        'http://localhost:3002'
      ]; // fallback для разработки

  // Настройка CORS
  app.enableCors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type', 
      'Authorization', 
      'X-Requested-With',
      'Accept',
      'Origin'
    ],
    credentials: true,
  });
  
  const port = process.env.PORT || 3002;
  await app.listen(port);
  
  console.log(`🚀 Backend запущен на порту ${port}`);
  console.log(`🌐 CORS разрешен для: ${allowedOrigins.join(', ')}`);
}
bootstrap();
