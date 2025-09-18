import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();
  
  try {
    console.log('🔄 Проверяем подключение к базе данных...');
    
    // Попробуем выполнить простой запрос
    await prisma.$connect();
    console.log('✅ Подключение к базе данных успешно!');
    
    // Проверим, существует ли таблица users
    try {
      const userCount = await prisma.user.count();
      console.log(`📊 Найдено пользователей в базе: ${userCount}`);
    } catch (error) {
      console.log('⚠️ Таблица users еще не создана. Выполните миграцию: npx prisma migrate dev');
    }
    
  } catch (error) {
    console.error('❌ Ошибка подключения к базе данных:');
    console.error('Убедитесь что:');
    console.error('1. PostgreSQL сервер запущен');
    console.error('2. База данных elariosso_db создана');
    console.error('3. Строка подключения в .env корректна');
    console.error('\nДетали ошибки:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();